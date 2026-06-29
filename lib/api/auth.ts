import bcrypt from "bcryptjs";
import type { NextRequest } from "next/server";
import { ApiError } from "@/lib/api/errors";
import { getPrisma } from "@/lib/api/prisma";
import {
  adminSessionCookieName,
  csrfHeaderName,
  getSecureCookieOptions,
  randomToken,
  sha256,
} from "@/lib/api/security";

const rememberMeMaxAge = 60 * 60 * 24 * 30;
const sessionMaxAge = 60 * 60 * 8;

export async function loginAdmin(params: {
  email: string;
  password: string;
  remember: boolean;
  ipAddress: string;
  userAgent?: string | null;
}) {
  const prisma = getPrisma();
  const email = params.email.toLowerCase().trim();

  const failedAttempts = await prisma.loginAttempt.count({
    where: {
      email,
      success: false,
      attemptedAt: { gte: new Date(Date.now() - 15 * 60 * 1000) },
    },
  });

  if (failedAttempts >= 5) {
    throw new ApiError(423, "ACCOUNT_TEMPORARILY_LOCKED", "Çok fazla hatalı giriş denemesi yapıldı.");
  }

  const admin = await prisma.adminUser.findUnique({ where: { email } });
  const isPasswordValid = admin ? await bcrypt.compare(params.password, admin.passwordHash) : false;

  await prisma.loginAttempt.create({
    data: {
      email,
      ipAddress: params.ipAddress,
      success: Boolean(admin?.isActive && isPasswordValid),
    },
  });

  if (!admin || !admin.isActive || !isPasswordValid) {
    throw new ApiError(401, "INVALID_CREDENTIALS", "E-posta veya şifre hatalı.");
  }

  const rawToken = randomToken();
  const csrfToken = randomToken(24);
  const maxAge = params.remember ? rememberMeMaxAge : sessionMaxAge;
  const expiresAt = new Date(Date.now() + maxAge * 1000);

  await prisma.adminSession.create({
    data: {
      adminUserId: admin.id,
      tokenHash: sha256(rawToken),
      csrfToken,
      userAgent: params.userAgent || undefined,
      ipAddress: params.ipAddress,
      expiresAt,
    },
  });

  await prisma.adminUser.update({
    where: { id: admin.id },
    data: { lastLoginAt: new Date() },
  });

  return {
    cookie: {
      name: adminSessionCookieName,
      value: rawToken,
      options: getSecureCookieOptions(maxAge),
    },
    csrfToken,
    admin: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    },
  };
}

export async function requireAdmin(request: NextRequest) {
  const token = request.cookies.get(adminSessionCookieName)?.value;
  if (!token) {
    throw new ApiError(401, "UNAUTHENTICATED", "Admin oturumu bulunamadı.");
  }

  const prisma = getPrisma();
  const session = await prisma.adminSession.findUnique({
    where: { tokenHash: sha256(token) },
    include: { adminUser: true },
  });

  if (!session || session.expiresAt <= new Date() || !session.adminUser.isActive) {
    throw new ApiError(401, "SESSION_EXPIRED", "Admin oturumu geçersiz veya süresi dolmuş.");
  }

  if (["POST", "PUT", "PATCH", "DELETE"].includes(request.method)) {
    const csrfToken = request.headers.get(csrfHeaderName);
    if (!csrfToken || csrfToken !== session.csrfToken) {
      throw new ApiError(403, "CSRF_TOKEN_INVALID", "CSRF doğrulaması başarısız.");
    }
  }

  return {
    sessionId: session.id,
    csrfToken: session.csrfToken,
    admin: {
      id: session.adminUser.id,
      email: session.adminUser.email,
      name: session.adminUser.name,
      role: session.adminUser.role,
    },
  };
}

export async function logoutAdmin(request: NextRequest) {
  const token = request.cookies.get(adminSessionCookieName)?.value;
  if (!token) return;

  await getPrisma().adminSession.deleteMany({
    where: { tokenHash: sha256(token) },
  });
}

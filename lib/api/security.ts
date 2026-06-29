import crypto from "node:crypto";
import type { NextRequest } from "next/server";
import { ApiError } from "@/lib/api/errors";

export const adminSessionCookieName = "dtkc_admin_session";
export const csrfHeaderName = "x-csrf-token";

export function randomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString("base64url");
}

export function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function getSecureCookieOptions(maxAgeSeconds: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: maxAgeSeconds,
  };
}

export function assertSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return;

  const expected = request.nextUrl.origin;
  if (origin !== expected) {
    throw new ApiError(403, "BAD_ORIGIN", "İstek kaynağı doğrulanamadı.");
  }
}

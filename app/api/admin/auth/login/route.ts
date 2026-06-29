import type { NextRequest } from "next/server";
import { loginAdmin } from "@/lib/api/auth";
import { handleApiError, ok } from "@/lib/api/response";
import { getClientIp, readJson, requiredString } from "@/lib/api/request";
import { rateLimit } from "@/lib/api/rate-limit";
import { assertSameOrigin } from "@/lib/api/security";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    assertSameOrigin(request);
    rateLimit(`login:${getClientIp(request)}`, 10, 15 * 60 * 1000);

    const payload = await readJson(request);
    const result = await loginAdmin({
      email: requiredString(payload, "email"),
      password: requiredString(payload, "password"),
      remember: payload.remember === true,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get("user-agent"),
    });

    const response = ok({
      admin: result.admin,
      csrfToken: result.csrfToken,
    });
    response.headers.append(
      "Set-Cookie",
      `${result.cookie.name}=${result.cookie.value}; Path=/; Max-Age=${result.cookie.options.maxAge}; HttpOnly; SameSite=Lax${
        result.cookie.options.secure ? "; Secure" : ""
      }`,
    );

    return response;
  } catch (error) {
    return handleApiError(error);
  }
}

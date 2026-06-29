import type { NextRequest } from "next/server";
import { logoutAdmin } from "@/lib/api/auth";
import { adminSessionCookieName } from "@/lib/api/security";
import { handleApiError, ok } from "@/lib/api/response";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    await logoutAdmin(request);
    const response = ok({ loggedOut: true });
    response.headers.append("Set-Cookie", `${adminSessionCookieName}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`);
    return response;
  } catch (error) {
    return handleApiError(error);
  }
}

import { adminHandler } from "@/lib/api/handlers";
import { requireAdmin } from "@/lib/api/auth";
import { ok } from "@/lib/api/response";

export const dynamic = "force-dynamic";

export const GET = adminHandler(async (request) => {
  const session = await requireAdmin(request);
  return ok({
    admin: session.admin,
    csrfToken: session.csrfToken,
  });
});

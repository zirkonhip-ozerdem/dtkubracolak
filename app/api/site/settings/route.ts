import { publicHandler } from "@/lib/api/handlers";
import { ok } from "@/lib/api/response";
import { getPublicSiteSettings } from "@/lib/modules/settings/service";

export const dynamic = "force-dynamic";

export const GET = publicHandler(async () => {
  return ok(await getPublicSiteSettings());
});

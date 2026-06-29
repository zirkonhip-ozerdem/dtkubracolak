import { adminHandler } from "@/lib/api/handlers";
import { ok } from "@/lib/api/response";
import { readJson } from "@/lib/api/request";
import { getPublicSiteSettings, upsertSiteSettings } from "@/lib/modules/settings/service";

export const dynamic = "force-dynamic";

export const GET = adminHandler(async () => {
  return ok(await getPublicSiteSettings());
});

export const PUT = adminHandler(async (request) => {
  return ok(await upsertSiteSettings(await readJson(request)));
});

import { adminHandler } from "@/lib/api/handlers";
import { created, ok } from "@/lib/api/response";
import { readJson } from "@/lib/api/request";
import {
  createTreatmentCategory,
  listAdminTreatmentCategories,
} from "@/lib/modules/treatments/service";

export const dynamic = "force-dynamic";

export const GET = adminHandler(async () => {
  return ok(await listAdminTreatmentCategories());
});

export const POST = adminHandler(async (request) => {
  return created(await createTreatmentCategory(await readJson(request)));
});

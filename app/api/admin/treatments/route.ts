import { adminHandler } from "@/lib/api/handlers";
import { created, ok } from "@/lib/api/response";
import { readJson } from "@/lib/api/request";
import { createTreatment, listAdminTreatments } from "@/lib/modules/treatments/service";

export const dynamic = "force-dynamic";

export const GET = adminHandler(async () => {
  return ok(await listAdminTreatments());
});

export const POST = adminHandler(async (request) => {
  return created(await createTreatment(await readJson(request)));
});

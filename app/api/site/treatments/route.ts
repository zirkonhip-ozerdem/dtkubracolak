import { publicHandler } from "@/lib/api/handlers";
import { ok } from "@/lib/api/response";
import { listPublicTreatments } from "@/lib/modules/treatments/service";

export const dynamic = "force-dynamic";

export const GET = publicHandler(async () => {
  return ok(await listPublicTreatments());
});

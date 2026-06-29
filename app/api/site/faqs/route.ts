import { publicHandler } from "@/lib/api/handlers";
import { ok } from "@/lib/api/response";
import { listPublicFaqs } from "@/lib/modules/faqs/service";

export const dynamic = "force-dynamic";

export const GET = publicHandler(async () => {
  return ok(await listPublicFaqs());
});

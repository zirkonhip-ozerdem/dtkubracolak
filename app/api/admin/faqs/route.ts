import { adminHandler } from "@/lib/api/handlers";
import { created, ok } from "@/lib/api/response";
import { readJson } from "@/lib/api/request";
import { createFaq, listAdminFaqs } from "@/lib/modules/faqs/service";

export const dynamic = "force-dynamic";

export const GET = adminHandler(async () => {
  return ok(await listAdminFaqs());
});

export const POST = adminHandler(async (request) => {
  return created(await createFaq(await readJson(request)));
});

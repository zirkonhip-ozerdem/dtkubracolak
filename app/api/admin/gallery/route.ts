import { adminHandler } from "@/lib/api/handlers";
import { created, ok } from "@/lib/api/response";
import { readJson } from "@/lib/api/request";
import { createGalleryItem, listAdminGalleryItems } from "@/lib/modules/gallery/service";

export const dynamic = "force-dynamic";

export const GET = adminHandler(async () => {
  return ok(await listAdminGalleryItems());
});

export const POST = adminHandler(async (request) => {
  return created(await createGalleryItem(await readJson(request)));
});

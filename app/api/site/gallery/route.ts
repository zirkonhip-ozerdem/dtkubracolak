import { publicHandler } from "@/lib/api/handlers";
import { ok } from "@/lib/api/response";
import { listPublicGalleryItems } from "@/lib/modules/gallery/service";

export const dynamic = "force-dynamic";

export const GET = publicHandler(async () => {
  return ok(await listPublicGalleryItems());
});

import type { MediaFolder } from "@prisma/client";
import { adminHandler } from "@/lib/api/handlers";
import { created } from "@/lib/api/response";
import { saveImageUpload } from "@/lib/modules/media/service";

export const dynamic = "force-dynamic";

export const POST = adminHandler(async (request) => {
  const formData = await request.formData();
  const file = formData.get("file");
  const folder = String(formData.get("folder") || "SITE").toUpperCase() as MediaFolder;

  if (!(file instanceof File)) {
    return Response.json(
      { success: false, error: { code: "FILE_REQUIRED", message: "file alanı zorunludur." } },
      { status: 400 },
    );
  }

  return created(await saveImageUpload(file, folder));
});

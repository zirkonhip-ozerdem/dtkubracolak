import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { MediaFolder } from "@prisma/client";
import { ApiError } from "@/lib/api/errors";
import { getPrisma } from "@/lib/api/prisma";

const folderMap: Record<MediaFolder, string> = {
  CATEGORIES: "categories",
  TREATMENTS: "treatments",
  BLOG: "blog",
  GALLERY: "gallery",
  SITE: "site",
};

export async function saveImageUpload(file: File, folder: MediaFolder) {
  if (!file.type.startsWith("image/")) {
    throw new ApiError(400, "INVALID_FILE_TYPE", "Sadece görsel dosyaları yüklenebilir.");
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new ApiError(400, "FILE_TOO_LARGE", "Görsel boyutu 5MB üzerinde olamaz.");
  }

  const targetFolder = folderMap[folder];
  if (!targetFolder) {
    throw new ApiError(400, "INVALID_MEDIA_FOLDER", "Geçerli bir medya klasörü seçilmelidir.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const optimized = await sharp(buffer).rotate().webp({ quality: 82 }).toBuffer({ resolveWithObject: true });
  const fileName = `${randomUUID()}.webp`;
  const relativeDir = `/uploads/${targetFolder}`;
  const diskDir = path.join(process.cwd(), "public", relativeDir);
  const diskPath = path.join(diskDir, fileName);

  await mkdir(diskDir, { recursive: true });
  await writeFile(diskPath, optimized.data);

  return getPrisma().mediaAsset.create({
    data: {
      folder,
      originalName: file.name,
      fileName,
      mimeType: "image/webp",
      size: optimized.data.byteLength,
      width: optimized.info.width,
      height: optimized.info.height,
      url: `${relativeDir}/${fileName}`,
    },
  });
}

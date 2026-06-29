import type { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getPrisma } from "@/lib/api/prisma";
import {
  optionalBoolean,
  optionalNumber,
  optionalString,
  requiredString,
  type JsonObject,
} from "@/lib/api/request";

export async function listPublicGalleryItems() {
  return getPrisma().galleryItem.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
  });
}

export async function listAdminGalleryItems() {
  return getPrisma().galleryItem.findMany({
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
  });
}

export async function createGalleryItem(payload: JsonObject) {
  const item = await getPrisma().galleryItem.create({ data: buildGalleryData(payload) as Prisma.GalleryItemCreateInput });
  revalidateGalleryPaths();
  return item;
}

export async function updateGalleryItem(id: number, payload: JsonObject) {
  const item = await getPrisma().galleryItem.update({ where: { id }, data: buildGalleryData(payload, true) as Prisma.GalleryItemUpdateInput });
  revalidateGalleryPaths();
  return item;
}

export async function deleteGalleryItem(id: number) {
  const item = await getPrisma().galleryItem.delete({ where: { id } });
  revalidateGalleryPaths();
  return item;
}

function buildGalleryData(payload: JsonObject, partial = false): Record<string, unknown> {
  return {
    titleTr: optionalString(payload, "titleTr"),
    titleEn: optionalString(payload, "titleEn"),
    titleDe: optionalString(payload, "titleDe"),
    imageUrl: partial ? optionalString(payload, "imageUrl") ?? undefined : requiredString(payload, "imageUrl"),
    imageAltTr: optionalString(payload, "imageAltTr"),
    imageAltEn: optionalString(payload, "imageAltEn"),
    imageAltDe: optionalString(payload, "imageAltDe"),
    isActive: optionalBoolean(payload, "isActive"),
    sortOrder: optionalNumber(payload, "sortOrder"),
  };
}

function revalidateGalleryPaths() {
  ["/tr/galeri", "/en/galeri", "/de/galeri"].forEach((path) => revalidatePath(path));
}

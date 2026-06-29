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
import { sanitizeHtml, sanitizeText } from "@/lib/api/sanitize";

export async function listPublicTreatments() {
  return getPrisma().treatmentCategory.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
    include: {
      treatments: {
        where: { isActive: true, status: "PUBLISHED" },
        orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
      },
    },
  });
}

export async function listAdminTreatmentCategories() {
  return getPrisma().treatmentCategory.findMany({
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
    include: { _count: { select: { treatments: true } } },
  });
}

export async function createTreatmentCategory(payload: JsonObject) {
  return getPrisma().treatmentCategory.create({
    data: buildTreatmentCategoryData(payload) as Prisma.TreatmentCategoryUncheckedCreateInput,
  });
}

export async function updateTreatmentCategory(id: number, payload: JsonObject) {
  return getPrisma().treatmentCategory.update({
    where: { id },
    data: buildTreatmentCategoryData(payload, true) as Prisma.TreatmentCategoryUncheckedUpdateInput,
  });
}

export async function deleteTreatmentCategory(id: number) {
  return getPrisma().treatmentCategory.delete({ where: { id } });
}

export async function listAdminTreatments() {
  return getPrisma().treatment.findMany({
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
    include: { category: true },
  });
}

export async function createTreatment(payload: JsonObject) {
  const treatment = await getPrisma().treatment.create({
    data: buildTreatmentData(payload) as Prisma.TreatmentUncheckedCreateInput,
  });
  revalidateTreatmentPaths();
  return treatment;
}

export async function updateTreatment(id: number, payload: JsonObject) {
  const treatment = await getPrisma().treatment.update({
    where: { id },
    data: buildTreatmentData(payload, true) as Prisma.TreatmentUncheckedUpdateInput,
  });
  revalidateTreatmentPaths();
  return treatment;
}

export async function deleteTreatment(id: number) {
  const treatment = await getPrisma().treatment.delete({ where: { id } });
  revalidateTreatmentPaths();
  return treatment;
}

function buildTreatmentCategoryData(payload: JsonObject, partial = false): Record<string, unknown> {
  return {
    slug: partial ? optionalString(payload, "slug") ?? undefined : sanitizeText(requiredString(payload, "slug")),
    nameTr: partial ? optionalString(payload, "nameTr") ?? undefined : sanitizeText(requiredString(payload, "nameTr")),
    nameEn: partial ? optionalString(payload, "nameEn") ?? undefined : sanitizeText(requiredString(payload, "nameEn")),
    nameDe: partial ? optionalString(payload, "nameDe") ?? undefined : sanitizeText(requiredString(payload, "nameDe")),
    imageUrl: optionalString(payload, "imageUrl"),
    isActive: optionalBoolean(payload, "isActive"),
    sortOrder: optionalNumber(payload, "sortOrder"),
  };
}

function buildTreatmentData(payload: JsonObject, partial = false): Record<string, unknown> {
  const categoryId = optionalNumber(payload, "categoryId");

  return {
    categoryId: categoryId ?? (partial ? undefined : optionalNumber(payload, "category_id")),
    slug: partial ? optionalString(payload, "slug") ?? undefined : sanitizeText(requiredString(payload, "slug")),
    nameTr: partial ? optionalString(payload, "nameTr") ?? undefined : sanitizeText(requiredString(payload, "nameTr")),
    nameEn: partial ? optionalString(payload, "nameEn") ?? undefined : sanitizeText(requiredString(payload, "nameEn")),
    nameDe: partial ? optionalString(payload, "nameDe") ?? undefined : sanitizeText(requiredString(payload, "nameDe")),
    leadTr: optionalString(payload, "leadTr"),
    leadEn: optionalString(payload, "leadEn"),
    leadDe: optionalString(payload, "leadDe"),
    introTr: optionalString(payload, "introTr") ? sanitizeHtml(optionalString(payload, "introTr") || "") : undefined,
    introEn: optionalString(payload, "introEn") ? sanitizeHtml(optionalString(payload, "introEn") || "") : undefined,
    introDe: optionalString(payload, "introDe") ? sanitizeHtml(optionalString(payload, "introDe") || "") : undefined,
    imageUrl: optionalString(payload, "imageUrl"),
    isFeatured: optionalBoolean(payload, "isFeatured"),
    videoUrl: optionalString(payload, "videoUrl"),
    isActive: optionalBoolean(payload, "isActive"),
    status: optionalString(payload, "status") as Prisma.TreatmentUncheckedCreateInput["status"],
    sortOrder: optionalNumber(payload, "sortOrder"),
    seoTitleTr: optionalString(payload, "seoTitleTr"),
    seoTitleEn: optionalString(payload, "seoTitleEn"),
    seoTitleDe: optionalString(payload, "seoTitleDe"),
    seoDescTr: optionalString(payload, "seoDescTr"),
    seoDescEn: optionalString(payload, "seoDescEn"),
    seoDescDe: optionalString(payload, "seoDescDe"),
  };
}

function revalidateTreatmentPaths() {
  ["/tr/tedaviler", "/en/tedaviler", "/de/tedaviler"].forEach((path) => revalidatePath(path));
}

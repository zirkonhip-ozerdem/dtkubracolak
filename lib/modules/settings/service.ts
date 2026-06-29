import { revalidatePath } from "next/cache";
import { getPrisma } from "@/lib/api/prisma";
import { optionalString, requiredString, type JsonObject } from "@/lib/api/request";

export async function getPublicSiteSettings() {
  return getPrisma().siteSetting.findUnique({ where: { id: 1 } });
}

export async function upsertSiteSettings(payload: JsonObject) {
  const data = {
    siteName: optionalString(payload, "siteName"),
    email: requiredString(payload, "email"),
    phone: requiredString(payload, "phone"),
    addressTr: requiredString(payload, "addressTr"),
    addressEn: optionalString(payload, "addressEn"),
    addressDe: optionalString(payload, "addressDe"),
    whatsappPhone: optionalString(payload, "whatsappPhone"),
    instagramUrl: optionalString(payload, "instagramUrl"),
    seoTitleTr: optionalString(payload, "seoTitleTr"),
    seoTitleEn: optionalString(payload, "seoTitleEn"),
    seoTitleDe: optionalString(payload, "seoTitleDe"),
    seoDescTr: optionalString(payload, "seoDescTr"),
    seoDescEn: optionalString(payload, "seoDescEn"),
    seoDescDe: optionalString(payload, "seoDescDe"),
  };

  const settings = await getPrisma().siteSetting.upsert({
    where: { id: 1 },
    create: { id: 1, ...data },
    update: data,
  });

  ["/tr", "/en", "/de"].forEach((path) => revalidatePath(path));
  return settings;
}

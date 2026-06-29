import type { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getPrisma } from "@/lib/api/prisma";
import { optionalBoolean, optionalString, requiredString, type JsonObject } from "@/lib/api/request";
import { sanitizeHtml, sanitizeText } from "@/lib/api/sanitize";

export async function listPublicBlogPosts() {
  return getPrisma().blogPost.findMany({
    where: { isActive: true, status: "PUBLISHED" },
    orderBy: [{ publishedAt: "desc" }, { id: "desc" }],
  });
}

export async function listAdminBlogPosts() {
  return getPrisma().blogPost.findMany({
    orderBy: [{ updatedAt: "desc" }, { id: "desc" }],
  });
}

export async function createBlogPost(payload: JsonObject) {
  const post = await getPrisma().blogPost.create({ data: buildBlogPostData(payload) as Prisma.BlogPostCreateInput });
  revalidateBlogPaths();
  return post;
}

export async function updateBlogPost(id: number, payload: JsonObject) {
  const post = await getPrisma().blogPost.update({ where: { id }, data: buildBlogPostData(payload, true) as Prisma.BlogPostUpdateInput });
  revalidateBlogPaths();
  return post;
}

export async function deleteBlogPost(id: number) {
  const post = await getPrisma().blogPost.delete({ where: { id } });
  revalidateBlogPaths();
  return post;
}

function buildBlogPostData(payload: JsonObject, partial = false): Record<string, unknown> {
  return {
    titleTr: partial ? optionalString(payload, "titleTr") ?? undefined : sanitizeText(requiredString(payload, "titleTr")),
    titleEn: optionalString(payload, "titleEn"),
    titleDe: optionalString(payload, "titleDe"),
    slugTr: partial ? optionalString(payload, "slugTr") ?? undefined : sanitizeText(requiredString(payload, "slugTr")),
    slugEn: optionalString(payload, "slugEn"),
    slugDe: optionalString(payload, "slugDe"),
    excerptTr: partial ? optionalString(payload, "excerptTr") ?? undefined : sanitizeText(requiredString(payload, "excerptTr")),
    excerptEn: optionalString(payload, "excerptEn"),
    excerptDe: optionalString(payload, "excerptDe"),
    contentTr: partial ? optionalString(payload, "contentTr") ?? undefined : sanitizeHtml(requiredString(payload, "contentTr")),
    contentEn: optionalString(payload, "contentEn") ? sanitizeHtml(optionalString(payload, "contentEn") || "") : undefined,
    contentDe: optionalString(payload, "contentDe") ? sanitizeHtml(optionalString(payload, "contentDe") || "") : undefined,
    imageUrl: partial ? optionalString(payload, "imageUrl") ?? undefined : requiredString(payload, "imageUrl"),
    imageAltTr: optionalString(payload, "imageAltTr"),
    imageAltEn: optionalString(payload, "imageAltEn"),
    imageAltDe: optionalString(payload, "imageAltDe"),
    seoKeywordsTr: optionalString(payload, "seoKeywordsTr"),
    seoKeywordsEn: optionalString(payload, "seoKeywordsEn"),
    seoKeywordsDe: optionalString(payload, "seoKeywordsDe"),
    status: optionalString(payload, "status") as Prisma.BlogPostCreateInput["status"],
    isActive: optionalBoolean(payload, "isActive"),
    publishedAt: optionalString(payload, "publishedAt") ? new Date(optionalString(payload, "publishedAt") || "") : undefined,
  };
}

function revalidateBlogPaths() {
  ["/tr/blog", "/en/blog", "/de/blog"].forEach((path) => revalidatePath(path));
}

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

export async function listPublicFaqs() {
  return getPrisma().faq.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
  });
}

export async function listAdminFaqs() {
  return getPrisma().faq.findMany({
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
  });
}

export async function createFaq(payload: JsonObject) {
  const faq = await getPrisma().faq.create({ data: buildFaqData(payload) as Prisma.FaqCreateInput });
  revalidateFaqPaths();
  return faq;
}

export async function updateFaq(id: number, payload: JsonObject) {
  const faq = await getPrisma().faq.update({ where: { id }, data: buildFaqData(payload, true) as Prisma.FaqUpdateInput });
  revalidateFaqPaths();
  return faq;
}

export async function deleteFaq(id: number) {
  const faq = await getPrisma().faq.delete({ where: { id } });
  revalidateFaqPaths();
  return faq;
}

function buildFaqData(payload: JsonObject, partial = false): Record<string, unknown> {
  return {
    questionTr: partial ? optionalString(payload, "questionTr") ?? undefined : sanitizeText(requiredString(payload, "questionTr")),
    questionEn: optionalString(payload, "questionEn"),
    questionDe: optionalString(payload, "questionDe"),
    answerTr: partial ? optionalString(payload, "answerTr") ?? undefined : sanitizeHtml(requiredString(payload, "answerTr")),
    answerEn: optionalString(payload, "answerEn") ? sanitizeHtml(optionalString(payload, "answerEn") || "") : undefined,
    answerDe: optionalString(payload, "answerDe") ? sanitizeHtml(optionalString(payload, "answerDe") || "") : undefined,
    isActive: optionalBoolean(payload, "isActive"),
    sortOrder: optionalNumber(payload, "sortOrder"),
  };
}

function revalidateFaqPaths() {
  ["/tr/sss", "/en/sss", "/de/sss"].forEach((path) => revalidatePath(path));
}

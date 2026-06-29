import type { NextRequest } from "next/server";
import { requireAdmin } from "@/lib/api/auth";
import { assertSameOrigin } from "@/lib/api/security";
import { handleApiError, noContent, ok } from "@/lib/api/response";
import { parseId, readJson } from "@/lib/api/request";
import {
  deleteTreatmentCategory,
  updateTreatmentCategory,
} from "@/lib/modules/treatments/service";

export const dynamic = "force-dynamic";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, context: Context) {
  try {
    assertSameOrigin(request);
    await requireAdmin(request);
    const { id } = await context.params;
    return ok(await updateTreatmentCategory(parseId(id), await readJson(request)));
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(request: NextRequest, context: Context) {
  try {
    assertSameOrigin(request);
    await requireAdmin(request);
    const { id } = await context.params;
    await deleteTreatmentCategory(parseId(id));
    return noContent();
  } catch (error) {
    return handleApiError(error);
  }
}

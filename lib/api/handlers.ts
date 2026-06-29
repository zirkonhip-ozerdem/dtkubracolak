import type { NextRequest } from "next/server";
import { requireAdmin } from "@/lib/api/auth";
import { handleApiError } from "@/lib/api/response";
import { assertSameOrigin } from "@/lib/api/security";

export function publicHandler(handler: (request: NextRequest) => Promise<Response>) {
  return async (request: NextRequest) => {
    try {
      return await handler(request);
    } catch (error) {
      return handleApiError(error);
    }
  };
}

export function adminHandler(handler: (request: NextRequest) => Promise<Response>) {
  return async (request: NextRequest) => {
    try {
      assertSameOrigin(request);
      await requireAdmin(request);
      return await handler(request);
    } catch (error) {
      return handleApiError(error);
    }
  };
}

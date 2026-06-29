import { ApiError, isApiError } from "@/lib/api/errors";

type Meta = Record<string, unknown>;

export type ApiSuccess<T> = {
  success: true;
  data: T;
  meta?: Meta;
};

export type ApiFailure = {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
};

export function ok<T>(data: T, meta?: Meta, status = 200) {
  return Response.json({ success: true, data, meta } satisfies ApiSuccess<T>, { status });
}

export function created<T>(data: T, meta?: Meta) {
  return ok(data, meta, 201);
}

export function noContent() {
  return new Response(null, { status: 204 });
}

export function fail(status: number, code: string, message: string, details?: unknown) {
  return Response.json(
    { success: false, error: { code, message, details } } satisfies ApiFailure,
    { status },
  );
}

export function handleApiError(error: unknown) {
  if (isApiError(error)) {
    return fail(error.status, error.code, error.message, error.details);
  }

  console.error("[API_ERROR]", error);
  return fail(500, "INTERNAL_SERVER_ERROR", "Beklenmeyen bir hata oluştu.");
}

export function assertFound<T>(value: T | null | undefined, message = "Kayıt bulunamadı.") {
  if (!value) {
    throw new ApiError(404, "NOT_FOUND", message);
  }

  return value;
}

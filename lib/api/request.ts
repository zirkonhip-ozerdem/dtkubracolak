import type { NextRequest } from "next/server";
import { ApiError } from "@/lib/api/errors";

export type JsonObject = Record<string, unknown>;

export async function readJson(request: Request): Promise<JsonObject> {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      throw new ApiError(400, "INVALID_JSON", "JSON body nesne formatında olmalıdır.");
    }

    return body as JsonObject;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(400, "INVALID_JSON", "Geçerli bir JSON body gönderilmelidir.");
  }
}

export function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function parseId(value: string) {
  const id = Number(value);
  if (!Number.isInteger(id) || id < 1) {
    throw new ApiError(400, "INVALID_ID", "Geçerli bir id gönderilmelidir.");
  }

  return id;
}

export function getPagination(searchParams: URLSearchParams) {
  const page = Math.max(Number(searchParams.get("page") || 1), 1);
  const limit = Math.min(Math.max(Number(searchParams.get("limit") || 20), 1), 100);

  return {
    page,
    limit,
    skip: (page - 1) * limit,
  };
}

export function optionalString(payload: JsonObject, key: string) {
  const value = payload[key];
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string") {
    throw new ApiError(400, "INVALID_FIELD", `${key} alanı metin olmalıdır.`);
  }

  return value.trim();
}

export function requiredString(payload: JsonObject, key: string) {
  const value = optionalString(payload, key);
  if (!value) {
    throw new ApiError(400, "REQUIRED_FIELD", `${key} alanı zorunludur.`);
  }

  return value;
}

export function optionalBoolean(payload: JsonObject, key: string) {
  const value = payload[key];
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "boolean") {
    throw new ApiError(400, "INVALID_FIELD", `${key} alanı boolean olmalıdır.`);
  }

  return value;
}

export function optionalNumber(payload: JsonObject, key: string) {
  const value = payload[key];
  if (value === undefined || value === null || value === "") return undefined;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new ApiError(400, "INVALID_FIELD", `${key} alanı sayı olmalıdır.`);
  }

  return parsed;
}

import { ok } from "@/lib/api/response";

export async function GET() {
  return ok({
    service: "dtkubracolak-api",
    status: "ready",
    frontendUsesStaticData: true,
  });
}

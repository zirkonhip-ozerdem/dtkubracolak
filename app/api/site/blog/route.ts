import { publicHandler } from "@/lib/api/handlers";
import { ok } from "@/lib/api/response";
import { listPublicBlogPosts } from "@/lib/modules/blog/service";

export const dynamic = "force-dynamic";

export const GET = publicHandler(async () => {
  return ok(await listPublicBlogPosts());
});

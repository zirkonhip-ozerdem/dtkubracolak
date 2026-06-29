import { adminHandler } from "@/lib/api/handlers";
import { created, ok } from "@/lib/api/response";
import { readJson } from "@/lib/api/request";
import { createBlogPost, listAdminBlogPosts } from "@/lib/modules/blog/service";

export const dynamic = "force-dynamic";

export const GET = adminHandler(async () => {
  return ok(await listAdminBlogPosts());
});

export const POST = adminHandler(async (request) => {
  return created(await createBlogPost(await readJson(request)));
});

const dangerousBlocks = /<\s*(script|style|iframe|object|embed)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi;
const inlineHandlers = /\son[a-z]+\s*=\s*(['"]).*?\1/gi;
const javascriptUrls = /\s(href|src)\s*=\s*(['"])\s*javascript:[\s\S]*?\2/gi;

export function sanitizeHtml(input: string) {
  return input
    .replace(dangerousBlocks, "")
    .replace(inlineHandlers, "")
    .replace(javascriptUrls, "");
}

export function sanitizeText(input: string) {
  return input.replace(/[<>]/g, "").trim();
}

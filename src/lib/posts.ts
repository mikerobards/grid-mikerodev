import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/i, ""));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const filePathMdx = path.join(POSTS_DIR, `${slug}.mdx`);
  const filePathMd = path.join(POSTS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(filePathMdx) ? filePathMdx : fs.existsSync(filePathMd) ? filePathMd : null;
  if (!filePath) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    summary: data.summary ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
  return { meta, content };
}

export function listPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug)?.meta)
    .filter((m): m is PostMeta => Boolean(m))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

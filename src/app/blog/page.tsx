import Link from "next/link";
import { listPosts, type PostMeta } from "@/lib/posts";

export const dynamic = "force-static";

export default function BlogIndex() {
  const posts = listPosts();
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-cyan-300">Blog</h1>
      <ul className="divide-y divide-cyan-500/20 border-t border-b border-cyan-500/10">
        {posts.map((p: PostMeta) => (
          <li key={p.slug} className="py-5 flex items-start justify-between gap-6">
            <div>
              <Link className="text-lg font-medium text-cyan-200 hover:text-cyan-100" href={`/blog/${p.slug}`}>
                {p.title}
              </Link>
              {p.summary && <p className="mt-1 text-sm text-zinc-400">{p.summary}</p>}
              <p className="mt-1 text-xs text-zinc-500">{new Date(p.date).toLocaleDateString()}</p>
            </div>
            {p.tags && p.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t: string) => (
                  <span key={t} className="rounded-full border border-cyan-500/30 px-2 py-0.5 text-xs text-cyan-200/90">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      {posts.length === 0 && (
        <p className="text-sm text-zinc-400">No posts yet. Add .mdx files under <code>content/posts</code>.</p>
      )}
    </div>
  );
}

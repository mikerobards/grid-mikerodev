import Link from "next/link";
import { listPosts, type PostMeta } from "@/lib/posts";

export default function Home() {
  const posts = listPosts().slice(0, 3);
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-black/50 p-10">
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-cyan-500/20" />
        <div className="absolute inset-0 -z-0 overflow-hidden">
          {/* Lightcycle animations */}
          <div className="lightcycle" style={{
            // @ts-ignore custom properties
            "--y": "20%",
            animationDuration: "6s"
          }} />
          <div className="lightcycle" style={{
            // @ts-ignore
            "--y": "50%",
            animationDuration: "8s",
            animationDelay: "-2s"
          }} />
          <div className="lightcycle" style={{
            // @ts-ignore
            "--y": "75%",
            animationDuration: "7s",
            animationDelay: "-4s"
          }} />
        </div>
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-cyan-200">
            The Grid of <span className="text-cyan-300">mikerodev</span>
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Software engineer crafting performant, reliable systems and delightful UI. Explore projects, read posts, and drop a line.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/projects" className="rounded-md border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-cyan-100 hover:bg-cyan-500/20">
              View Projects
            </Link>
            <Link href="/blog" className="rounded-md border border-cyan-500/30 px-4 py-2 text-cyan-200 hover:border-cyan-400/60">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-300">Latest Posts</h2>
        <ul className="divide-y divide-cyan-500/20 border-t border-b border-cyan-500/10">
          {posts.map((p: PostMeta) => (
            <li key={p.slug} className="py-4 flex items-center justify-between">
              <div>
                <Link href={`/blog/${p.slug}`} className="text-cyan-200 hover:text-cyan-100 font-medium">
                  {p.title}
                </Link>
                {p.summary && <p className="text-sm text-zinc-400">{p.summary}</p>}
              </div>
              <span className="text-xs text-zinc-500">{new Date(p.date).toLocaleDateString()}</span>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="py-4 text-sm text-zinc-400">No posts yet.</li>
          )}
        </ul>
      </section>
    </div>
  );
}

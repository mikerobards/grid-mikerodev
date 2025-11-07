import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllPostSlugs().map((slug: string) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl mb-2 text-cyan-200 font-semibold tracking-tight">{post.meta.title}</h1>
      <p className="text-xs text-zinc-500 mb-8">{new Date(post.meta.date).toLocaleDateString()}</p>
      <div className="prose-reset space-y-4 leading-7 text-zinc-300">
        <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]],
          },
        }}
        />
      </div>
    </article>
  );
}

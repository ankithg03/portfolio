import Image from "next/image";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import { fetchPostBySlug } from "@src/lib/blog";

type Params = { params: { slug: string } };

export const revalidate = 60; // ISR

export default async function BlogPostPage({ params }: Params) {
  const post = await fetchPostBySlug(params.slug);
  if (!post) return notFound();

  const { title, publishDate, heroImage, body } = post.fields;
  const date = publishDate ? new Date(publishDate).toLocaleDateString() : "";
  const imageUrl = heroImage?.fields?.file?.url
    ? `https:${heroImage.fields.file.url}`
    : undefined;

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose prose-invert prose-zinc font-PPMori">
      <div className="text-xs text-zinc-400 mb-2">{date}</div>
      <h1 className="!mb-4">{title}</h1>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          width={1200}
          height={630}
          className="w-full h-auto rounded-md mb-8"
        />
      ) : null}
      <article className="text-zinc-200">
        {body ? documentToReactComponents(body as unknown as Document) : null}
      </article>
    </main>
  );
}



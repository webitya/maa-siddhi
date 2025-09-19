import { getBlogBySlug, getRecentBlogs, blogPosts } from "@/data/blogdata"
import { notFound } from "next/navigation"
import BlogPostPageClient from "./pageClient"

// ✅ static params
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// ✅ metadata
export async function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.seoKeywords.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "hi_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

// ✅ Server → pass props to client
export default function BlogPostPage({ params }) {
  const post = getBlogBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentBlogs(3).filter((p) => p.id !== post.id)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2)

  return (
    <BlogPostPageClient post={post} recentPosts={recentPosts} relatedPosts={relatedPosts} />
  )
}

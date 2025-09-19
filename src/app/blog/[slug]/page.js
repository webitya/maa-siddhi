import { getBlogBySlug, getRecentBlogs, blogPosts } from "@/data/blogdata"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, BookOpen, Tag } from "lucide-react"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
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

export default function BlogPostPage({ params }) {
  const post = getBlogBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentBlogs(3).filter((p) => p.id !== post.id)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Maa Siddhi",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}`,
    },
    keywords: post.seoKeywords.join(", "),
    articleSection: post.categoryName,
    wordCount: post.content.length,
    inLanguage: "hi-IN",
  }

  return (
    <>
      <Navbar/>

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground">{post.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Back Button */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {post.categoryName}
                  </Badge>
                  {post.featured && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Featured
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("hi-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>

                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{post.excerpt}</p>
              </header>

              {/* Featured Image */}
              <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">About {post.author}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Expert in Hindu religious practices and puja samagri with years of experience helping devotees
                        in Ranchi, Jharkhand find authentic spiritual items and guidance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Table of Contents */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      In This Article
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      Introduction
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      Essential Items
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      Where to Buy
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      Tips & Guidelines
                    </a>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-foreground">Related Articles</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                          <div className="flex gap-3">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={relatedPost.image || "/placeholder.svg"}
                                alt={relatedPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{relatedPost.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Recent Posts */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-foreground">Recent Articles</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link key={recentPost.id} href={`/blog/${recentPost.slug}`} className="block group">
                        <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-1">
                          {recentPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {new Date(recentPost.publishedAt).toLocaleDateString("hi-IN")}
                        </p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex justify-between items-center">
              <div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
              <div className="text-right">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  View All Articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Tag } from "lucide-react"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import { useCallback } from "react"

export default function BlogPostPageClient({ post, recentPosts, relatedPosts }) {
  // ✅ share
  const handleShare = useCallback(() => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    }
    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log("Share cancelled:", err))
    } else {
      navigator.clipboard.writeText(shareData.url)
      alert("🔗 Link copied to clipboard!")
    }
  }, [post])

  // ✅ structured data
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
      logo: { "@type": "ImageObject", url: "/logo.png" },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${post.slug}` },
    keywords: post.seoKeywords.join(", "),
    wordCount: post.content.length,
    inLanguage: "hi-IN",
  }

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{post.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Main content */}
            <article className="lg:col-span-3">
              {/* Back */}
              <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>

              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {post.categoryName}
                  </Badge>
                  {post.featured && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent">Featured</Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2"><User className="h-4 w-4" />{post.author}</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("hi-IN", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4" />{post.readTime}</div>
                 <Button
  variant="outline"
  size="sm"
  onClick={handleShare}
  className="ml-auto text-black hover:text-gray-500"
>
  <Share2 className="h-4 w-4 mr-2" /> Share
</Button>

                </div>
                <p className="text-lg text-muted-foreground">{post.excerpt}</p>
              </header>

              {/* Featured image */}
              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4" /><span className="text-sm font-medium">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Related */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <CardHeader><h3 className="text-lg font-semibold">Related Articles</h3></CardHeader>
                    <CardContent className="space-y-4">
                      {relatedPosts.map((p) => (
                        <Link key={p.id} href={`/blog/${p.slug}`} className="flex gap-3 group">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                            <Image src={p.image || "/placeholder.svg"} alt={p.title} fill className="object-cover group-hover:scale-105 transition" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary">{p.title}</h4>
                            <p className="text-xs text-muted-foreground">{p.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Recent */}
                <Card>
                  <CardHeader><h3 className="text-lg font-semibold">Recent Articles</h3></CardHeader>
                  <CardContent className="space-y-4">
                    {recentPosts.map((p) => (
                      <Link key={p.id} href={`/blog/${p.slug}`} className="block group">
                        <h4 className="text-sm font-medium group-hover:text-primary mb-1">{p.title}</h4>
                        <p className="text-xs text-muted-foreground">{new Date(p.publishedAt).toLocaleDateString("hi-IN")}</p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

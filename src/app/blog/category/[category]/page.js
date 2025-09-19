import { getBlogsByCategory, categories } from "@/data/blogdata"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react"

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const category = categories.find((cat) => cat.id === params.category)

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    }
  }

  const posts = getBlogsByCategory(params.category)

  return {
    title: `${category.name} - Puja Samagri Blog | Maa Siddhi Ranchi Jharkhand`,
    description: `Explore ${category.name.toLowerCase()} articles about puja samagri and religious items in Ranchi, Jharkhand. Expert guides and authentic product reviews.`,
    keywords: `${category.name.toLowerCase()}, puja samagri, ranchi, jharkhand, religious items, spiritual guide`,
    openGraph: {
      title: `${category.name} - Puja Samagri Blog`,
      description: `Expert ${category.name.toLowerCase()} guides for puja samagri in Ranchi, Jharkhand`,
      type: "website",
      locale: "hi_IN",
    },
    alternates: {
      canonical: `/blog/category/${params.category}`,
    },
  }
}

export default function CategoryPage({ params }) {
  const category = categories.find((cat) => cat.id === params.category)

  if (!category) {
    notFound()
  }

  const posts = getBlogsByCategory(params.category)

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">{category.name}</h1>
          <p className="text-muted-foreground mb-8">No articles found in this category yet.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
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
            <span className="text-foreground">{category.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{category.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guides and articles about {category.name.toLowerCase()} for puja samagri in Ranchi, Jharkhand
          </p>

          <div className="mt-6">
            <Badge variant="secondary" className="text-sm">
              {posts.length} {posts.length === 1 ? "Article" : "Articles"}
            </Badge>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString("hi-IN")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <Link href={`/blog/${post.slug}`} className="absolute inset-0" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

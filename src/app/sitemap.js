import { blogPosts, categories } from "@/data/blogdata"

export default function sitemap() {
  const baseUrl = "https://maasiddhi.in"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]

  // Blog posts
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.6,
  }))

  // Blog categories
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  // Product categories (based on common puja samagri categories)
  const productCategories = [
    "puja-samagri",
    "hawan-samagri",
    "brass-items",
    "silver-items",
    "incense-dhoop",
    "flowers-garlands",
    "religious-books",
    "festival-items",
    "spiritual-accessories",
    "home-temple",
  ]

  const productCategoryPages = productCategories.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages, ...categoryPages, ...productCategoryPages]
}

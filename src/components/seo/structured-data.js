// Reusable structured data components

export function StructuredData({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function BlogPostStructuredData({ post }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: {
      "@type": "ImageObject",
      url: post.image,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Maa Siddhi",
      logo: {
        "@type": "ImageObject",
        url: "https://maasiddhi.com/logo.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://maasiddhi.com/blog/${post.slug}`,
    },
    keywords: post.seoKeywords.join(", "),
    articleSection: post.categoryName,
    inLanguage: "hi-IN",
  }

  return <StructuredData data={structuredData} />
}

export function BreadcrumbStructuredData({ breadcrumbs }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `https://maasiddhi.com${crumb.url}`,
    })),
  }

  return <StructuredData data={structuredData} />
}

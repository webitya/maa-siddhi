// SEO utility functions for consistent metadata across the site

export function generateBlogPostSchema(post) {
  return {
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
      url: "https://maasiddhi.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Maa Siddhi",
      logo: {
        "@type": "ImageObject",
        url: "https://maasiddhi.com/logo.png",
        width: 200,
        height: 60,
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
    wordCount: post.content.length,
    inLanguage: "hi-IN",
    about: {
      "@type": "Thing",
      name: "Puja Samagri",
      description: "Hindu religious items and spiritual accessories",
    },
    mentions: [
      {
        "@type": "Place",
        name: "Ranchi",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          addressCountry: "IN",
        },
      },
    ],
  }
}

export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `https://maasiddhi.com${crumb.url}`,
    })),
  }
}

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://maasiddhi.com/#business",
    name: "Maa Siddhi",
    alternateName: "माँ सिद्धि",
    description:
      "Authentic puja samagri and religious items store in Ranchi, Jharkhand. Premium quality brass items, incense, flowers, and traditional Hindu worship materials.",
    url: "https://maasiddhi.com",
    telephone: "+91-9876543210",
    email: "info@maasiddhi.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road, Upper Bazaar",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      postalCode: "834001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.3441,
      longitude: 85.3096,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    priceRange: "₹₹",
    servesCuisine: "Hindu Religious Items",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 23.3441,
        longitude: 85.3096,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Puja Samagri Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Puja Samagri",
            category: "Religious Items",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Brass Items",
            category: "Religious Utensils",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Incense & Dhoop",
            category: "Spiritual Fragrances",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/maasiddhi",
      "https://www.instagram.com/maasiddhi",
      "https://twitter.com/maasiddhi",
    ],
  }
}

// SEO metadata generators
export function generatePageMetadata({ title, description, keywords = [], canonical, ogImage, noIndex = false }) {
  const baseTitle = "Maa Siddhi - Best Puja Samagri in Ranchi Jharkhand"
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "hi_IN",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
      siteName: "Maa Siddhi",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: canonical ? `https://maasiddhi.com${canonical}` : undefined,
    },
  }
}

// Common SEO keywords for the site
export const commonKeywords = [
  "puja samagri ranchi",
  "religious items jharkhand",
  "hindu worship materials",
  "brass puja items",
  "incense sticks ranchi",
  "spiritual accessories",
  "authentic puja samagri",
  "ranchi religious store",
  "jharkhand spiritual shopping",
  "traditional puja items",
]

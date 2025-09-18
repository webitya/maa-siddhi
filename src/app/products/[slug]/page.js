import { getProductBySlug, products } from "../../../lib/products"
import ProductDetail from "../../../components/products/product-detail"
import { notFound } from "next/navigation"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Product Not Found - Maa Siddhi Puja Samagri Ranchi",
    }
  }

  return {
    title: `${product.name} - ${product.nameEn} | Maa Siddhi Ranchi Jharkhand`,
    description: `${product.description} रांची झारखंड में सबसे अच्छी पूजा सामग्री। ऑर्डर करें WhatsApp पर। Free delivery in Ranchi.`,
    keywords: `${product.name}, ${product.nameEn}, puja samagri ranchi, durga puja items ranchi, religious items jharkhand, maa siddhi ranchi`,
    openGraph: {
      title: `${product.name} - Maa Siddhi Ranchi`,
      description: product.description,
      images: [product.image],
      locale: "hi_IN",
      type: "article", // ✅ FIXED: Next.js only accepts "website" or "article"
    },
    alternates: {
      canonical: `https://maasiddhi.com/products/${params.slug}`,
    },
    other: {
      // ✅ keep product meta as custom tags
      "product:price:amount": product.price,
      "product:price:currency": "INR",
      "product:availability": product.inStock ? "in stock" : "out of stock",
      "product:retailer_item_id": product.id,
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Maa Siddhi",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Maa Siddhi Puja Samagri",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          addressCountry: "IN",
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  }

  return (
    <>
    <Navbar/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProductDetail product={product} />
      <Footer/>
    </>
  )
}

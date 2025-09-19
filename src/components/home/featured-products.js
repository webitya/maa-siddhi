"use client"

import Link from "next/link"
import StarIcon from "@mui/icons-material/Star"
import VisibilityIcon from "@mui/icons-material/Visibility"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import GroupIcon from "@mui/icons-material/Groups"

import { getFeaturedProducts } from "@/lib/products"
import { formatPrice, generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()
  const phoneNumber = "6207732383"

  return (
    <section className="py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground hindi-font">
            विशेष उत्पाद
          </h2>
          <p className="text-base text-muted-foreground hindi-font max-w-xl mx-auto">
            हमारे सबसे लोकप्रिय और गुणवत्तापूर्ण उत्पाद
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-all"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-44 object-cover"
                />

                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% छूट
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <StarIcon fontSize="small" className="text-yellow-500" />
                  <span className="text-xs font-semibold">{product.rating}</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-foreground hindi-font line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{product.nameEn}</p>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Reviews & Orders */}
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <StarIcon fontSize="inherit" className="text-yellow-500" />
                    <span>{product.rating}</span>
                  </div>
                  <span>•</span>
                  <span className="hindi-font">{product.reviewCount} समीक्षा</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <GroupIcon fontSize="inherit" />
                    <span className="hindi-font">{product.orderCount}+</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full bg-muted text-foreground px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1"
                  >
                    <VisibilityIcon fontSize="small" />
                    <span className="hindi-font">विवरण देखें</span>
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={generateWhatsAppLink(phoneNumber, `मुझे ${product.name} के बारे में जानकारी चाहिए।`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1"
                    >
                      <WhatsAppIcon fontSize="small" />
                      <span className="hindi-font">व्हाट्सऐप</span>
                    </a>

                    <a
                      href={generateCallLink(phoneNumber)}
                      className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1"
                    >
                      <PhoneIcon fontSize="small" />
                      <span className="hindi-font">कॉल</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hindi-font inline-block"
          >
            सभी उत्पाद देखें
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Star,
  Phone,
  WhatsApp,
  Email,
  Share,
  FavoriteBorder,
  ShoppingBag,
  CheckCircle,
  Cancel,
  People,
  Inventory,
  EmojiEvents,
  ContentCopy,
} from "@mui/icons-material"
import { formatPrice, generateWhatsAppLink, generateCallLink, generateEmailLink } from "@/lib/utils"

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)

  const phoneNumber = "9876543210"
  const email = "info@maasiddhi.com"

  const images = [
    product.image,
    "/placeholder.svg?height=400&width=400&text=Image+2",
    "/placeholder.svg?height=400&width=400&text=Image+3",
  ]

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    } else {
      setShowShareMenu(!showShareMenu)
    }
  }

  const whatsappMessage = `नमस्ते! मुझे ${product.name} के बारे में जानकारी चाहिए।\n\nउत्पाद लिंक: ${
    typeof window !== "undefined" ? window.location.href : ""
  }`

  const emailSubject = `${product.name} के बारे में जानकारी`
  const emailBody = `नमस्ते,\n\nमुझे ${product.name} के बारे में विस्तृत जानकारी चाहिए।\n\nउत्पाद लिंक: ${
    typeof window !== "undefined" ? window.location.href : ""
  }\n\nधन्यवाद`

  return (
    <div className="space-y-6 p-4">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary hindi-font">होम</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary hindi-font">उत्पाद</Link>
        <span>/</span>
        <span className="text-foreground hindi-font">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Product Image */}
{/* Product Images */}
<div className="space-y-2">
  {/* Main Image */}
  <div className="relative bg-card rounded-lg overflow-hidden shadow-sm w-full">
    <img
      src={images[selectedImage] || "/placeholder.svg"}
      alt={product.name}
      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg"
    />
    {product.originalPrice > product.price && (
      <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium shadow">
        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% छूट
      </div>
    )}
    {!product.inStock && (
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium hindi-font">स्टॉक में नहीं</span>
      </div>
    )}
  </div>

  {/* Compact Thumbnails */}
  <div className="flex space-x-1">
    {images.map((image, index) => (
      <button
        key={index}
        onClick={() => setSelectedImage(index)}
        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-md overflow-hidden border-2 transition ${
          selectedImage === index ? "border-primary" : "border-border"
        }`}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={`${product.name} ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </button>
    ))}
  </div>
</div>


        {/* Product Info */}
        <div className="space-y-3">
          <div>
            <h1 className="text-xl font-bold text-foreground hindi-font">{product.name}</h1>
            <p className="text-sm text-muted-foreground">{product.nameEn}</p>
          </div>

          {/* Rating and Orders */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fontSize="small" className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            <span className="font-semibold">{product.rating}</span>
            <span className="text-muted-foreground hindi-font">({product.reviewCount} समीक्षा)</span>
            <div className="flex items-center text-green-600 gap-1">
              <People fontSize="small" />
              <span className="hindi-font">{product.orderCount}+ ऑर्डर</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {/* Stock */}
          <div className="flex items-center gap-1 text-sm">
            {product.inStock ? (
              <>
                <CheckCircle fontSize="small" className="text-green-600" />
                <span className="text-green-600 font-medium hindi-font">स्टॉक में उपलब्ध</span>
              </>
            ) : (
              <>
                <Cancel fontSize="small" className="text-red-600" />
                <span className="text-red-600 font-medium hindi-font">स्टॉक में नहीं</span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed hindi-font">{product.description}</p>

          {/* Features */}
          {product.features && (
            <ul className="space-y-1 text-sm">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <CheckCircle fontSize="small" className="text-primary" />
                  <span className="hindi-font">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Package Contents */}
          {product.contents && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold flex items-center gap-1 hindi-font">
                <Inventory fontSize="small" />
                पैक में शामिल सामग्री
              </h3>
              <div className="bg-card p-3 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                {product.contents.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <CheckCircle fontSize="small" className="text-green-600" />
                    <span className="hindi-font text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2">
            <a
              href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm flex items-center justify-center gap-1"
            >
              <WhatsApp fontSize="small" />
              <span className="hindi-font">व्हाट्सऐप पर ऑर्डर</span>
            </a>
            <a
              href={generateCallLink(phoneNumber)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded text-sm flex items-center justify-center gap-1"
            >
              <Phone fontSize="small" />
              <span className="hindi-font">अभी कॉल करें</span>
            </a>
            <a
              href={generateEmailLink(email, emailSubject, emailBody)}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded text-sm flex items-center justify-center gap-1"
            >
              <Email fontSize="small" />
              <span className="hindi-font">ईमेल भेजें</span>
            </a>

            <div className="flex items-center justify-between pt-2 border-t border-border text-sm">

              <div className="relative">
                <button onClick={handleShare} className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                  <Share fontSize="small" />
                  <span className="hindi-font">साझा करें</span>
                </button>
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded shadow p-1 z-10">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href)
                        setShowShareMenu(false)
                      }}
                      className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-muted rounded"
                    >
                      <ContentCopy fontSize="small" /> लिंक कॉपी करें
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews?.length > 0 && (
        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold flex items-center gap-1 hindi-font">
              <EmojiEvents fontSize="small" />
              ग्राहक समीक्षा
            </h2>
            <div className="text-xs text-muted-foreground hindi-font">
              {product.reviewCount} में से {Math.min(3, product.reviews.length)} दिखाई गई
            </div>
          </div>
          <div className="space-y-2">
            {product.reviews.slice(0, showAllReviews ? product.reviews.length : 3).map((review) => (
              <div key={review.id} className="bg-card p-3 rounded-lg border border-border text-sm">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold hindi-font">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fontSize="small" className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                        ))}
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-1 py-0.5 rounded-full hindi-font">सत्यापित</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString("hi-IN")}</span>
                </div>
                <p className="text-muted-foreground hindi-font">{review.comment}</p>
              </div>
            ))}
            {product.reviews.length > 3 && (
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="w-full py-1 text-primary hover:text-primary/80 text-sm font-medium hindi-font"
              >
                {showAllReviews ? "कम दिखाएं" : `सभी ${product.reviewCount} समीक्षा देखें`}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        <div className="bg-card p-4 rounded-lg flex flex-col items-start gap-1">
          <div className="flex items-center gap-1">
            <CheckCircle className="text-green-600" />
            <h3 className="font-semibold text-sm hindi-font">गुणवत्ता की गारंटी</h3>
          </div>
          <p className="text-xs text-muted-foreground hindi-font">सभी उत्पाद शुद्ध और प्रामाणिक हैं</p>
        </div>

        <div className="bg-card p-4 rounded-lg flex flex-col items-start gap-1">
          <div className="flex items-center gap-1">
            <ShoppingBag className="text-blue-600" />
            <h3 className="font-semibold text-sm hindi-font">तुरंत डिलीवरी</h3>
          </div>
          <p className="text-xs text-muted-foreground hindi-font">रांची में समान दिन डिलीवरी उपलब्ध</p>
        </div>

        <div className="bg-card p-4 rounded-lg flex flex-col items-start gap-1">
          <div className="flex items-center gap-1">
            <Phone className="text-primary" />
            <h3 className="font-semibold text-sm hindi-font">24/7 सहायता</h3>
          </div>
          <p className="text-xs text-muted-foreground hindi-font">किसी भी समय हमसे संपर्क करें</p>
        </div>
      </div>
    </div>
  )
}

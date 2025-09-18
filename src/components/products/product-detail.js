"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Star,
  Phone,
  MessageCircle,
  Mail,
  Share2,
  Heart,
  ShoppingBag,
  Check,
  X,
  Users,
  Package,
  Award,
} from "lucide-react"
import { formatPrice, generateWhatsAppLink, generateCallLink, generateEmailLink } from "@/lib/utils"

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
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

  const whatsappMessage = `नमस्ते! मुझे ${product.name} के बारे में जानकारी चाहिए।\\n\\nउत्पाद लिंक: ${typeof window !== "undefined" ? window.location.href : ""}`

  const emailSubject = `${product.name} के बारे में जानकारी`
  const emailBody = `नमस्ते,\\n\\nमुझे ${product.name} के बारे में विस्तृत जानकारी चाहिए।\\n\\nउत्पाद लिंक: ${typeof window !== "undefined" ? window.location.href : ""}\\n\\nधन्यवाद`

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary hindi-font">
          होम
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary hindi-font">
          उत्पाद
        </Link>
        <span>/</span>
        <span className="text-foreground hindi-font">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative bg-card rounded-xl overflow-hidden">
            <img
              src={images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            {product.originalPrice > product.price && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-2 rounded-full font-semibold">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% छूट
              </div>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hindi-font">
                  स्टॉक में नहीं
                </span>
              </div>
            )}
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
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
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground hindi-font mb-2">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.nameEn}</p>
          </div>

          {/* Rating, Reviews and Order Count */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{product.rating}</span>
            <span className="text-muted-foreground hindi-font">({product.reviewCount} समीक्षा)</span>
            <div className="flex items-center space-x-1 text-green-600">
              <Users size={16} />
              <span className="text-sm font-medium hindi-font">{product.orderCount}+ ऑर्डर</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center space-x-2">
            {product.inStock ? (
              <>
                <Check size={20} className="text-green-600" />
                <span className="text-green-600 font-medium hindi-font">स्टॉक में उपलब्ध</span>
              </>
            ) : (
              <>
                <X size={20} className="text-red-600" />
                <span className="text-red-600 font-medium hindi-font">स्टॉक में नहीं</span>
              </>
            )}
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground hindi-font">विवरण</h3>
            <p className="text-muted-foreground hindi-font leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          {product.features && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground hindi-font">विशेषताएं</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground hindi-font">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.contents && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground hindi-font flex items-center space-x-2">
                <Package size={20} />
                <span>पैक में शामिल सामग्री</span>
              </h3>
              <div className="bg-card p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.contents.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check size={16} className="text-green-600 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground hindi-font">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground hindi-font">मात्रा</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
              >
                -
              </button>
              <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle size={20} />
                <span className="hindi-font">व्हाट्सऐप पर ऑर्डर करें</span>
              </a>
              <a
                href={generateCallLink(phoneNumber)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone size={20} />
                <span className="hindi-font">अभी कॉल करें</span>
              </a>
            </div>

            <a
              href={generateEmailLink(email, emailSubject, emailBody)}
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <Mail size={20} />
              <span className="hindi-font">ईमेल भेजें</span>
            </a>

            {/* Secondary Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Heart size={20} />
                <span className="hindi-font">पसंदीदा में जोड़ें</span>
              </button>
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Share2 size={20} />
                  <span className="hindi-font">साझा करें</span>
                </button>
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg p-2 z-10">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href)
                        setShowShareMenu(false)
                      }}
                      className="block w-full text-left px-3 py-2 text-sm hover:bg-muted rounded hindi-font"
                    >
                      लिंक कॉपी करें
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {product.reviews && product.reviews.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground hindi-font flex items-center space-x-2">
              <Award size={24} />
              <span>ग्राहक समीक्षा</span>
            </h2>
            <div className="text-sm text-muted-foreground hindi-font">
              {product.reviewCount} समीक्षाओं में से {Math.min(3, product.reviews.length)} दिखाई गई
            </div>
          </div>

          <div className="space-y-4">
            {product.reviews.slice(0, showAllReviews ? product.reviews.length : 3).map((review) => (
              <div key={review.id} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground hindi-font">{review.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full hindi-font">
                            सत्यापित खरीदार
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString("hi-IN")}
                  </span>
                </div>
                <p className="text-muted-foreground hindi-font leading-relaxed">{review.comment}</p>
              </div>
            ))}

            {product.reviews.length > 3 && (
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="w-full py-3 text-primary hover:text-primary/80 font-medium hindi-font transition-colors"
              >
                {showAllReviews ? "कम दिखाएं" : `सभी ${product.reviewCount} समीक्षा देखें`}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-card p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Check size={20} className="text-green-600" />
            </div>
            <h3 className="font-semibold hindi-font">गुणवत्ता की गारंटी</h3>
          </div>
          <p className="text-sm text-muted-foreground hindi-font">सभी उत्पाद शुद्ध और प्रामाणिक हैं</p>
        </div>

        <div className="bg-card p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <ShoppingBag size={20} className="text-blue-600" />
            </div>
            <h3 className="font-semibold hindi-font">तुरंत डिलीवरी</h3>
          </div>
          <p className="text-sm text-muted-foreground hindi-font">रांची में समान दिन डिलीवरी उपलब्ध</p>
        </div>

        <div className="bg-card p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold hindi-font">24/7 सहायता</h3>
          </div>
          <p className="text-sm text-muted-foreground hindi-font">किसी भी समय हमसे संपर्क करें</p>
        </div>
      </div>
    </div>
  )
}

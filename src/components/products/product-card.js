import Link from "next/link"
import { Star, Eye, Phone, MessageCircle, Users } from "lucide-react"
import { formatPrice, generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function ProductCard({ product, viewMode = "grid" }) {
  const phoneNumber = "9876543210"

  if (viewMode === "list") {
    return (
      <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-48 h-48 overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {product.originalPrice > product.price && (
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% छूट
              </div>
            )}
          </div>

          <div className="flex-1 p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-bold text-xl text-foreground hindi-font line-clamp-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{product.nameEn}</p>
                <p className="text-sm text-muted-foreground hindi-font mt-2 line-clamp-2">{product.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground hindi-font">({product.reviewCount} समीक्षा)</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <Users size={12} />
                    <span className="text-xs font-medium hindi-font">{product.orderCount}+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.features?.slice(0, 3).map((feature, index) => (
                <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs hindi-font">
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/products/${product.slug}`}
                className="bg-muted hover:bg-muted/80 text-foreground px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              >
                <Eye size={16} />
                <span className="hindi-font">विवरण देखें</span>
              </Link>
              <a
                href={generateWhatsAppLink(phoneNumber, `मुझे ${product.name} के बारे में जानकारी चाहिए।`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={16} />
                <span className="hindi-font">व्हाट्सऐप</span>
              </a>
              <a
                href={generateCallLink(phoneNumber)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              >
                <Phone size={16} />
                <span className="hindi-font">कॉल</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.originalPrice > product.price && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% छूट
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <div className="flex items-center space-x-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold">{product.rating}</span>
          </div>
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold hindi-font">
              स्टॉक में नहीं
            </span>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg text-foreground hindi-font line-clamp-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.nameEn}</p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
          </div>
          <span>•</span>
          <span className="hindi-font">{product.reviewCount} समीक्षा</span>
          <span>•</span>
          <div className="flex items-center space-x-1 text-green-600">
            <Users size={12} />
            <span className="text-xs font-medium hindi-font">{product.orderCount}+ ऑर्डर</span>
          </div>
        </div>

        <div className="space-y-2">
          <Link
            href={`/products/${product.slug}`}
            className="w-full bg-muted hover:bg-muted/80 text-foreground px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
          >
            <Eye size={16} />
            <span className="hindi-font">विवरण देखें</span>
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={generateWhatsAppLink(phoneNumber, `मुझे ${product.name} के बारे में जानकारी चाहिए।`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition-colors"
            >
              <MessageCircle size={14} />
              <span className="hindi-font">व्हाट्सऐप</span>
            </a>
            <a
              href={generateCallLink(phoneNumber)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition-colors"
            >
              <Phone size={14} />
              <span className="hindi-font">कॉल</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

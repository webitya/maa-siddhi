import Link from "next/link"
import {
  Star as StarIcon,
  Visibility as EyeIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  People as UsersIcon,
} from "@mui/icons-material"
import { formatPrice, generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function ProductCard({ product, viewMode = "grid" }) {
  const phoneNumber = "9876543210"

  // LIST VIEW
  if (viewMode === "list") {
    return (
      <Link
        href={`/products/${product.slug}`}
        className="block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-40 h-40 overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.originalPrice > product.price && (
              <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-[10px] font-semibold">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% छूट
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-3">
            {/* Title & Price */}
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-base text-foreground hindi-font line-clamp-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground">{product.nameEn}</p>
                <p className="text-xs text-muted-foreground hindi-font mt-1 line-clamp-2">{product.description}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <div className="flex items-center space-x-1 mt-1 text-xs text-muted-foreground">
                  <StarIcon fontSize="inherit" className="text-yellow-500" />
                  <span>{product.rating}</span>
                  <span className="hindi-font">({product.reviewCount})</span>
                  <UsersIcon fontSize="inherit" className="text-green-600 ml-1" />
                  <span className="hindi-font">{product.orderCount}+</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-1">
              {product.features?.slice(0, 3).map((feature, i) => (
                <span key={i} className="bg-muted text-muted-foreground px-2 py-0.5 rounded text-[11px] hindi-font">
                  {feature}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
              <a
                href={generateCallLink(phoneNumber)}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-md text-xs font-medium transition"
              >
                <PhoneIcon fontSize="small" /> कॉल
              </a>
              <a
                href={generateWhatsAppLink(phoneNumber, `मुझे ${product.name} के बारे में जानकारी चाहिए।`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition"
              >
                <WhatsAppIcon fontSize="small" /> व्हाट्सऐप
              </a>
              <span
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 underline text-xs text-muted-foreground cursor-default"
              >
                <EyeIcon fontSize="small" /> विवरण
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  // GRID VIEW
  return (
    <Link
      href={`/products/${product.slug}`}
      className="block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice > product.price && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-[10px] font-semibold">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% छूट
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center text-[11px] font-medium">
          <StarIcon fontSize="inherit" className="text-yellow-500 mr-0.5" />
          {product.rating}
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold hindi-font">
              स्टॉक में नहीं
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div>
          <h3 className="font-semibold text-sm text-foreground hindi-font line-clamp-2">{product.name}</h3>
          <p className="text-xs text-muted-foreground">{product.nameEn}</p>
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <div className="flex items-center space-x-1 text-[11px] text-muted-foreground">
          <StarIcon fontSize="inherit" className="text-yellow-500" />
          <span>{product.rating}</span>
          <span>•</span>
          <span className="hindi-font">{product.reviewCount} समीक्षा</span>
          <span>•</span>
          <UsersIcon fontSize="inherit" className="text-green-600" />
          <span className="hindi-font">{product.orderCount}+ ऑर्डर</span>
        </div>

        {/* Actions */}
        <div className="space-y-1">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={generateCallLink(phoneNumber)}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1 bg-primary hover:bg-primary/90 text-primary-foreground px-2 py-1.5 rounded-md text-xs font-medium transition"
            >
              <PhoneIcon fontSize="small" /> कॉल
            </a>
            <a
              href={generateWhatsAppLink(phoneNumber, `मुझे ${product.name} के बारे में जानकारी चाहिए।`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1.5 rounded-md text-xs font-medium transition"
            >
              <WhatsAppIcon fontSize="small" /> व्हाट्सऐप
            </a>
          </div>
          <span
            onClick={(e) => e.stopPropagation()}
            className="block text-center underline text-[11px] text-muted-foreground cursor-default"
          >
            <EyeIcon fontSize="inherit" style={{ fontSize: 14, marginRight: 2 }} /> विवरण देखें
          </span>
        </div>
      </div>
    </Link>
  )
}

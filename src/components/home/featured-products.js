import Link from "next/link"
import { Star, Eye, Phone, MessageCircle, Users } from "lucide-react"
import { getFeaturedProducts } from "@/lib/products"
import { formatPrice, generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()
  const phoneNumber = "9876543210"

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground hindi-font">विशेष उत्पाद</h2>
          <p className="text-lg text-muted-foreground hindi-font max-w-2xl mx-auto">
            हमारे सबसे लोकप्रिय और गुणवत्तापूर्ण उत्पाद
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
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
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-foreground hindi-font line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.nameEn}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
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
                    <span className="text-xs font-medium hindi-font">{product.orderCount}+</span>
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold hindi-font transition-colors"
          >
            सभी उत्पाद देखें
          </Link>
        </div>
      </div>
    </section>
  )
}

import { products } from "@/lib/products"
import ProductCard from "./product-card"

export default function RelatedProducts({ currentProduct }) {
  // Get products from the same category, excluding the current product
  const relatedProducts = products
    .filter((product) => product.category === currentProduct.category && product.id !== currentProduct.id)
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="mt-16">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground hindi-font mb-2">संबंधित उत्पाद</h2>
        <p className="text-muted-foreground hindi-font">आपको ये उत्पाद भी पसंद आ सकते हैं</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} viewMode="grid" />
        ))}
      </div>
    </section>
  )
}

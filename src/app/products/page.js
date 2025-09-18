import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import ProductListing from "@/components/products/product-listing"
import { products } from "@/lib/products"

export const metadata = {
  title: "सभी उत्पाद - माँ सिद्धि | All Products - Maa Siddhi",
  description: "माँ सिद्धि की सभी पूजा सामग्री और हवन सामग्री देखें। रांची, झारखंड में गुणवत्तापूर्ण धार्मिक सामान।",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-8">
        <div className="mx-auto px-4 sm:px-4 lg:px-4">
          <ProductListing products={products} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

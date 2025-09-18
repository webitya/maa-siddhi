import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import ProductListing from "@/components/products/product-listing"
import { categories, getProductsByCategory } from "@/lib/products"
import { notFound } from "next/navigation"
import Link from "next/link"

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }))
}

export async function generateMetadata({ params }) {
  const category = categories.find((cat) => cat.id === params.category)

  if (!category) {
    return {
      title: "श्रेणी नहीं मिली - माँ सिद्धि",
    }
  }

  return {
    title: `${category.name} - माँ सिद्धि | ${category.nameEn} - Maa Siddhi`,
    description: `माँ सिद्धि की ${category.name} श्रेणी के सभी उत्पाद देखें। रांची, झारखंड में गुणवत्तापूर्ण धार्मिक सामान।`,
  }
}

export default function CategoryPage({ params }) {
  const category = categories.find((cat) => cat.id === params.category)

  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(params.category)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-1">
        <div className="mx-auto px-4 sm:px-4 lg:px-4">
          <div className="mb-3">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground my-3">
              <Link href="/" className="hover:text-primary hindi-font">
                होम
              </Link>
              <span>/</span>
              <span className="text-foreground hindi-font">{category.name}</span>
            </nav>
            {/* <h1 className="text-2xl lg:text-2xl font-bold text-foreground hindi-font mb-1">{category.name}</h1> */}
            {/* <p className="text-lg text-muted-foreground hindi-font">{category.nameEn} की संपूर्ण श्रृंखला</p> */}
          </div>
          <ProductListing products={categoryProducts} showFilters={true} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

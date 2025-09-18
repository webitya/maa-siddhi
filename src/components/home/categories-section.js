import Link from "next/link"
import { categories } from "@/lib/products"

export default function CategoriesSection() {
  const categoryImages = {
    "puja-samagri": "/puja-items-kalash-diya-flowers-religious-ceremony.jpg",
    "hawan-samagri": "/hawan-fire-ritual-herbs-sacred-ceremony.jpg",
    incense: "/incense-sticks-dhoop-agarbatti-smoke.jpg",
    flowers: "/marigold-flowers-garlands-puja-decoration.jpg",
    oils: "/ghee-oil-lamps-religious-ceremony.jpg",
    sweets: "/indian-sweets-prasad-religious-offering.jpg",
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground hindi-font">हमारी श्रेणियां</h2>
          <p className="text-lg text-muted-foreground hindi-font max-w-2xl mx-auto">
            सभी प्रकार की धार्मिक आवश्यकताओं के लिए विस्तृत श्रृंखला
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={categoryImages[category.id] || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold hindi-font">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.nameEn}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground hindi-font">श्रेणी देखें</span>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

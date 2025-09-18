"use client"
import Link from "next/link"
import { categories } from "@/lib/products"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import CategoryIcon from "@mui/icons-material/Category"

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
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground hindi-font flex items-center justify-center gap-2">
            <CategoryIcon fontSize="large" className="text-primary" />
            हमारी श्रेणियां
          </h2>
          <p className="text-lg text-muted-foreground hindi-font max-w-2xl mx-auto">
            सभी प्रकार की धार्मिक आवश्यकताओं के लिए विस्तृत श्रृंखला
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={categoryImages[category.id] || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white drop-shadow">
                  <h3 className="text-xl font-bold hindi-font">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.nameEn}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 flex items-center justify-between border-t border-muted">
                <span className="text-sm text-muted-foreground hindi-font">श्रेणी देखें</span>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowForwardIosIcon fontSize="small" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

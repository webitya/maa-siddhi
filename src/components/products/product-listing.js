"use client"

import { useState, useMemo } from "react"
import ProductCard from "./product-card"
import ProductFilters from "./product-filters"
import { Filter, Grid, List } from "lucide-react"

export default function ProductListing({ products, showFilters = true }) {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
    inStock: false,
    rating: 0,
    sortBy: "name",
  })
  const [viewMode, setViewMode] = useState("grid")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Category filter
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    // Price range filter
    filtered = filtered.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
    )

    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock)
    }

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter((product) => product.rating >= filters.rating)
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [products, filters])

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Mobile Filter Toggle */}
      {showFilters && (
        <div className="lg:hidden">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full bg-card border border-border rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <Filter size={20} />
              <span className="font-medium hindi-font">फिल्टर</span>
            </div>
            <span className="text-sm text-muted-foreground">{filteredProducts.length} उत्पाद</span>
          </button>
        </div>
      )}

      {/* Filters Sidebar */}
      {showFilters && (
        <div className={`lg:w-80 ${showMobileFilters ? "block" : "hidden lg:block"}`}>
          <ProductFilters filters={filters} setFilters={setFilters} />
        </div>
      )}

      {/* Products Grid */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground hindi-font">{filteredProducts.length} उत्पाद मिले</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="bg-card border border-border rounded-lg px-3 py-2 text-sm hindi-font"
            >
              <option value="name">नाम के अनुसार</option>
              <option value="price-low">कम कीमत</option>
              <option value="price-high">अधिक कीमत</option>
              <option value="rating">रेटिंग के अनुसार</option>
              <option value="reviews">समीक्षा के अनुसार</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-card border border-border rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl text-muted-foreground mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground hindi-font mb-2">कोई उत्पाद नहीं मिला</h3>
            <p className="text-muted-foreground hindi-font">कृपया अपने फिल्टर बदलें और फिर से कोशिश करें।</p>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

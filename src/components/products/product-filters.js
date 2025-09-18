"use client"

import { categories } from "@/lib/products"
import { Star, X } from "lucide-react"

export default function ProductFilters({ filters, setFilters }) {
  const handlePriceRangeChange = (index, value) => {
    const newRange = [...filters.priceRange]
    newRange[index] = Number.parseInt(value)
    setFilters({ ...filters, priceRange: newRange })
  }

  const clearFilters = () => {
    setFilters({
      category: "",
      priceRange: [0, 1000],
      inStock: false,
      rating: 0,
      sortBy: "name",
    })
  }

  return (
    <div className="bg-card rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground hindi-font">फिल्टर</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-muted-foreground hover:text-primary flex items-center space-x-1"
        >
          <X size={14} />
          <span className="hindi-font">साफ़ करें</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground hindi-font">श्रेणी</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value=""
              checked={filters.category === ""}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="text-primary"
            />
            <span className="text-sm hindi-font">सभी</span>
          </label>
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={filters.category === category.id}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="text-primary"
              />
              <span className="text-sm hindi-font">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground hindi-font">मूल्य सीमा</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="न्यूनतम"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceRangeChange(0, e.target.value)}
              className="w-full bg-background border border-border rounded px-3 py-2 text-sm"
            />
            <span className="text-muted-foreground">-</span>
            <input
              type="number"
              placeholder="अधिकतम"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange(1, e.target.value)}
              className="w-full bg-background border border-border rounded px-3 py-2 text-sm"
            />
          </div>
          <div className="text-xs text-muted-foreground hindi-font">
            ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
          </div>
        </div>
      </div>

      {/* Stock Filter */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground hindi-font">उपलब्धता</h4>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
            className="text-primary"
          />
          <span className="text-sm hindi-font">केवल स्टॉक में</span>
        </label>
      </div>

      {/* Rating Filter */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground hindi-font">रेटिंग</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={(e) => setFilters({ ...filters, rating: Number.parseInt(e.target.value) })}
                className="text-primary"
              />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-sm hindi-font">और अधिक</span>
              </div>
            </label>
          ))}
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              value={0}
              checked={filters.rating === 0}
              onChange={(e) => setFilters({ ...filters, rating: Number.parseInt(e.target.value) })}
              className="text-primary"
            />
            <span className="text-sm hindi-font">सभी रेटिंग</span>
          </label>
        </div>
      </div>
    </div>
  )
}

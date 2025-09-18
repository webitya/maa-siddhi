"use client"

import { categories } from "@/lib/products"
import { Star, X } from "@mui/icons-material"
import { Slider } from "@mui/material"

export default function ProductFilters({ filters, setFilters }) {
  // Handle price range change from slider
  const handlePriceRangeChange = (event, newValue) => {
    setFilters({ ...filters, priceRange: newValue })
  }

  // Reset all filters
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground hindi-font">फिल्टर</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-muted-foreground hover:text-primary flex items-center space-x-1"
        >
          <X fontSize="small" />
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
      <div className="space-y-2">
        <h4 className="font-medium text-foreground hindi-font">मूल्य सीमा</h4>
     <Slider
  value={filters.priceRange}
  onChange={handlePriceRangeChange}
  valueLabelDisplay="auto"
  min={0}
  max={10000}      // Updated maximum
  step={500}       // Step increment
  marks={[
    { value: 0, label: "₹0" },
    { value: 2500, label: "₹2.5k" },
    { value: 5000, label: "₹5k" },
    { value: 7500, label: "₹7.5k" },
    { value: 10000, label: "₹10k" },
  ]}
/>
<div className="text-xs text-muted-foreground hindi-font">
  ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
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
                    fontSize="small"
                    className={i < rating ? "text-yellow-400" : "text-gray-300"}
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

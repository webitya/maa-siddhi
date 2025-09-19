"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import ProductCard from "./product-card"
import ProductFilters from "./product-filters"
import { Grid, List, Search, X, Filter } from "lucide-react"
import { categories } from "../../lib/products"

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

  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef(null)
  const suggestionsRef = useRef(null)

  const popularSearches = ["गंगाजल", "हवन सामग्री", "दीया", "अगरबत्ती", "कपूर", "चंदन", "रुद्राक्ष", "कलश"]

  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    const suggestions = new Set()

    products.forEach((product) => {
      // Search in product name (both Hindi and English)
      if (
        product.name.toLowerCase().includes(query) ||
        product.nameEn?.toLowerCase().includes(query) ||
        product.hindiName?.toLowerCase().includes(query)
      ) {
        suggestions.add(product.name)
      }

      // Search in category names (both Hindi and English)
      const category = categories.find((cat) => cat.id === product.category)
      if (category) {
        if (
          category.name.toLowerCase().includes(query) ||
          category.nameEn.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        ) {
          suggestions.add(product.name)
        }
      }

      // Search in description
      if (product.description?.toLowerCase().includes(query)) {
        suggestions.add(product.name)
      }

      // Search in features
      product.features?.forEach((feature) => {
        if (feature.toLowerCase().includes(query)) {
          suggestions.add(product.name)
        }
      })

      // Search in contents/ingredients
      product.contents?.forEach((content) => {
        if (content.toLowerCase().includes(query)) {
          suggestions.add(product.name)
        }
      })

      // Search in small keywords from various fields
      const searchableKeywords = [
        product.slug,
        ...(product.tags || []),
        ...(product.ingredients || []),
        product.brand,
        product.usage,
        ...(product.benefits || []),
        product.material,
        product.size,
        product.weight,
        product.origin,
      ].filter(Boolean)

      searchableKeywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(query)) {
          suggestions.add(product.name)
        }
      })

      // Search in reviews text
      product.reviews?.forEach((review) => {
        if (review.comment?.toLowerCase().includes(query)) {
          suggestions.add(product.name)
        }
      })
    })

    return Array.from(suggestions).slice(0, 8)
  }, [searchQuery, products])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        setShowSuggestions(true)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchSelect = (selectedSearch) => {
    setSearchQuery(selectedSearch)
    setShowSuggestions(false)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowSuggestions(false)
  }

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((product) => {
        // Search in product names (Hindi and English)
        const nameMatch =
          product.name.toLowerCase().includes(query) ||
          product.nameEn?.toLowerCase().includes(query) ||
          product.hindiName?.toLowerCase().includes(query)

        // Search in category names (Hindi and English)
        const category = categories.find((cat) => cat.id === product.category)
        const categoryMatch = category
          ? category.name.toLowerCase().includes(query) ||
            category.nameEn.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
          : product.category.toLowerCase().includes(query)

        // Search in description
        const descriptionMatch = product.description?.toLowerCase().includes(query)

        // Search in features
        const featuresMatch = product.features?.some((feature) => feature.toLowerCase().includes(query))

        // Search in contents/ingredients
        const contentsMatch = product.contents?.some((content) => content.toLowerCase().includes(query))

        // Search in small keywords
        const searchableKeywords = [
          product.slug,
          ...(product.tags || []),
          ...(product.ingredients || []),
          product.brand,
          product.usage,
          ...(product.benefits || []),
          product.material,
          product.size,
          product.weight,
          product.origin,
        ].filter(Boolean)

        const keywordMatch = searchableKeywords.some((keyword) => keyword.toLowerCase().includes(query))

        // Search in reviews
        const reviewMatch = product.reviews?.some((review) => review.comment?.toLowerCase().includes(query))

        return (
          nameMatch ||
          categoryMatch ||
          descriptionMatch ||
          featuresMatch ||
          contentsMatch ||
          keywordMatch ||
          reviewMatch
        )
      })
    }

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
  }, [products, filters, searchQuery])

  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {showFilters && (
            <div
              className={`
              fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:transform-none lg:w-80 lg:z-auto
              ${showMobileFilters ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              ${showMobileFilters ? "block" : "hidden lg:block"}
            `}
            >
              <div className="lg:hidden flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold hindi-font">फिल्टर</h3>
                <button onClick={() => setShowMobileFilters(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>
              <div className="overflow-y-auto h-full lg:h-auto">
                <ProductFilters filters={filters} setFilters={setFilters} />
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex flex-col gap-4 mb-6">
              {/* Product Count */}
              <div>
                <p className="text-sm text-muted-foreground hindi-font">
                  {searchQuery ? `"${searchQuery}" के लिए ` : ""}
                  {filteredProducts.length} उत्पाद मिले
                </p>
              </div>

              <div className="w-full relative" ref={searchRef}>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="खोजें... (नाम, श्रेणी, सामग्री, उपयोग)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    className={`w-full pl-9 pr-8 py-3 bg-card border-2 rounded-lg text-sm hindi-font transition-all duration-200 ${
                      searchQuery.trim()
                        ? "border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/10"
                        : "border-border hover:border-primary/50"
                    } focus:border-primary focus:shadow-lg focus:shadow-primary/20 focus:ring-2 focus:ring-primary/10 focus:outline-none`}
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {showSuggestions && searchQuery.trim() && searchSuggestions.length > 0 && (
                  <div
                    ref={suggestionsRef}
                    className="absolute top-full left-0 right-0 mt-1 bg-card border-2 border-primary/20 rounded-lg shadow-xl shadow-primary/10 z-50 max-h-60 overflow-y-auto backdrop-blur-sm"
                  >
                    <div className="p-1">
                      <div className="px-3 py-2 text-xs text-muted-foreground border-b border-border hindi-font">
                        सुझाव ({searchSuggestions.length})
                      </div>
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchSelect(suggestion)}
                          className="w-full text-left px-3 py-2 hover:bg-primary/10 rounded text-sm hindi-font transition-colors flex items-center space-x-2"
                        >
                          <Search size={12} className="text-muted-foreground" />
                          <span>{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                {/* Sort Dropdown */}
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="flex-1 bg-card border border-border rounded-lg px-3 py-2 text-sm hindi-font"
                >
                  <option value="name">नाम के अनुसार</option>
                  <option value="price-low">कम कीमत</option>
                  <option value="price-high">अधिक कीमत</option>
                  <option value="rating">रेटिंग के अनुसार</option>
                  <option value="reviews">समीक्षा के अनुसार</option>
                </select>

                {showFilters && (
                  <button
                    onClick={() => setShowMobileFilters(true)}
                    className="lg:hidden p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Filter size={16} />
                  </button>
                )}

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
                <h3 className="text-xl font-semibold text-foreground hindi-font mb-2">
                  {searchQuery ? `"${searchQuery}" के लिए कोई उत्पाद नहीं मिला` : "कोई उत्पाद नहीं मिला"}
                </h3>
                <p className="text-muted-foreground hindi-font">
                  {searchQuery ? "कृपया अलग खोज शब्द का प्रयास करें।" : "कृपया अपने फिल्टर बदलें और फिर से कोशिश करें।"}
                </p>
              </div>
            ) : (
              <div
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

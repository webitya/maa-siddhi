"use client"

import { useState, useMemo } from "react"
import { getFeaturedBlogs, getAllBlogs } from "@/data/blogdata"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 6

  const featuredBlogs = getFeaturedBlogs()
  const allBlogs = getAllBlogs()

  const filteredBlogs = useMemo(() => {
    let filtered = allBlogs

    if (searchQuery) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    return filtered
  }, [searchQuery, allBlogs])

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const PaginationControls = () => {
    if (totalPages <= 1) return null

    return (
      <div className="flex justify-center items-center gap-2 mt-8 mb-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
        >
          ← Previous
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded-lg border ${
                currentPage === page
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
        >
          Next →
        </button>
      </div>
    )
  }

  return (
  <>
  <Navbar/>
  <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Puja Samagri Blog</h1>
            <p className="text-gray-600 mb-6">Complete guide to authentic puja samagri in Ranchi, Jharkhand</p>

            <div className="max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("")
                      setCurrentPage(1)
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {searchQuery && (
                <p className="text-gray-500 text-sm mt-3">
                  Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? "s" : ""} for {searchQuery}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        {searchQuery ? (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
              Search Results
            </h2>

            {filteredBlogs.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {paginatedBlogs.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-80 flex flex-col">
                        <div className="relative h-32 flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg?height=128&width=256&query=puja samagri blog"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute bottom-2 left-2">
                            <span className="bg-white text-orange-600 px-2 py-1 rounded text-xs font-medium">
                              {post.categoryName}
                            </span>
                          </div>
                        </div>

                        <div className="p-3 flex-1 flex flex-col">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight flex-shrink-0">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-2 line-clamp-3 text-xs flex-1">{post.excerpt}</p>

                          <div className="flex items-center justify-between text-xs text-gray-500 flex-shrink-0">
                            <span>{new Date(post.publishedAt).toLocaleDateString("hi-IN")}</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <PaginationControls />
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-gray-600 mb-4">No articles found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setCurrentPage(1)
                  }}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Clear Search
                </button>
              </div>
            )}
          </section>
        ) : (
          <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
                Featured Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {featuredBlogs.slice(0, 2).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <div className="relative h-40">
                        <Image
                          src={post.image || "/placeholder.svg?height=160&width=320&query=featured puja samagri"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                            ⭐ Featured
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                          <span>{new Date(post.publishedAt).toLocaleDateString("hi-IN")}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded">{post.readTime}</span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>

                        <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{post.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                              {post.author.charAt(0)}
                            </div>
                            {post.author}
                          </div>

                          <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-medium">
                            Read More →
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                All Articles
              </h2>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {paginatedBlogs.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-80 flex flex-col">
                      <div className="relative h-32 flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg?height=128&width=256&query=puja samagri article"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-2 left-2">
                          <span className="bg-white text-orange-600 px-2 py-1 rounded text-xs font-medium">
                            {post.categoryName}
                          </span>
                        </div>
                      </div>

                      <div className="p-3 flex-1 flex flex-col">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm flex-shrink-0">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-2 line-clamp-3 text-xs flex-1">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-gray-500 flex-shrink-0">
                          <span>{new Date(post.publishedAt).toLocaleDateString("hi-IN")}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <PaginationControls />
            </section>
          </>
        )}
      </div>
    </div>

  <Footer/>
  </>
  )
}

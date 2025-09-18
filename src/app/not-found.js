"use client"

import Link from "next/link"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Om Symbol */}
            <div className="om-symbol text-8xl text-primary/20">ॐ</div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-primary">404</h1>
              <h2 className="text-3xl font-bold text-foreground hindi-font">पृष्ठ नहीं मिला</h2>
              <p className="text-lg text-muted-foreground hindi-font max-w-2xl mx-auto">
                क्षमा करें, आपके द्वारा खोजा गया पृष्ठ उपलब्ध नहीं है। हो सकता है यह हटा दिया गया हो या आपने गलत लिंक दर्ज किया हो।
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
              >
                <Home size={20} />
                <span className="hindi-font">होम पर जाएं</span>
              </Link>
              <Link
                href="/products"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
              >
                <Search size={20} />
                <span className="hindi-font">उत्पाद देखें</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="bg-muted hover:bg-muted/80 text-foreground px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hindi-font">वापस जाएं</span>
              </button>
            </div>

            {/* Popular Categories */}
            <div className="pt-12 border-t border-border">
              <h3 className="text-xl font-semibold text-foreground hindi-font mb-6">लोकप्रिय श्रेणियां</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/categories/puja-samagri"
                  className="bg-card hover:bg-card/80 p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">🪔</div>
                  <span className="text-sm font-medium hindi-font">पूजा सामग्री</span>
                </Link>
                <Link
                  href="/categories/hawan-samagri"
                  className="bg-card hover:bg-card/80 p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">🔥</div>
                  <span className="text-sm font-medium hindi-font">हवन सामग्री</span>
                </Link>
                <Link
                  href="/categories/incense"
                  className="bg-card hover:bg-card/80 p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">🕯️</div>
                  <span className="text-sm font-medium hindi-font">धूप-अगरबत्ती</span>
                </Link>
                <Link
                  href="/categories/flowers"
                  className="bg-card hover:bg-card/80 p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">🌺</div>
                  <span className="text-sm font-medium hindi-font">फूल-माला</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

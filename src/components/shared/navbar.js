"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle, ShoppingBag, Home, Package, Mail } from "lucide-react"
import { generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की पूजा सामग्री के बारे में जानकारी चाहिए।"
  const phoneNumber = "9876543210" // Replace with actual phone number

  return (
    <>
      <nav className="bg-white shadow-lg border-b-2 border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="om-symbol">ॐ</div>
              <Link href="/" className="flex flex-col">
                <span className="text-xl font-bold text-primary hindi-font">माँ सिद्धि</span>
                <span className="text-xs text-muted-foreground">Maa Siddhi</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium hindi-font">
                होम
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors font-medium hindi-font"
              >
                उत्पाद
              </Link>
              <Link
                href="/categories/puja-samagri"
                className="text-foreground hover:text-primary transition-colors font-medium hindi-font"
              >
                पूजा सामग्री
              </Link>
              <Link
                href="/categories/hawan-samagri"
                className="text-foreground hover:text-primary transition-colors font-medium hindi-font"
              >
                हवन सामग्री
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium hindi-font"
              >
                संपर्क
              </Link>
            </div>

            {/* Contact Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={16} />
                <span className="text-sm hindi-font">व्हाट्सऐप</span>
              </a>
              <a
                href={generateCallLink(phoneNumber)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm hindi-font">कॉल</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleDrawer}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeDrawer}></div>

          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="om-symbol text-lg">ॐ</div>
                <div>
                  <span className="text-lg font-bold text-primary hindi-font">माँ सिद्धि</span>
                  <p className="text-xs text-muted-foreground">Maa Siddhi</p>
                </div>
              </div>
              <button onClick={closeDrawer} className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Navigation Links */}
              <div className="space-y-3">
                <Link
                  href="/"
                  onClick={closeDrawer}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Home size={20} className="text-primary" />
                  <span className="font-medium hindi-font">होम</span>
                </Link>
                <Link
                  href="/products"
                  onClick={closeDrawer}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Package size={20} className="text-primary" />
                  <span className="font-medium hindi-font">सभी उत्पाद</span>
                </Link>
                <Link
                  href="/categories/puja-samagri"
                  onClick={closeDrawer}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <ShoppingBag size={20} className="text-primary" />
                  <span className="font-medium hindi-font">पूजा सामग्री</span>
                </Link>
                <Link
                  href="/categories/hawan-samagri"
                  onClick={closeDrawer}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <ShoppingBag size={20} className="text-primary" />
                  <span className="font-medium hindi-font">हवन सामग्री</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={closeDrawer}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Mail size={20} className="text-primary" />
                  <span className="font-medium hindi-font">संपर्क करें</span>
                </Link>
              </div>

              {/* Contact Buttons */}
              <div className="pt-4 border-t space-y-3">
                <a
                  href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span className="font-medium hindi-font">व्हाट्सऐप पर संपर्क करें</span>
                </a>
                <a
                  href={generateCallLink(phoneNumber)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone size={20} />
                  <span className="font-medium hindi-font">अभी कॉल करें</span>
                </a>
              </div>

              {/* Store Info */}
              <div className="pt-4 border-t">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium hindi-font text-primary">स्टोर की जानकारी</p>
                  <p className="text-xs text-muted-foreground hindi-font">रांची, झारखंड</p>
                  <p className="text-xs text-muted-foreground">सभी प्रकार की पूजा सामग्री उपलब्ध</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

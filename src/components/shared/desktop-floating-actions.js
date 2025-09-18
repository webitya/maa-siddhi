"use client"

import { Phone, MessageCircle, ShoppingBag } from "lucide-react"
import { generateWhatsAppLink, generateCallLink } from "@/lib/utils"
import Link from "next/link"

export default function DesktopFloatingActions() {
  const phoneNumber = "9876543210"
  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की पूजा सामग्री के बारे में जानकारी चाहिए।"

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col space-y-3">
      {/* Call Button */}
      <a
        href={generateCallLink(phoneNumber)}
        className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative"
        title="कॉल करें"
      >
        <Phone size={20} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs hindi-font opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          कॉल करें
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative"
        title="व्हाट्सऐप"
      >
        <MessageCircle size={20} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs hindi-font opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          व्हाट्सऐप
        </span>
      </a>

      {/* Shop Button */}
      <Link
        href="/products"
        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative"
        title="शॉप करें"
      >
        <ShoppingBag size={20} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs hindi-font opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          शॉप करें
        </span>
      </Link>
    </div>
  )
}

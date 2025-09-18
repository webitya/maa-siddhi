"use client"

import Link from "next/link"
import CallIcon from "@mui/icons-material/Call"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import { generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function MobileBottomNav() {
  const phoneNumber = "9876543210"
  const whatsappMessage =
    "नमस्ते! मुझे माँ सिद्धि की पूजा सामग्री के बारे में जानकारी चाहिए।"

  return (
    <>
      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary/20 shadow-lg z-40 md:hidden">
        <div className="grid grid-cols-3 h-16">
          {/* Call Button */}
          <a
            href={generateCallLink(phoneNumber)}
            className="flex flex-col items-center justify-center space-y-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
          >
            <CallIcon fontSize="small" />
            <span className="text-xs hindi-font font-medium">कॉल</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-1 bg-green-500 hover:bg-green-600 text-white transition-colors"
          >
            <WhatsAppIcon fontSize="small" />
            <span className="text-xs hindi-font font-medium">व्हाट्सऐप</span>
          </a>

          {/* Shop Button */}
          <Link
            href="/products"
            className="flex flex-col items-center justify-center space-y-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-colors"
          >
            <ShoppingBagIcon fontSize="small" />
            <span className="text-xs hindi-font font-medium">शॉप</span>
          </Link>
        </div>
      </div>

      {/* Add bottom padding to body content on mobile to prevent overlap */}
      <div className="h-16 md:hidden"></div>
    </>
  )
}

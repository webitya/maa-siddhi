"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import MailIcon from "@mui/icons-material/Mail"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { generateWhatsAppLink, generateCallLink, generateEmailLink } from "@/lib/utils"
import Image from "next/image"

export default function Footer() {
  const phoneNumber = "6207732383"
  const email = "maasiddhi.in@gmail.com"
  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की सेवाओं के बारे में जानकारी चाहिए।"

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const year = currentTime.getFullYear()
  const date = currentTime.toLocaleDateString("hi-IN", { day: "2-digit", month: "short", year: "numeric" })
  const dayName = currentTime.toLocaleDateString("hi-IN", { weekday: "long" })
  const hours = currentTime.getHours().toString().padStart(2, "0")
  const minutes = currentTime.getMinutes().toString().padStart(2, "0")
  const seconds = currentTime.getSeconds().toString().padStart(2, "0")

  return (
    <footer className="bg-card border-t-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
             <div className="flex items-center space-x-3">
              <Link href="/" className="flex">
                 <Image src="/logo.png" alt="Maa Siddhi" width={120} height={40} className="object-contain" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground hindi-font leading-relaxed">
              रांची, झारखंड में स्थित विश्वसनीय पूजा सामग्री की दुकान। हम सभी प्रकार की धार्मिक आवश्यकताओं के लिए गुणवत्तापूर्ण सामग्री प्रदान करते हैं।
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <FavoriteIcon fontSize="small" className="text-primary" />
              <span className="hindi-font">माँ दुर्गा की कृपा से</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground hindi-font">त्वरित लिंक</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">होम</Link>
              <Link href="/products" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">सभी उत्पाद</Link>
              <Link href="/categories/puja-samagri" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">पूजा सामग्री</Link>
              <Link href="/categories/hawan-samagri" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">हवन सामग्री</Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">संपर्क करें</Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground hindi-font">श्रेणियां</h4>
            <div className="space-y-2">
              <Link href="/categories/incense" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">धूप-अगरबत्ती</Link>
              <Link href="/categories/flowers" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">फूल-माला</Link>
              <Link href="/categories/oils" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">तेल-घी</Link>
              <Link href="/categories/sweets" className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font">प्रसाद-मिठाई</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground hindi-font">संपर्क जानकारी</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <LocationOnIcon fontSize="small" className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground hindi-font">रांची, झारखंड</p>
                  <p className="text-xs text-muted-foreground">भारत</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon fontSize="small" className="text-primary flex-shrink-0" />
                <a href={generateCallLink(phoneNumber)} className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 {phoneNumber}</a>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon fontSize="small" className="text-primary flex-shrink-0" />
                <a href={generateEmailLink(email, "पूजा सामग्री की जानकारी", "नमस्ते,")} className="text-sm text-muted-foreground hover:text-primary transition-colors">{email}</a>
              </div>
              <div className="flex items-start space-x-3">
                <AccessTimeIcon fontSize="small" className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground hindi-font">
                  <p>सुबह 8:00 - रात 8:00</p>
                  <p>सोमवार से रविवार</p>
                  <p>
                    आज की तिथि: {date}, {dayName} <br />
                    समय: {hours}:{minutes} <span className="text-red-500">{seconds}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
     

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left hindi-font">
              © 2025 माँ सिद्धि। सभी अधिकार सुरक्षित।
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="hindi-font">गुणवत्ता की गारंटी</span>
              <span>•</span>
              <span className="hindi-font">तुरंत डिलीवरी</span>
              <span>•</span>
              <span className="hindi-font">विश्वसनीय सेवा</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

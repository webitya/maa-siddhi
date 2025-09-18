"use client"

import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import StarIcon from "@mui/icons-material/Star"
import { generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function HeroSection() {
  const phoneNumber = "9876543210"
  const whatsappMessage = "नमस्ते! मुझे पूजा सामग्री के बारे में जानकारी चाहिए।"

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 lg:h-[90vh] py-16 lg:py-0 flex items-center">
      {/* Background Symbols */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-primary om-symbol">ॐ</div>
        <div className="absolute top-32 right-20 text-4xl text-secondary om-symbol">ॐ</div>
        <div className="absolute bottom-20 left-1/4 text-5xl text-primary om-symbol">ॐ</div>
        <div className="absolute bottom-32 right-10 text-3xl text-secondary om-symbol">ॐ</div>
      </div>

      <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-center space-x-2">
              <div className="om-symbol text-3xl text-primary">ॐ</div>
              <span className="text-lg font-semibold text-primary hindi-font">माँ दुर्गा की कृपा से</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              <span className="hindi-font text-primary">माँ सिद्धि</span>
              <br />
              <span className="text-2xl lg:text-3xl text-muted-foreground hindi-font">पूजा सामग्री भंडार</span>
            </h1>

            <p className="text-lg text-muted-foreground hindi-font leading-relaxed max-w-md">
              रांची, झारखंड में स्थित विश्वसनीय पूजा सामग्री की दुकान। सभी प्रकार की धार्मिक आवश्यकताओं के लिए शुद्ध और गुणवत्तापूर्ण सामग्री।
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {["शुद्ध सामग्री", "तुरंत डिलीवरी", "उचित मूल्य", "विश्वसनीय सेवा"].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 ${idx % 2 === 0 ? "bg-primary" : "bg-secondary"} rounded-full`}></div>
                  <span className="text-sm font-medium hindi-font">{feature}</span>
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400" fontSize="small" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">4.8/5</span> <span className="hindi-font">(500+ खुश ग्राहक)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/products"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <ShoppingBagIcon fontSize="small" />
                <span className="hindi-font">उत्पाद देखें</span>
              </Link>

              <a
                href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <WhatsAppIcon fontSize="small" />
                <span className="hindi-font">व्हाट्सऐप</span>
              </a>

              <a
                href={generateCallLink(phoneNumber)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <PhoneIcon fontSize="small" />
                <span className="hindi-font">कॉल</span>
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full bg-card rounded-2xl p-4 lg:p-8 shadow-xl">
          <img
  src="/beautiful-durga-maa-idol-with-puja-items-diyas-flo.jpg"
  alt="माँ दुर्गा की मूर्ति और पूजा सामग्री"
  className="w-full h-64 lg:h-80 object-cover object-top rounded-lg"
/>

              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold text-sm hindi-font">
                विशेष छूट!
              </div>

              {/* Floating Mini Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow border border-border flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShoppingBagIcon fontSize="small" className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm hindi-font">1000+ उत्पाद</p>
                  <p className="text-xs text-muted-foreground hindi-font">उपलब्ध</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow border border-border flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <WhatsAppIcon fontSize="small" className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm hindi-font">24/7 सेवा</p>
                  <p className="text-xs text-muted-foreground hindi-font">उपलब्ध</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

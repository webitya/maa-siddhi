import Link from "next/link"
import { Phone, MessageCircle, Mail, MapPin, Clock, Heart } from "lucide-react"
import { generateWhatsAppLink, generateCallLink, generateEmailLink } from "@/lib/utils"

export default function Footer() {
  const phoneNumber = "9876543210" // Replace with actual phone number
  const email = "info@maasiddhi.com" // Replace with actual email
  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की सेवाओं के बारे में जानकारी चाहिए।"

  return (
    <footer className="bg-card border-t-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="om-symbol text-2xl">ॐ</div>
              <div>
                <h3 className="text-xl font-bold text-primary hindi-font">माँ सिद्धि</h3>
                <p className="text-sm text-muted-foreground">Maa Siddhi</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground hindi-font leading-relaxed">
              रांची, झारखंड में स्थित विश्वसनीय पूजा सामग्री की दुकान। हम सभी प्रकार की धार्मिक आवश्यकताओं के लिए गुणवत्तापूर्ण सामग्री
              प्रदान करते हैं।
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart size={16} className="text-primary" />
              <span className="hindi-font">माँ दुर्गा की कृपा से</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground hindi-font">त्वरित लिंक</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                होम
              </Link>
              <Link
                href="/products"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                सभी उत्पाद
              </Link>
              <Link
                href="/categories/puja-samagri"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                पूजा सामग्री
              </Link>
              <Link
                href="/categories/hawan-samagri"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                हवन सामग्री
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                संपर्क करें
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground hindi-font">श्रेणियां</h4>
            <div className="space-y-2">
              <Link
                href="/categories/incense"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                धूप-अगरबत्ती
              </Link>
              <Link
                href="/categories/flowers"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                फूल-माला
              </Link>
              <Link
                href="/categories/oils"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                तेल-घी
              </Link>
              <Link
                href="/categories/sweets"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors hindi-font"
              >
                प्रसाद-मिठाई
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground hindi-font">संपर्क जानकारी</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground hindi-font">रांची, झारखंड</p>
                  <p className="text-xs text-muted-foreground">भारत</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a
                  href={generateCallLink(phoneNumber)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 {phoneNumber}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a
                  href={generateEmailLink(email, "पूजा सामग्री की जानकारी", "नमस्ते,")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground hindi-font">सुबह 8:00 - रात 8:00</p>
                  <p className="text-xs text-muted-foreground hindi-font">सोमवार से रविवार</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="font-medium hindi-font">व्हाट्सऐप पर ऑर्डर करें</span>
            </a>
            <a
              href={generateCallLink(phoneNumber)}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone size={20} />
              <span className="font-medium hindi-font">अभी कॉल करें</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left hindi-font">
              © 2024 माँ सिद्धि। सभी अधिकार सुरक्षित।
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

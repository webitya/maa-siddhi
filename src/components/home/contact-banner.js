import { Phone, MessageCircle, MapPin } from "lucide-react"
import { generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function ContactBanner() {
  const phoneNumber = "9876543210"
  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की सेवाओं के बारे में जानकारी चाहिए।"

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white hindi-font">आज ही संपर्क करें</h2>
            <p className="text-lg text-white/90 hindi-font max-w-2xl mx-auto">
              अपनी सभी धार्मिक आवश्यकताओं के लिए हमसे जुड़ें। हम आपकी सेवा के लिए तत्पर हैं।
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-3 transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              <span className="hindi-font">व्हाट्सऐप पर ऑर्डर करें</span>
            </a>
            <a
              href={generateCallLink(phoneNumber)}
              className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-lg font-semibold flex items-center space-x-3 transition-colors shadow-lg hover:shadow-xl"
            >
              <Phone size={24} />
              <span className="hindi-font">अभी कॉल करें</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-2 text-white/90">
            <MapPin size={20} />
            <span className="hindi-font">रांची, झारखंड में स्थित</span>
          </div>
        </div>
      </div>
    </section>
  )
}

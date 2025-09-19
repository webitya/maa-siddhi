import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import CallIcon from "@mui/icons-material/Call"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { generateWhatsAppLink, generateCallLink } from "@/lib/utils"

export default function ContactBanner() {
  const phoneNumber = "6207732383"
  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की सेवाओं के बारे में जानकारी चाहिए।"

  return (
    <section className="py-10 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        {/* Heading */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white hindi-font">
            आज ही संपर्क करें
          </h2>
          <p className="text-base text-white/90 hindi-font max-w-xl mx-auto mt-2">
            अपनी सभी धार्मिक आवश्यकताओं के लिए हमसे जुड़ें।  
            हम आपकी सेवा के लिए तत्पर हैं।
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateWhatsAppLink(phoneNumber, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <WhatsAppIcon fontSize="small" />
            <span className="hindi-font text-sm">व्हाट्सऐप</span>
          </a>

          <a
            href={generateCallLink(phoneNumber)}
            className="bg-white hover:bg-gray-50 text-primary px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <CallIcon fontSize="small" />
            <span className="hindi-font text-sm">कॉल करें</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 text-white/90 text-sm">
          <LocationOnIcon fontSize="small" />
          <span className="hindi-font">रांची, झारखंड</span>
        </div>
      </div>
    </section>
  )
}

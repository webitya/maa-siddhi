import { Phone, MessageCircle, Mail, MapPin, Clock, Users } from "lucide-react"
import { generateWhatsAppLink, generateCallLink, generateEmailLink } from "@/lib/utils"

export default function ContactInfo() {
  const phoneNumber = "9876543210"
  const email = "info@maasiddhi.com"
  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की सेवाओं के बारे में जानकारी चाहिए।"

  const contactMethods = [
    {
      icon: Phone,
      title: "फोन कॉल",
      description: "तुरंत बात करने के लिए कॉल करें",
      value: `+91 ${phoneNumber}`,
      action: generateCallLink(phoneNumber),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: MessageCircle,
      title: "व्हाट्सऐप",
      description: "व्हाट्सऐप पर मैसेज भेजें",
      value: `+91 ${phoneNumber}`,
      action: generateWhatsAppLink(phoneNumber, whatsappMessage),
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Mail,
      title: "ईमेल",
      description: "ईमेल के माध्यम से संपर्क करें",
      value: email,
      action: generateEmailLink(email, "पूजा सामग्री की जानकारी", "नमस्ते,"),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground hindi-font mb-4">संपर्क की जानकारी</h2>
        <p className="text-muted-foreground hindi-font">
          हमसे जुड़ने के लिए नीचे दिए गए किसी भी माध्यम का उपयोग करें। हम आपकी सहायता के लिए हमेशा तैयार हैं।
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.action}
            target={method.icon === MessageCircle ? "_blank" : undefined}
            rel={method.icon === MessageCircle ? "noopener noreferrer" : undefined}
            className="block bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-3 rounded-lg ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}
              >
                <method.icon size={24} className={method.color} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground hindi-font mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground hindi-font mb-2">{method.description}</p>
                <p className="font-medium text-foreground">{method.value}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Store Information */}
      <div className="bg-card p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-foreground hindi-font mb-4">दुकान की जानकारी</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground hindi-font">पता</p>
              <p className="text-sm text-muted-foreground hindi-font">रांची, झारखंड, भारत</p>
              <p className="text-xs text-muted-foreground">मुख्य बाजार के पास</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground hindi-font">खुलने का समय</p>
              <p className="text-sm text-muted-foreground hindi-font">सुबह 8:00 - रात 8:00</p>
              <p className="text-xs text-muted-foreground hindi-font">सोमवार से रविवार</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Users size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground hindi-font">विशेषज्ञता</p>
              <p className="text-sm text-muted-foreground hindi-font">पूजा सामग्री और हवन सामग्री</p>
              <p className="text-xs text-muted-foreground hindi-font">धार्मिक परंपराओं की जानकार टीम</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-primary">500+</div>
          <div className="text-sm text-muted-foreground hindi-font">संतुष्ट ग्राहक</div>
        </div>
        <div className="bg-card p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-secondary">5+</div>
          <div className="text-sm text-muted-foreground hindi-font">वर्षों का अनुभव</div>
        </div>
      </div>
    </div>
  )
}

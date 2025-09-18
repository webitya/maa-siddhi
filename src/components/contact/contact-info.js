"use client"

import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import MailIcon from "@mui/icons-material/Mail"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import GroupIcon from "@mui/icons-material/Group"

import { generateWhatsAppLink, generateCallLink, generateEmailLink } from "@/lib/utils"

export default function ContactInfo() {
  const phoneNumber = "9876543210"
  const email = "info@maasiddhi.com"
  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की सेवाओं के बारे में जानकारी चाहिए।"

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: "फोन कॉल",
      description: "तुरंत बात करने के लिए कॉल करें",
      value: `+91 ${phoneNumber}`,
      action: generateCallLink(phoneNumber),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: WhatsAppIcon,
      title: "व्हाट्सऐप",
      description: "व्हाट्सऐप पर मैसेज भेजें",
      value: `+91 ${phoneNumber}`,
      action: generateWhatsAppLink(phoneNumber, whatsappMessage),
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: MailIcon,
      title: "ईमेल",
      description: "ईमेल के माध्यम से संपर्क करें",
      value: email,
      action: generateEmailLink(email, "पूजा सामग्री की जानकारी", "नमस्ते,"),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ]

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-foreground hindi-font mb-2">संपर्क की जानकारी</h2>
        <p className="text-sm text-muted-foreground hindi-font">
          हमसे जुड़ने के लिए नीचे दिए गए किसी भी माध्यम का उपयोग करें। हम आपकी सहायता के लिए हमेशा तैयार हैं।
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-3">
        {contactMethods.map((method, idx) => (
          <a
            key={idx}
            href={method.action}
            target={method.icon === WhatsAppIcon ? "_blank" : undefined}
            rel={method.icon === WhatsAppIcon ? "noopener noreferrer" : undefined}
            className="flex items-center space-x-3 p-3 bg-card rounded-lg hover:shadow-md transition-all duration-200"
          >
            <div className={`p-2 rounded-lg ${method.bgColor} flex-shrink-0`}>
              <method.icon className={method.color} fontSize="small" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground hindi-font">{method.title}</h3>
              <p className="text-xs text-muted-foreground hindi-font">{method.description}</p>
              <p className="text-sm font-medium text-foreground">{method.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Store Info */}
      <div className="space-y-3 bg-card p-4 rounded-lg shadow-sm">
        <h3 className="text-sm font-semibold text-foreground hindi-font mb-2">दुकान की जानकारी</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start space-x-2">
            <LocationOnIcon className="text-primary mt-1 flex-shrink-0" fontSize="small" />
            <div className="flex-1">
              <p className="font-medium text-foreground hindi-font">पता</p>
              <p className="text-xs">रांची, झारखंड, भारत (मुख्य बाजार के पास)</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <AccessTimeIcon className="text-primary mt-1 flex-shrink-0" fontSize="small" />
            <div className="flex-1">
              <p className="font-medium text-foreground hindi-font">खुलने का समय</p>
              <p className="text-xs">सुबह 8:00 - रात 8:00, सोमवार से रविवार</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <GroupIcon className="text-primary mt-1 flex-shrink-0" fontSize="small" />
            <div className="flex-1">
              <p className="font-medium text-foreground hindi-font">विशेषज्ञता</p>
              <p className="text-xs">पूजा और हवन सामग्री, धार्मिक परंपराओं की जानकार टीम</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-card p-3 rounded-lg text-center">
          <p className="text-lg font-bold text-primary">500+</p>
          <p className="text-xs text-muted-foreground hindi-font">संतुष्ट ग्राहक</p>
        </div>
        <div className="bg-card p-3 rounded-lg text-center">
          <p className="text-lg font-bold text-secondary">5+</p>
          <p className="text-xs text-muted-foreground hindi-font">वर्षों का अनुभव</p>
        </div>
      </div>
    </div>
  )
}

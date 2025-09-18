"use client"

import { useState } from "react"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import MailIcon from "@mui/icons-material/Mail"
import HeadsetIcon from "@mui/icons-material/Headset"
import CloseIcon from "@mui/icons-material/Close"
import { generateWhatsAppLink, generateCallLink, generateEmailLink } from "@/lib/utils"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = "9876543210"
  const email = "info@maasiddhi.com"
  const whatsappMessage = "नमस्ते! मुझे माँ सिद्धि की सेवाओं के बारे में जानकारी चाहिए।"

  const contactOptions = [
    {
      icon: <PhoneIcon fontSize="small" />,
      label: "कॉल करें",
      action: generateCallLink(phoneNumber),
      color: "bg-primary hover:bg-primary/90",
      external: false,
    },
    {
      icon: <WhatsAppIcon fontSize="small" />,
      label: "व्हाट्सऐप",
      action: generateWhatsAppLink(phoneNumber, whatsappMessage),
      color: "bg-green-500 hover:bg-green-600",
      external: true,
    },
    {
      icon: <MailIcon fontSize="small" />,
      label: "ईमेल",
      action: generateEmailLink(email, "पूजा सामग्री की जानकारी", "नमस्ते,"),
      color: "bg-blue-500 hover:bg-blue-600",
      external: false,
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-4 space-y-3 flex flex-col items-end">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.action}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
              className={`${option.color} text-white p-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 group`}
            >
              {option.icon}
              <span className="text-sm font-medium hindi-font opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {option.label}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-secondary hover:bg-secondary/90"
        } text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
      >
        {isOpen ? <CloseIcon fontSize="medium" /> : <HeadsetIcon fontSize="medium" />}
      </button>
    </div>
  )
}

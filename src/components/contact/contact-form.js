"use client"

import { useState } from "react"
import { Send, Person, Mail, Phone, Message } from "@mui/icons-material"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto space-y-6 p-4">
      <h2 className="text-xl font-bold hindi-font">संदेश भेजें</h2>
      <p className="text-sm text-muted-foreground hindi-font">
        नीचे दिए गए फॉर्म को भरकर हमें अपना संदेश भेजें। हम जल्द ही आपसे संपर्क करेंगे।
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="relative">
          <Person className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="नाम *"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ईमेल *"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="फोन नंबर"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm"
          />
        </div>

        {/* Subject */}
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm hindi-font"
        >
          <option value="">विषय चुनें *</option>
          <option value="product-inquiry">उत्पाद की जानकारी</option>
          <option value="order-status">ऑर्डर की स्थिति</option>
          <option value="bulk-order">थोक ऑर्डर</option>
          <option value="complaint">शिकायत</option>
          <option value="suggestion">सुझाव</option>
          <option value="other">अन्य</option>
        </select>

        {/* Message */}
        <div className="relative">
          <Message className="absolute left-3 top-3 text-muted-foreground" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="आपका संदेश *"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 disabled:bg-primary/50 transition-colors"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Send fontSize="small" />
          )}
          <span>{isSubmitting ? "भेजा जा रहा है..." : "संदेश भेजें"}</span>
        </button>

        {/* Status */}
        {submitStatus === "success" && (
          <div className="p-2 text-green-700 bg-green-100 rounded text-sm hindi-font">
            आपका संदेश सफलतापूर्वक भेज दिया गया है।
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-2 text-red-700 bg-red-100 rounded text-sm hindi-font">
            संदेश भेजने में त्रुटि हुई। कृपया फिर से प्रयास करें।
          </div>
        )}
      </form>
    </div>
  )
}

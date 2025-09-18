"use client"

import { useState } from "react"
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react"

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground hindi-font mb-4">संदेश भेजें</h2>
        <p className="text-muted-foreground hindi-font">
          नीचे दिए गए फॉर्म को भरकर हमें अपना संदेश भेजें। हम जल्द ही आपसे संपर्क करेंगे।
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground hindi-font mb-2">
            नाम *
          </label>
          <div className="relative">
            <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="आपका नाम"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground hindi-font mb-2">
            ईमेल *
          </label>
          <div className="relative">
            <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="आपका ईमेल"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground hindi-font mb-2">
            फोन नंबर
          </label>
          <div className="relative">
            <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="आपका फोन नंबर"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground hindi-font mb-2">
            विषय *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hindi-font"
          >
            <option value="">विषय चुनें</option>
            <option value="product-inquiry">उत्पाद की जानकारी</option>
            <option value="order-status">ऑर्डर की स्थिति</option>
            <option value="bulk-order">थोक ऑर्डर</option>
            <option value="complaint">शिकायत</option>
            <option value="suggestion">सुझाव</option>
            <option value="other">अन्य</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground hindi-font mb-2">
            संदेश *
          </label>
          <div className="relative">
            <MessageSquare size={20} className="absolute left-3 top-3 text-muted-foreground" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
              placeholder="आपका संदेश यहाँ लिखें..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
              <span className="hindi-font">भेजा जा रहा है...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span className="hindi-font">संदेश भेजें</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg hindi-font">
            आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg hindi-font">
            संदेश भेजने में त्रुटि हुई है। कृपया फिर से कोशिश करें या सीधे हमसे संपर्क करें।
          </div>
        )}
      </form>
    </div>
  )
}

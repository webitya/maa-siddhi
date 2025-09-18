import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata = {
  title: "संपर्क करें - माँ सिद्धि | Contact Us - Maa Siddhi",
  description: "माँ सिद्धि से संपर्क करें। रांची, झारखंड में स्थित हमारी दुकान से पूजा सामग्री और हवन सामग्री खरीदें।",
  keywords: "संपर्क, माँ सिद्धि, रांची, झारखंड, पूजा सामग्री, हवन सामग्री, contact, Maa Siddhi",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <div className="om-symbol text-5xl text-primary">ॐ</div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground hindi-font">हमसे संपर्क करें</h1>
            <p className="text-lg text-muted-foreground hindi-font max-w-2xl mx-auto">
              माँ दुर्गा की कृपा से हम आपकी सेवा के लिए तत्पर हैं। किसी भी प्रकार की सहायता के लिए हमसे संपर्क करें।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>

          <ContactMap />
        </div>
      </main>
      <Footer />
    </div>
  )
}

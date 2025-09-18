import { Shield, Truck, Clock, Heart, Star, Users } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "शुद्ध गुणवत्ता",
      description: "सभी उत्पाद शुद्ध और प्रामाणिक हैं",
      color: "text-primary",
    },
    {
      icon: Truck,
      title: "तुरंत डिलीवरी",
      description: "रांची में समान दिन डिलीवरी",
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "24/7 सेवा",
      description: "हमेशा आपकी सेवा में तत्पर",
      color: "text-blue-600",
    },
    {
      icon: Heart,
      title: "भक्ति भाव",
      description: "माँ दुर्गा की कृपा से सेवा",
      color: "text-secondary",
    },
    {
      icon: Star,
      title: "विश्वसनीय",
      description: "500+ संतुष्ट ग्राहक",
      color: "text-yellow-600",
    },
    {
      icon: Users,
      title: "अनुभवी टीम",
      description: "धार्मिक परंपराओं की जानकार",
      color: "text-purple-600",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground hindi-font">हमें क्यों चुनें?</h2>
          <p className="text-lg text-muted-foreground hindi-font max-w-2xl mx-auto">
            माँ सिद्धि के साथ आपको मिलती है विश्वसनीय और गुणवत्तापूर्ण सेवा
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} className={feature.color} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground hindi-font mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground hindi-font leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-card rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground hindi-font mt-1">खुश ग्राहक</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">1000+</div>
              <div className="text-sm text-muted-foreground hindi-font mt-1">उत्पाद</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">5+</div>
              <div className="text-sm text-muted-foreground hindi-font mt-1">वर्षों का अनुभव</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">4.8</div>
              <div className="text-sm text-muted-foreground hindi-font mt-1">रेटिंग</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

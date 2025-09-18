"use client"
import ShieldIcon from "@mui/icons-material/Security"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import FavoriteIcon from "@mui/icons-material/Favorite"
import StarIcon from "@mui/icons-material/Star"
import GroupsIcon from "@mui/icons-material/Groups"

export default function WhyChooseUs() {
  const features = [
    { icon: ShieldIcon, title: "शुद्ध गुणवत्ता", description: "सभी उत्पाद शुद्ध और प्रामाणिक हैं", color: "text-primary" },
    { icon: LocalShippingIcon, title: "तुरंत डिलीवरी", description: "रांची में समान दिन डिलीवरी", color: "text-green-600" },
    { icon: AccessTimeIcon, title: "24/7 सेवा", description: "हमेशा आपकी सेवा में तत्पर", color: "text-blue-600" },
    { icon: FavoriteIcon, title: "भक्ति भाव", description: "माँ दुर्गा की कृपा से सेवा", color: "text-secondary" },
    { icon: StarIcon, title: "विश्वसनीय", description: "500+ संतुष्ट ग्राहक", color: "text-yellow-600" },
    { icon: GroupsIcon, title: "अनुभवी टीम", description: "धार्मिक परंपराओं की जानकार", color: "text-purple-600" },
  ]

  return (
    <section className="py-12 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground hindi-font">
            हमें क्यों चुनें?
          </h2>
          <p className="text-base text-muted-foreground hindi-font max-w-xl mx-auto mt-2">
            माँ सिद्धि के साथ आपको मिलती है विश्वसनीय और गुणवत्तापूर्ण सेवा
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-5 rounded-xl shadow-sm"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-muted rounded-lg flex items-center justify-center">
                  <feature.icon fontSize="medium" className={feature.color} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base lg:text-lg font-semibold text-foreground hindi-font">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground hindi-font mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-10 bg-card rounded-xl p-6 shadow-inner">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary">500+</div>
              <div className="text-xs lg:text-sm text-muted-foreground hindi-font mt-1">खुश ग्राहक</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-secondary">1000+</div>
              <div className="text-xs lg:text-sm text-muted-foreground hindi-font mt-1">उत्पाद</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-green-600">5+</div>
              <div className="text-xs lg:text-sm text-muted-foreground hindi-font mt-1">वर्षों का अनुभव</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-yellow-600">4.8</div>
              <div className="text-xs lg:text-sm text-muted-foreground hindi-font mt-1">रेटिंग</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

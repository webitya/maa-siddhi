export const categories = [
  { id: "puja-samagri", name: "पूजा सामग्री", nameEn: "Puja Samagri" },
  { id: "hawan-samagri", name: "हवन सामग्री", nameEn: "Hawan Samagri" },
  { id: "incense", name: "धूप-अगरबत्ती", nameEn: "Incense" },
  { id: "flowers", name: "फूल-माला", nameEn: "Flowers & Garlands" },
  { id: "oils", name: "तेल-घी", nameEn: "Oils & Ghee" },
  { id: "sweets", name: "प्रसाद-मिठाई", nameEn: "Prasad & Sweets" },
]

export const products = [
  {
    id: 1,
    slug: "sampurn-durga-puja-samagri-pack-ranchi",
    name: "संपूर्ण दुर्गा पूजा सामग्री पैक",
    nameEn: "Complete Durga Puja Samagri Pack",
    category: "puja-samagri",
    price: 599,
    originalPrice: 799,
    image: "/complete-puja-samagri-set-with-kalash-diya-incense.jpg",
    description:
      "दुर्गा पूजा के लिए संपूर्ण सामग्री का विशेष पैक। इसमें कलश, दीया, अगरबत्ती, रोली, चावल, फूल, प्रसाद, और माता दुर्गा की पूजा के लिए आवश्यक सभी 21 सामग्री शामिल है। रांची में सबसे लोकप्रिय दुर्गा पूजा पैक।",
    features: [
      "21 आवश्यक पूजा सामग्री",
      "कलश, दीया, और आरती थाली",
      "अगरबत्ती, धूप, और कपूर",
      "रोली, चावल, और हल्दी",
      "फूल, माला, और चुनरी",
      "प्रसाद और मिठाई",
      "दुर्गा माता की तस्वीर",
      "पूजा विधि गाइड शामिल",
    ],
    contents: [
      "पीतल का कलश - 1 पीस",
      "मिट्टी के दीये - 11 पीस",
      "अगरबत्ती - 2 पैकेट",
      "धूप बत्ती - 1 पैकेट",
      "कपूर - 50 ग्राम",
      "रोली - 100 ग्राम",
      "चावल - 250 ग्राम",
      "हल्दी पाउडर - 50 ग्राम",
      "चंदन पाउडर - 25 ग्राम",
      "गुड़ - 100 ग्राम",
      "सुपारी - 11 पीस",
      "नारियल - 1 पीस",
      "केला - 5 पीस",
      "फूल (गेंदा, गुलाब) - 2 किलो",
      "आम के पत्ते - 1 गुच्छा",
      "तुलसी के पत्ते - 1 गुच्छा",
      "माला (फूलों की) - 2 पीस",
      "लाल चुनरी - 1 पीस",
      "कलावा (मौली) - 1 रोल",
      "आरती की थाली - 1 पीस",
      "दुर्गा माता की तस्वीर - 1 पीस",
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 287,
    orderCount: 142,
    reviews: [
      {
        id: 1,
        name: "प्रिया शर्मा",
        rating: 5,
        comment: "बहुत ही बेहतरीन पैक है। दुर्गा पूजा के लिए सब कुछ मिल गया। रांची में इससे अच्छा पैक कहीं नहीं मिलता।",
        date: "2024-10-15",
        verified: true,
      },
      {
        id: 2,
        name: "राजेश कुमार",
        rating: 5,
        comment: "माँ सिद्धि से हमेशा सामान लेते हैं। क्वालिटी बहुत अच्छी है और सब कुछ फ्रेश मिलता है।",
        date: "2024-10-12",
        verified: true,
      },
      {
        id: 3,
        name: "सुनीता देवी",
        rating: 4,
        comment: "अच्छा पैक है। सभी सामान अच्छी क्वालिटी का है। डिलीवरी भी टाइम पर हुई।",
        date: "2024-10-08",
        verified: true,
      },
    ],
  },
  {
    id: 2,
    slug: "sampurn-puja-samagri-set-ranchi",
    name: "संपूर्ण पूजा सामग्री सेट",
    nameEn: "Complete Puja Samagri Set",
    category: "puja-samagri",
    price: 299,
    originalPrice: 399,
    image: "/complete-puja-samagri-set-with-kalash-diya-incense.jpg",
    description:
      "पूर्ण पूजा के लिए आवश्यक सभी सामग्री का संपूर्ण सेट। इसमें कलश, दीया, अगरबत्ती, रोली, चावल, और अन्य पूजा सामग्री शामिल है।",
    features: ["कलश और दीया", "अगरबत्ती और धूप", "रोली और चावल", "कपूर और तिलक"],
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    orderCount: 89,
    reviews: [
      {
        id: 1,
        name: "अनिता सिंह",
        rating: 5,
        comment: "बहुत अच्छा सेट है। सभी चीजें अच्छी क्वालिटी की हैं।",
        date: "2024-10-10",
        verified: true,
      },
    ],
  },
  {
    id: 3,
    slug: "hawan-samagri-500g-ranchi",
    name: "हवन सामग्री (500 ग्राम)",
    nameEn: "Hawan Samagri (500g)",
    category: "hawan-samagri",
    price: 149,
    originalPrice: 199,
    image: "/hawan-samagri-mixed-herbs-for-fire-ritual.jpg",
    description:
      "शुद्ध और प्राकृतिक हवन सामग्री जो हवन कुंड में डालने के लिए तैयार है। इसमें सभी आवश्यक जड़ी-बूटियां और सुगंधित द्रव्य शामिल हैं।",
    features: ["500 ग्राम पैकेट", "शुद्ध प्राकृतिक सामग्री", "सुगंधित जड़ी-बूटी", "हवन के लिए तैयार"],
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    orderCount: 67,
    reviews: [
      {
        id: 1,
        name: "मनोज पांडे",
        rating: 5,
        comment: "हवन सामग्री बहुत अच्छी है। सुगंध भी बहुत अच्छी आती है।",
        date: "2024-10-05",
        verified: true,
      },
    ],
  },
  {
    id: 4,
    slug: "gangajal-holy-water-ranchi",
    name: "गंगाजल (पवित्र जल)",
    nameEn: "Gangajal (Holy Water)",
    category: "puja-samagri",
    price: 99,
    originalPrice: 129,
    image: "/gangajal-holy-water-bottle-for-puja.jpg",
    description: "हरिद्वार से लाया गया शुद्ध गंगाजल। सभी धार्मिक अनुष्ठानों और पूजा के लिए आवश्यक पवित्र जल।",
    features: ["हरिद्वार से शुद्ध गंगाजल", "250ml बोतल", "सील पैक", "पूजा के लिए आवश्यक"],
    inStock: true,
    rating: 4.9,
    reviewCount: 234,
    orderCount: 156,
    reviews: [
      {
        id: 1,
        name: "गीता देवी",
        rating: 5,
        comment: "बिल्कुल शुद्ध गंगाजल है। पैकिंग भी अच्छी है।",
        date: "2024-10-14",
        verified: true,
      },
    ],
  },
  {
    id: 5,
    slug: "sandalwood-powder-chandan-ranchi",
    name: "चंदन पाउडर (100 ग्राम)",
    nameEn: "Sandalwood Powder (100g)",
    category: "puja-samagri",
    price: 199,
    originalPrice: 249,
    image: "/sandalwood-powder-chandan-for-tilaka.jpg",
    description: "शुद्ध चंदन का बारीक पाउडर। तिलक लगाने और पूजा में उपयोग के लिए उत्तम गुणवत्ता का चंदन।",
    features: ["100% शुद्ध चंदन", "100 ग्राम पैकेट", "बारीक पाउडर", "सुगंधित और शीतल"],
    inStock: true,
    rating: 4.6,
    reviewCount: 67,
    orderCount: 45,
    reviews: [
      {
        id: 1,
        name: "रमेश गुप्ता",
        rating: 4,
        comment: "चंदन की क्वालिटी अच्छी है। सुगंध भी बहुत अच्छी है।",
        date: "2024-10-01",
        verified: true,
      },
    ],
  },
  {
    id: 6,
    slug: "clay-diya-set-12-pieces-ranchi",
    name: "दीया सेट (12 पीस)",
    nameEn: "Diya Set (12 Pieces)",
    category: "puja-samagri",
    price: 79,
    originalPrice: 99,
    image: "/clay-diyas-oil-lamps-set-for-diwali-puja.jpg",
    description: "मिट्टी के पारंपरिक दीये का सेट। दीवाली, पूजा और अन्य त्योहारों के लिए आदर्श।",
    features: ["12 दीयों का सेट", "मिट्टी के पारंपरिक दीये", "त्योहारों के लिए उत्तम", "हस्तनिर्मित"],
    inStock: true,
    rating: 4.5,
    reviewCount: 123,
    orderCount: 98,
    reviews: [
      {
        id: 1,
        name: "सुमित्रा यादव",
        rating: 5,
        comment: "दीये बहुत अच्छे हैं। दीवाली में बहुत काम आए।",
        date: "2024-09-28",
        verified: true,
      },
    ],
  },
  {
    id: 7,
    slug: "pure-camphor-kapur-ranchi",
    name: "कपूर (50 ग्राम)",
    nameEn: "Camphor (50g)",
    category: "puja-samagri",
    price: 59,
    originalPrice: 79,
    image: "/camphor-kapur-tablets-for-aarti.jpg",
    description: "शुद्ध कपूर की गोलियां। आरती और पूजा के लिए आवश्यक सुगंधित कपूर।",
    features: ["50 ग्राम पैकेट", "शुद्ध कपूर", "आरती के लिए उत्तम", "लंबे समय तक जलता है"],
    inStock: true,
    rating: 4.7,
    reviewCount: 98,
    orderCount: 76,
    reviews: [
      {
        id: 1,
        name: "विनोद कुमार",
        rating: 5,
        comment: "कपूर बहुत अच्छा है। आरती में बहुत अच्छी सुगंध आती है।",
        date: "2024-09-25",
        verified: true,
      },
    ],
  },
]

export const getProductsByCategory = (categoryId) => {
  return products.filter((product) => product.category === categoryId)
}

export const getProductById = (id) => {
  return products.find((product) => product.id === Number.parseInt(id))
}

export const getFeaturedProducts = () => {
  return products.slice(0, 4)
}

export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug)
}

export const getRandomOrderCount = (min = 45, max = 150) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getProductsForLocation = (location = "ranchi") => {
  return products.map((product) => ({
    ...product,
    locationKeywords: `${location} jharkhand puja samagri shop`,
  }))
}

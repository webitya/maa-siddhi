export default function manifest() {
  return {
    name: "Maa Siddhi - Best Puja Samagri in Ranchi Jharkhand",
    short_name: "Maa Siddhi",
    description:
      "Authentic puja samagri, religious items, and spiritual accessories in Ranchi, Jharkhand. Premium quality brass items, incense, flowers, and traditional Hindu worship materials.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#be123c",
    orientation: "portrait",
    categories: ["shopping", "lifestyle", "religion"],
    lang: "hi-IN",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Puja Samagri",
        short_name: "Puja Items",
        description: "Browse authentic puja samagri",
        url: "/categories/puja-samagri",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "Blog",
        short_name: "Blog",
        description: "Read spiritual guides and tips",
        url: "/blog",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Get in touch with us",
        url: "/contact",
        icons: [{ src: "/icon-192x192.png", sizes: "192x192" }],
      },
    ],
  }
}

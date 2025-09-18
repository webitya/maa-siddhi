import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturedProducts from "@/components/home/featured-products"
import CategoriesSection from "@/components/home/categories-section"
import WhyChooseUs from "@/components/home/why-choose-us"
import ContactBanner from "@/components/home/contact-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  )
}

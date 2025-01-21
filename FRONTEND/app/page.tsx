import Hero from "../components/hero"
import Features from "../components/features"
import ProductScanner from "../components/product-scanner"
import AIAssistant from "../components/ai-assistant"
import CalorieCalculator from "../components/calorie-calculator"
import Testimonials from "../components/testimonials"
import Pricing from "../components/pricing"
import FAQ from "../components/faq"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <Hero />
      <Features />
      <ProductScanner />
      <AIAssistant />
      <CalorieCalculator />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}


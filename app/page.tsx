import Hero from "@/components/landing/hero"
import Features from "@/components/landing/features"
import Testimonials from "@/components/landing/testimonials"
import Pricing from "@/components/landing/pricing"
import Footer from "@/components/landing/footer"

export const metadata = {
  title: "Forma - Calm Operations for Revenue Teams",
  description:
    "Forma weaves revenue insights, approvals, and team rituals into one quiet interface so you can ship decisions faster than the market moves.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
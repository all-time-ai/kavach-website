import ComparisonSection from "@/components/ComparisonSection";
import CTA from "@/components/CTA";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IndustrySolutions from "@/components/IndustrySolutions";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhyKavach from "@/components/WhyKavach";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyKavach />
      <HowItWorks />
      <Features />
      <IndustrySolutions />
      <Demo />
      <Pricing />
      <ComparisonSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

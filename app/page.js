import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
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
      <Demo />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

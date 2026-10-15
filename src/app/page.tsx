import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Navigation Header */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client Logos Infinite Scroll Marquee (Directly below Hero) */}
      <Partners />

      {/* 3. About Us */}
      <About />

      {/* 4. Our Services (Our Areas of Operation) */}
      <Services />

      {/* 5. Our Capabilities (Integrated Engineering Capabilities) */}
      <Capabilities />

      {/* 6. Our Project Experience (Selected Infrastructure & Electrical Projects) */}
      <Projects />

      {/* 7. Why Linycon Private Limited? */}
      <WhyUs />

      {/* 8. Contact Us */}
      <Contact />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechAdvantages from "@/components/sections/TechAdvantages";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <TechAdvantages />
        <Projects />
        <Testimonials />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

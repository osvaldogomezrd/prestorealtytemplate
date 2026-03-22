import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HappySellers from "./components/HappySellers";
import HowItWorks from "./components/HowItWorks";
import VideoSection from "./components/VideoSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CTABanner from "./components/CTABanner";
import LargestBuyer from "./components/LargestBuyer";
import HowWeCanHelp from "./components/HowWeCanHelp";
import OurWork from "./components/OurWork";
import AvoidForeclosure from "./components/AvoidForeclosure";
import ServiceAreas from "./components/ServiceAreas";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <HappySellers />
      <HowItWorks />
      <VideoSection />
      <WhyChooseUs />
      <CTABanner />
      <LargestBuyer />
      <HowWeCanHelp />
      <OurWork />
      <AvoidForeclosure />
      <ServiceAreas />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}

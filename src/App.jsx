import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import AudienceCards from "./components/AudienceCards";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <AudienceCards />
        <HowItWorks />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

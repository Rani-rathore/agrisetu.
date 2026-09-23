import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Impact />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
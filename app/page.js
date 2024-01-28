import Navbar from "./components/landing/NavBar";
import HeroSection from "./components/landing/HeroSection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#95ecf7] to-[#f0f0f0] dark:bg-black min-h-screen">
      <HeroSection />
      <Footer />
    </main>
  );
}

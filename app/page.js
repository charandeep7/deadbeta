import Navbar from "./components/landing/NavBar";
import HeroSection from "./components/landing/HeroSection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="bg-primaryBG dark:bg-secondaryBG dark:text-slate-400 min-h-screen">
      <HeroSection />
      <Footer/>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#95ecf7] to-[#f0f0f0] min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
}

import HeroSection from "./components/landing/HeroSection";
import Price from "./components/price-comparison/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Price />
    </main>
  );
}

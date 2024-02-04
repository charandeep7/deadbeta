
import HeroSection from "./components/landing/HeroSection";
import Price from "./components/price-comparison/page";

export default function Home() {
  return (
    <main className="bg-primaryBG dark:bg-secondaryBG dark:text-slate-400 min-h-screen">
      <HeroSection />
      {/* <Footer/> */}
    </main>
  );
}

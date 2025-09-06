import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="mx-auto h-[1500px]">
      <HeroHeader />
      <HeroSection />
    </div>
  );
}

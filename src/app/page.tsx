import { HeroHeader } from "@/components/sections/header";
import ContactSection from "@/components/sections/contact-form";
import FooterSection from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import { AboutMe } from "@/components/sections/about-me";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { FamousPersonalities } from "@/components/sections/famous-personalities";
import { Gallery } from "@/components/sections/gallery";
import { LogosBanner } from "@/components/sections/logos-banner";

export default function Home() {
  return (
    <div className="mx-auto">
      <HeroHeader />
      <HeroSection />
      <AboutMe />
      <LogosBanner />
      <Projects />
      <Achievements />
      <FamousPersonalities />
      <Gallery />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

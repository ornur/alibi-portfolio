import { HeroHeader } from "@/components/sections/header";
import ContactSection from "@/components/sections/contact-form";
import FooterSection from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import { AboutMe } from "@/components/sections/about-me";
import { Projects } from "@/components/sections/projects";
import { FamousPersonalities } from "@/components/sections/famous-personalities";
import { Gallery } from "@/components/sections/gallery";
import { LogosBanner } from "@/components/sections/logos-banner";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import CircularText from "@/components/shadcn-io/circular-effect";

export default function Home() {
  const lang = useLocale();
  return (
    <div
      className={cn("mx-auto", lang === "en" ? "font-latin" : "font-cyrillic")}
    >
      <HeroHeader />
      <HeroSection />
      <AboutMe />
      <LogosBanner />
      <Projects />
      <FamousPersonalities />
      <Gallery />
      <ContactSection />
      <FooterSection />
      <div className="right-10 bottom-10 hidden md:inline-block md:fixed">
        <CircularText
          text="ALIBI • ALISHER • ALIBI • ALISHER • "
          onHover="goBonkers"
          spinDuration={20}
          className="text-white"
        />
      </div>
    </div>
  );
}

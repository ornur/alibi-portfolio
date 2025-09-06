import { HeroHeader } from "@/components/header";
import ContactSection from "@/components/contact-form";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="mx-auto">
      <HeroHeader />
      <HeroSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

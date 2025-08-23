import { About } from "@/components/about";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <NavBar />
      <About />
    </div>
  );
}

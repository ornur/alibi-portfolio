import { About } from "@/components/about";
import { NavBar } from "@/components/navbar";
import { Main } from "@/components/main";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl h-[1500px]">
      <NavBar />
      <Main />
      <About />
    </div>
  );
}

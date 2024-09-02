import  Header  from "@/sections/Header";
import Hero  from "../sections/Hero";
import Projects from "@/sections/Projects";
export default function Home() {
  return (
    <div className="px-3">
      <Header/>
      <Hero/>
      <Projects/>
    </div>
  );
}

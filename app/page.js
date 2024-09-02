import  Header  from "@/sections/Header";
import Hero  from "../sections/Hero";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape";
import Testimonials from "@/sections/Testimonials";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <div className="px-4">
        <Projects/>
      </div>
      <Tape/>
      <Testimonials/>
    </div>
  );
}

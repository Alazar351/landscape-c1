import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MainServices from "@/components/MainServices";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <MainServices />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Team />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}

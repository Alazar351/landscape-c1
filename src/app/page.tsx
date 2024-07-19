import About from "@/components/About";
import Hero from "@/components/Hero";
import MainServices from "@/components/MainServices";
import Projects from "@/components/Project";
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
      <Team />
      <Projects />
      <Testimonials />
      <WhyUs />
    </>
  );
}

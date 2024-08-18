import About from "@/components/About";
import Intro from "@/components/Intro";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Intro />
      <About />
      <Process />
      <Testimonials />
    </>
  );
}

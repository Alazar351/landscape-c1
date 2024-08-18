import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Intro />
      <Contact />
    </>
  );
}

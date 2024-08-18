import Intro from "@/components/Intro";
import Services from "@/components/Services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <Intro />
      <Services />
    </>
  );
}

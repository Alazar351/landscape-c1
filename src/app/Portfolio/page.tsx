import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <Intro />
      <Projects />
    </>
  );
}

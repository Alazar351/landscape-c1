import Link from "next/link";
import Links from "./_component/Links";
import ContactCard from "./_component/ContactCard";
import Description from "./_component/Description";
import Intro from "@/components/Intro";

export default function Details() {
  return (
    <>
      <Intro />
      <section className="container mb-10 mt-[60px] flex flex-col items-center justify-center gap-[30px] px-4 sm:mb-24 md:flex-row">
        <div className="w-full space-y-[30px]">
          <Links />
          <ContactCard />
        </div>
        <div className="">
          <Description />
        </div>
      </section>
    </>
  );
}

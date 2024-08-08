import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Location, Mail, Phone } from "../../public";
import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import { fadeInAnimationBT } from "@/data/motions";
import FramerFade from "./FramerAnimations";
import { address, email, phone } from "@/data/general";

const sections = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About Us",
        href: "/About",
      },
      {
        name: "Services",
        href: "/Services",
      },
      {
        name: "Portfolio",
        href: "/Portfolio",
      },
      {
        name: "Contact Us",
        href: "/Contact",
      },
    ],
  },
  {
    title: "Popular Links",
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About Us",
        href: "/About",
      },
      {
        name: "Services",
        href: "/Services",
      },
      {
        name: "Portfolio",
        href: "/Portfolio",
      },
      {
        name: "Contact Us",
        href: "/Contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <section className="relative bg-primary-foreground px-4 pb-[30px] pt-[60px] md:px-8">
      <div className="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 lg:grid-cols-4">
        <FramerFade variant={fadeInAnimationBT}>
          <Link
            href="/"
            className="flex h-[126px] w-[267px] items-center justify-center rounded-[10px] bg-background"
          >
            <Image src={Logo} alt="Logo" className="h-[60px]" />
          </Link>
        </FramerFade>
        <FramerFade variant={fadeInAnimationBT} className="flex flex-col gap-4">
          <h4 className="font-jost text-2xl text-white">Get In Touch</h4>
          <div className="flex flex-col gap-4 text-white">
            <div className="flex items-center gap-2">
              <Location className="size-5 fill-white" />
              <p>{address}</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-5 fill-white" />
              <p>{phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-5 fill-white" />
              <p>{email}</p>
            </div>
          </div>
        </FramerFade>
        {sections.map((section, idx) => (
          <FramerFade
            key={idx}
            variant={fadeInAnimationBT}
            className="flex flex-col gap-4"
          >
            <p className="font-jost text-2xl text-white">{section.title}</p>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, idx) => (
                <li key={idx} className="flex items-center gap-1 text-white">
                  <ChevronRight
                    strokeWidth={4}
                    className="size-4 font-extrabold"
                  />
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </FramerFade>
        ))}

        <FramerFade
          variant={fadeInAnimationBT}
          className="flex items-center justify-center text-white md:col-span-2 lg:col-span-4"
        >
          <p>
            &copy; <span className="font-bold">Your Site Name</span>. All Rights
            Reserved.
          </p>
        </FramerFade>
      </div>
    </section>
  );
}

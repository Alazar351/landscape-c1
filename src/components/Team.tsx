import Image from "next/image";
import { Facebook, Instagram, Twitter } from "@public/index";
import Link from "next/link";
import FramerFade from "./FramerAnimations";
import { fadeInAnimationBT } from "@/data/motions";
import { JSX } from "react";

type TeamType = {
  name: string;
  position: string;
  img: any;
  logos: {
    social: JSX.Element;
    href: string;
  }[];
}[];

const members: TeamType = [
  {
    name: "Jonny Sands",
    position: "Gardener",
    img: "/assets/team1.png",
    logos: [
      {
        social: (
          <Facebook className="size-[50px] rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
      {
        social: (
          <Twitter className="size-12 rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
      {
        social: (
          <Instagram className="size-12 rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
    ],
  },
  {
    name: "Jonny Sands",
    position: "Gardener",
    img: "/assets/team1.png",
    logos: [
      {
        social: (
          <Facebook className="size-[50px] rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
      {
        social: (
          <Twitter className="size-12 rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
      {
        social: (
          <Instagram className="size-12 rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
    ],
  },
  {
    name: "Jonny Sands",
    position: "Gardener",
    img: "/assets/team1.png",
    logos: [
      {
        social: (
          <Facebook className="size-[50px] rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
      {
        social: (
          <Twitter className="size-12 rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
      {
        social: (
          <Instagram className="size-12 rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
    ],
  },
  {
    name: "Jonny Sands",
    position: "Gardener",
    img: "/assets/team1.png",
    logos: [
      {
        social: (
          <Facebook className="size-[50px] rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
      {
        social: (
          <Twitter className="size-12 rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
      {
        social: (
          <Instagram className="size-12 rounded-md bg-primary fill-white stroke-white p-3 hover:fill-primary-foreground hover:stroke-primary-foreground" />
        ),
        href: "#",
      },
    ],
  },
];

export default function Team() {
  return (
    <section className="relative bg-primary-foreground py-[60px]">
      <Image
        src={"/assets/mask-team.png"}
        alt="background"
        fill
        aria-hidden="true"
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
      />
      <div className="container">
        <div className="mb-[60px] text-center">
          <h2 className="uppercase tracking-[3.8px] text-white">
            Meet our team
          </h2>
          <p className="my-5 font-jost text-[46px] font-medium tracking-[-1px] text-white">
            Our Creative Team
          </p>
        </div>
        <div className="grid gap-[30px] sm:grid-cols-2 md:grid-cols-3">
          {members.map((member, idx) => (
            <FramerFade variant={fadeInAnimationBT} key={idx}>
              <div className="mx-4 flex flex-col items-center rounded-md bg-[hsl(150_36%_25%)] p-[30px]">
                <div className="group relative mb-8 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={member.img}
                    alt="A member of the team"
                    width={350}
                    height={400}
                    className="w-full"
                  />
                  <div className="absolute inset-0 -translate-y-[100%] bg-primary-foreground/50 transition-all duration-300 ease-in-out group-hover:translate-y-0"></div>
                  <div className="absolute inset-y-0 right-0 flex w-14 translate-x-[100%] flex-col items-center justify-center gap-4 transition-all duration-300 ease-in-out group-hover:translate-x-0">
                    {member.logos.map((logo, idx) => (
                      <Link key={idx} href={logo.href}>
                        {logo.social}
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="mb-2 text-[20px] font-bold text-white">
                  {member.name}
                </p>
                <p className="font-light tracking-[0.3px] text-white">
                  {member.position}
                </p>
              </div>
            </FramerFade>
          ))}
        </div>
      </div>
    </section>
  );
}

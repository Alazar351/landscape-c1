import Image from "next/image";
import Bg from "@public/assets/mask-services.png";
import CardBg from "@public/assets/service-card-bg.png";
import { Gloves, Tools, WateringCan, Sprout } from "@public/index";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FramerFade from "./FramerAnimations";
import { fadeInAnimationBT } from "@/data/motions";

const services = [
  {
    title: "Landscaping",
    href: "/Services/Landscaping",
    description:
      "Transform your outdoor space with expert landscaping services, including design, installation, and maintenance to create a stunning garden all year round.",
    icon: (
      <Tools className="size-[70px] fill-primary-foreground group-hover:fill-white" />
    ),
  },
  {
    title: "Pruning Plants",
    href: "/Services/Pruning-Plants",
    description:
      "Enhance your garden's growth and appearance with precise pruning services, ensuring healthy plants and vibrant blooms throughout the seasons.",
    icon: (
      <Gloves className="size-[70px] fill-primary-foreground group-hover:fill-white" />
    ),
  },
  {
    title: "Irrigation & Drainage",
    href: "/Services/Irrigation-and-Drainage",
    description:
      "Keep your lawn lush and green with efficient irrigation systems and drainage solutions that prevent waterlogging and promote healthy plant growth.",
    icon: (
      <Sprout className="size-[70px] fill-primary-foreground group-hover:fill-white" />
    ),
  },
  {
    title: "Garden Maintenance",
    href: "/Services/Garden-Maintenance",
    description:
      "Ensure a healthy, vibrant garden with regular maintenance, including mowing, weeding, fertilizing, and pest control for year-round beauty.",
    icon: (
      <WateringCan className="size-[70px] fill-primary-foreground group-hover:fill-white" />
    ),
  },
];

export default function Services() {
  return (
    <section className="relative bg-background py-[120px]">
      <Image
        src={Bg}
        alt="background"
        fill
        aria-hidden="true"
        placeholder="blur"
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
      />
      <div className="container flex flex-col items-center justify-center">
        <div className="mb-[60px] text-center">
          <h2 className="uppercase tracking-[3.8px] text-primary">
            What we do
          </h2>
          <p className="my-5 font-jost text-[2.875rem] font-medium tracking-[-1px] text-[#181818]">
            What You Can Do with Gettree
          </p>
        </div>
        <div className="grid w-full gap-[30px] px-4 sm:grid-cols-2">
          {services.map((service, idx) => (
            <FramerFade variant={fadeInAnimationBT} key={idx}>
              <div className="group relative flex w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-lg bg-white px-5 py-8 transition-transform duration-700 ease-in-out hover:-translate-y-2 sm:flex-row sm:items-start">
                <Image
                  src={CardBg}
                  fill
                  alt="plant background"
                  className="absolute inset-0 -z-20 scale-[1.2] object-cover object-center opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100"
                />
                <div className="absolute inset-0 -z-10 bg-primary-foreground opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div>
                <div>{service.icon}</div>
                <div className="flex flex-col items-center sm:items-start">
                  <Link
                    href={service.href}
                    className="underline-effect-white mb-4 font-jost text-[1.375rem] font-bold text-primary-foreground group-hover:text-white"
                  >
                    {service.title}
                  </Link>
                  <p className="mb-5 text-center text-primary-foreground group-hover:text-white sm:text-left">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="flex items-center justify-center text-primary group-hover:text-white"
                  >
                    Read More <ChevronRight size={20} strokeWidth={5} />
                  </Link>
                </div>
              </div>
            </FramerFade>
          ))}
        </div>
      </div>
    </section>
  );
}

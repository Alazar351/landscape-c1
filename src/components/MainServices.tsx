import Link from "next/link";
import { FruitBox, Gloves, Sprout, Tools } from "../../public";
import FramerFade from "./FramerAnimations";
import { fadeInAnimationBT } from "@/data/motions";

const hoverAnimationBT = {
  y: -16,
  transition: { duration: 0.3 },
};

const services = [
  {
    title: "Landscaping Services",
    desc: "Enhance your outdoor space with our professional landscaping services. We create beautiful, functional gardens and landscapes tailored to your preferences.",
    icon: <Tools className="size-16 fill-primary" />,
  },
  {
    title: "Plant Pruning Services",
    desc: "Keep your plants healthy and looking their best with our expert pruning services. We ensure proper growth and aesthetics for all types of plants.",
    icon: <Gloves className="size-16 fill-primary" />,
  },
  {
    title: "Lawn Maintenance Services",
    desc: "Achieve a lush, green lawn with our comprehensive lawn maintenance services. We provide regular mowing, fertilizing, and weed control for a pristine yard.",
    icon: <FruitBox className="size-16 fill-primary" />,
  },
  {
    title: "Irrigation and Drainage Services",
    desc: "Ensure your garden stays hydrated and free of waterlogging with our irrigation and drainage solutions. We design and install efficient systems for optimal water management.",
    icon: <Sprout className="size-16 fill-primary" />,
  },
];

export default function MainServices() {
  return (
    <section className="grid grid-cols-1 items-center justify-center gap-[30px] px-4 pt-[65px] sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, idx) => (
        <FramerFade
          whileHover={hoverAnimationBT}
          variant={fadeInAnimationBT}
          key={idx}
          className="flex h-full overflow-hidden shadow-[0_0_15px_0_#E2E2E2]"
        >
          <div className="p-7 pr-0">{service.icon}</div>
          <div className="p-7">
            <Link
              href="/Services/Landscaping"
              className="text-[1.25rem] font-bold text-primary-foreground hover:text-primary"
            >
              <p>{service.title}</p>
            </Link>
            <p className="mt-4 text-primary-foreground">{service.desc}</p>
          </div>
        </FramerFade>
      ))}
    </section>
  );
}

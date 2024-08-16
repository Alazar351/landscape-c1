import { StaticImageData } from "next/image";
import Project1 from "../../public/assets/project1.png";

type Projects = {
  title: string;
  desc: string;
  href: string;
  img: StaticImageData;
};

export const shortCards: Projects[] = [
  {
    title: "Garden Transformation",
    desc: "Revamped an overgrown garden into a beautifully landscaped space.",
    href: "/Portfolio",
    img: Project1,
  },
  {
    title: "Pristine Pruning",
    desc: "Enhanced plant health and appearance with expert pruning.",
    href: "/Portfolio",
    img: Project1,
  },
  {
    title: "Efficient Irrigation System",
    desc: "Installed a smart irrigation system for optimal water use.",
    href: "/Portfolio",
    img: Project1,
  },
  {
    title: "Seasonal Garden Maintenance",
    desc: "Maintained gardens throughout the seasons for a pristine look.",
    href: "/Portfolio",
    img: Project1,
  },
];

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
    title: "Finished Work",
    desc: "Dummy text of free",
    href: "#",
    img: Project1,
  },
  {
    title: "Finished Work",
    desc: "Dummy text of free",
    href: "#",
    img: Project1,
  },
  {
    title: "Finished Work",
    desc: "Dummy text of free",
    href: "#",
    img: Project1,
  },
  {
    title: "Finished Work",
    desc: "Dummy text of free",
    href: "#",
    img: Project1,
  },
];

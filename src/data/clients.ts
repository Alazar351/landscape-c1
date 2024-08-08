import { StaticImageData } from "next/image";
import Profile1 from "../../public/assets/testimonial-1.jpg";

type Reviews = {
  name: string;
  desc: string;
  position: string;
  src: StaticImageData;
};

export const reviews: Reviews[] = [
  {
    name: "1Philip Mendez",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id elo luctus gravida a in ipsum.",
    position: "Consectetur",
    src: Profile1,
  },
  {
    name: "2Philip Mendez",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id elo luctus gravida a in ipsum.",
    position: "Consectetur",
    src: Profile1,
  },
  {
    name: "3Philip Mendez",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id elo luctus gravida a in ipsum.",
    position: "Consectetur",
    src: Profile1,
  },
  {
    name: "4Philip Mendez",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id elo luctus gravida a in ipsum.",
    position: "Consectetur",
    src: Profile1,
  },
];

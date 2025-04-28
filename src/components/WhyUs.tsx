import Image from "next/image";
import { Check } from "@public/index";
import { fadeInAnimationBT, fadeInAnimationLR } from "@/data/motions";
import FramerFade from "./FramerAnimations";

const reasons = [
  {
    title: "Experienced Team",
    desc: "Over 20 years in landscaping",
    list: [
      "Providing expert lawn care services",
      "Designing beautiful, functional outdoor spaces",
      "Using sustainable practices and materials",
    ],
  },
  {
    title: "Customer Satisfaction",
    desc: "Our top priority",
    list: [
      "Tailoring solutions to meet your needs",
      "Ensuring timely and efficient service",
      "Delivering exceptional results every time",
    ],
  },
];

export default function WhyUs() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="relative flex w-full">
        <Image
          src={"/assets/whyus.png"}
          width={1299}
          height={836}
          alt="Overview of potted plants"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex w-[232px] flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center rounded-[47%_0px_0px_47%] bg-background py-[50px] pl-5">
            <Image
              src={"/assets/Logo.png"}
              width={147}
              height={58}
              alt="Logo"
              className="h-[60px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start bg-primary px-6 py-[60px] text-white">
        <FramerFade variant={fadeInAnimationBT}>
          <h2 className="uppercase tracking-[3.8px]">Why Us</h2>
        </FramerFade>
        <FramerFade variant={fadeInAnimationBT}>
          <p className="mb-6 mt-5 font-jost text-[2.875rem] font-medium tracking-[-1px]">
            We Have The Perfect Solution For Your Landscape
          </p>
        </FramerFade>
        <FramerFade variant={fadeInAnimationBT}>
          <p className="leading-[30px]">
            At Getree, we transform outdoor spaces with our expert landscaping
            services. Our dedicated team uses the latest techniques and
            sustainable practices to ensure your lawn and garden are healthy,
            vibrant, and beautiful all year round.
          </p>
        </FramerFade>
        <div className="mt-8 flex w-full flex-col items-start gap-10 md:flex-row md:justify-between">
          {reasons.map((reason, idx) => (
            <FramerFade variant={fadeInAnimationLR} key={idx}>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex size-[70px] items-center justify-center rounded-full bg-[hsl(120_32%_47%)] text-xl text-white">
                    0{idx + 1}
                  </div>
                  <div className="space-y-2">
                    <p className="font-jost text-[1.25rem] font-bold">
                      {reason.title}
                    </p>
                    <p>{reason.desc}</p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-col gap-4">
                  {reason.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="size-6" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FramerFade>
          ))}
        </div>
      </div>
    </section>
  );
}

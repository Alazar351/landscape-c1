import { fadeInAnimationBT } from "@/data/motions";
import { GreenHouse, Seeding, Sprout, Tools } from "@public/index";
import FramerFade from "./FramerAnimations";

const steps = [
  {
    title: "Set Design Target",
    desc: "We collaborate with you to understand your vision and set clear design targets to transform your outdoor space into a stunning landscape.",
    icon: <Tools className="size-20 fill-primary" />,
  },
  {
    title: "Generate Unique Ideas",
    desc: "Our creative team generates unique, innovative ideas that reflect your preferences and enhance the beauty and functionality of your garden.",
    icon: <Sprout className="size-20 fill-primary" />,
  },
  {
    title: "Friendly Service",
    desc: "We prioritize customer satisfaction by providing friendly, professional service and ensuring a seamless, enjoyable experience throughout the project.",
    icon: <Seeding className="size-20 fill-primary" />,
  },
  {
    title: "Finished Work",
    desc: "Our experts deliver high-quality finished work that exceeds your expectations, creating a picturesque and sustainable outdoor environment.",
    icon: <GreenHouse className="size-20 fill-primary" />,
  },
];

export default function Process() {
  return (
    <section className="py-[60px]">
      <div className="container flex flex-col items-center justify-center px-4">
        <FramerFade variant={fadeInAnimationBT}>
          <h2 className="uppercase tracking-[3.8px] text-primary">
            Work Process
          </h2>
        </FramerFade>
        <FramerFade variant={fadeInAnimationBT}>
          <p className="mb-6 mt-5 text-center font-jost text-[2.875rem] font-medium tracking-[-1px]">
            We Complete Every Step Carefully
          </p>
        </FramerFade>
        <div className="mt-[60px] grid w-full items-center gap-[30px] md:grid-cols-2">
          {steps.map((step, idx) => (
            <FramerFade
              variant={fadeInAnimationBT}
              key={idx}
              className="flex w-full flex-col items-center justify-center gap-x-16 gap-y-9 sm:flex-row"
            >
              <div className="relative flex w-full items-center justify-center border-8 border-background py-7 sm:max-w-[202px] sm:py-[60px]">
                {step.icon}
                <div className="bottom-18 absolute -right-10 hidden size-[70px] items-center justify-center rounded-full bg-[hsl(120_32%_47%)] text-xl text-white sm:flex">
                  0{idx + 1}
                </div>
              </div>
              <div className="space-y-5 text-center sm:text-left">
                <p className="font-jost text-xl font-bold text-primary-foreground">
                  {step.title}
                </p>
                <p className="text-primary-foreground">{step.desc}</p>
              </div>
            </FramerFade>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Email, Map, Pad } from "@public/index";
import ContactForm from "./ContactForm";
import { fadeInAnimationBT, fadeInAnimationLR } from "@/data/motions";
import FramerFade from "./FramerAnimations";
import { address, email, phone } from "@/data/general";

const contactDetails = [
  {
    title: "Our Address",
    desc: address,
    icon: (
      <Map className="size-[60px] rounded-xl bg-[hsl(120_32%_47%)] fill-white p-3.5" />
    ),
  },
  {
    title: "Our Phone",
    desc: phone,
    icon: (
      <Pad className="size-[60px] rounded-xl bg-[hsl(120_32%_47%)] fill-white p-3.5" />
    ),
  },
  {
    title: "Our Email",
    desc: email,
    icon: (
      <Email className="size-[60px] rounded-xl bg-[hsl(120_32%_47%)] fill-white p-3.5" />
    ),
  },
];

export default function Contact() {
  return (
    <section className="relative z-0 bg-background px-4 py-[60px]">
      <Image
        src={"/assets/Group-contact.png"}
        alt="background"
        aria-hidden="true"
        fill
        className="pointer-events-none absolute inset-0 -z-10 object-cover object-right"
      />
      <div className="container z-20 grid md:grid-cols-2">
        <FramerFade variant={fadeInAnimationBT}>
          <h2 className="uppercase tracking-[3.8px] text-primary">
            Get In Touch
          </h2>
          <p className="mb-6 mt-5 font-jost text-[2.875rem] font-medium tracking-[-1px]">
            We want to share our location to find us easily
          </p>
        </FramerFade>

        <FramerFade variant={fadeInAnimationBT} className="mb-12">
          <ContactForm />
        </FramerFade>
        <FramerFade
          variant={fadeInAnimationLR}
          className="relative flex flex-col gap-8 overflow-clip rounded-lg bg-primary py-11 pl-9 text-white md:-mr-[40px] md:-mt-[360px]"
        >
          {contactDetails.map((detail, idx) => (
            <div key={idx} className="flex gap-6">
              {detail.icon}
              <div className="space-y-1">
                <p className="ui-input font-jost text-xl font-bold">
                  {detail.title}
                </p>
                <p>{detail.desc}</p>
              </div>
            </div>
          ))}
          <Image
            src={"/assets/leaf-contact.png"}
            width={177}
            height={187}
            alt="background"
            aria-hidden
            className="absolute -bottom-6 -right-6"
          />
        </FramerFade>
      </div>
    </section>
  );
}

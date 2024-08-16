import { address, email, phone } from "@/data/general";
import { Location, Mail, Phone } from "@public/index";

const details = [
  {
    title: "Tel",
    desc: phone,
    icon: <Phone className="size-6 fill-primary" />,
  },
  {
    title: "Location",
    desc: address,
    icon: <Location className="size-6 fill-primary" />,
  },
  {
    title: "Email",
    desc: email,
    icon: <Mail className="size-6 fill-primary" />,
  },
];

export default function ContactCard() {
  return (
    <div className="space-y-6 rounded-lg p-9 shadow-[0px_4px_19px_0px_#E0E0E0]">
      <h2 className="underline-text font-jost text-[28px] font-bold tracking-[-0.6px]">
        Contact us
      </h2>
      <div>
        {details.map((detail, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-6 py-7 even:border-b even:border-t"
          >
            <div className="flex gap-2 font-jost">
              {detail.icon}
              {detail.title + ":"}
            </div>
            <div className="text-[hsl(240_12%_36%)]">{detail.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

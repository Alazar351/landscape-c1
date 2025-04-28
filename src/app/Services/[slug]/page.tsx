import Intro from "@/components/Intro";
import ContactCard from "./_component/ContactCard";
import Description from "./_component/Description";
import Links from "./_component/Links";
import { details } from "@/data/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return details.map(({ id }) => ({ slug: id }));
}

export default function Details({ params }: any) {
  const detail = details.find((d) => d.id === params.slug);

  if (!detail) {
    notFound();
  }

  return (
    <>
      <Intro />
      <section
        id="detail-start"
        className="container mb-10 flex flex-col items-start justify-center gap-[30px] px-4 pt-[120px] sm:mb-24 md:flex-row"
      >
        <div className="w-full space-y-[30px]">
          <Links />
          <ContactCard />
        </div>
        <div>
          <Description detail={detail} />
        </div>
      </section>
    </>
  );
}

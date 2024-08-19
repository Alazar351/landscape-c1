import { details } from "@/data/services";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = details.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/Services/${id}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/About`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/Services`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/Portfolio`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/Contact`,
    },
    ...serviceEntries,
  ];
}

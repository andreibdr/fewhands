import { Metadata } from "next";
import { notFound } from "next/navigation";
import { platformsData } from "@/lib/platforms";
import { PlatformDetailView } from "@/components/PlatformDetailView";

interface Props {
  params: { platform: string };
}

export function generateStaticParams() {
  return Object.keys(platformsData).map((slug) => ({
    platform: slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const platform = platformsData[params.platform];
  if (!platform) {
    return {
      title: "Миграция сайтов на Next.js | Few Hands",
    };
  }

  return {
    title: platform.metaTitle.ru,
    description: platform.metaDescription.ru,
    keywords: [
      `миграция с ${platform.title.ru}`,
      `перенос сайта ${platform.title.ru} на next.js`,
      `ускорение ${platform.title.ru}`,
      `редизайн ${platform.title.ru}`,
      "few hands gomvp",
    ],
    alternates: {
      canonical: `https://fewhands.com/migrate/${params.platform}`,
    },
    openGraph: {
      title: platform.metaTitle.ru,
      description: platform.metaDescription.ru,
      url: `https://fewhands.com/migrate/${params.platform}`,
      type: "article",
    },
  };
}

export default function PlatformMigrationPage({ params }: Props) {
  const platform = platformsData[params.platform];
  if (!platform) {
    notFound();
  }

  return <PlatformDetailView platformSlug={params.platform} />;
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { platformsData } from "@/lib/platforms";
import { PlatformDetailView } from "@/components/PlatformDetailView";

interface Props {
  params: Promise<{ platform: string }>;
}

export function generateStaticParams() {
  return Object.keys(platformsData).map((slug) => ({
    platform: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { platform: slug } = await params;
  const platform = platformsData[slug];
  if (!platform) {
    return {
      title: "CMS Migration to Next.js | Few Hands",
    };
  }

  return {
    title: platform.metaTitle.en,
    description: platform.metaDescription.en,
    keywords: [
      `migration from ${platform.title.en}`,
      `migrate ${platform.title.en} to next.js`,
      `speed up ${platform.title.en}`,
      `redesign ${platform.title.en}`,
      "few hands gomvp",
    ],
    alternates: {
      canonical: `https://fewhands.com/migrate/${slug}`,
    },
    openGraph: {
      title: platform.metaTitle.en,
      description: platform.metaDescription.en,
      url: `https://fewhands.com/migrate/${slug}`,
      type: "article",
    },
  };
}

export default async function PlatformMigrationPage({ params }: Props) {
  const { platform: slug } = await params;
  const platform = platformsData[slug];
  if (!platform) {
    notFound();
  }

  return <PlatformDetailView platformSlug={slug} />;
}

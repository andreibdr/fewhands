import { Metadata } from "next";
import { AiVideoView } from "@/components/AiVideoView";

export const metadata: Metadata = {
  title: "AI Video Production & Avatar Presenters for Websites | Few Hands",
  description:
    "Turnkey generative AI video, virtual on-site avatars, and multilingual video production for business. Up to +40% conversion lift with YouTube, Shorts, and Reels produced in 24 hours.",
  keywords: [
    "AI video for website",
    "digital avatar presenters",
    "generative AI video production",
    "multilingual business avatars",
    "neural video marketing",
    "AI video production",
    "HeyGen Synthesia workflows",
    "few hands ai video",
  ],
  alternates: {
    canonical: "https://fewhands.com/ai-video",
  },
  openGraph: {
    title: "AI Video Production & Avatar Presenters | Few Hands",
    description:
      "Multilingual digital avatars, high-converting product videos, and social video pipelines. Cut traditional video studio costs by 85%.",
    url: "https://fewhands.com/ai-video",
    type: "website",
  },
};

export default function AiVideoPage() {
  return <AiVideoView />;
}

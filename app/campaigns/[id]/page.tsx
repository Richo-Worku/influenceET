
import { Suspense } from "react";
import CampaignDetailsClient from "./CampaignDetailsClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

async function CampaignDetailsContent({ params }: PageProps) {
  const { id } = await params;

  return <CampaignDetailsClient id={id} />;
}

export default function CampaignDetailsPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#FFFDFC]">
          <p className="text-sm font-medium text-gray-500">
            Loading campaign details...
          </p>
        </main>
      }
    >
      <CampaignDetailsContent params={params} />
    </Suspense>
  );
}

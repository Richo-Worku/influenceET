
import { Suspense } from "react";
import CampaignDetailsClient from "./CampaignDetailsClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CampaignDetailsPage({ params }: PageProps) {
  const { id } = await params;

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
      <CampaignDetailsClient id={id} />
    </Suspense>
  );
}

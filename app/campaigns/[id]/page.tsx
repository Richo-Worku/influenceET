
import CampaignDetailsClient from "./CampaignDetailsClient";

type CampaignDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CampaignDetailsPage({
  params,
}: CampaignDetailsPageProps) {
  const { id } = await params;

  return <CampaignDetailsClient id={id} />;
}

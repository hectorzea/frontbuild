// app/(job-offer-ai)/job-offer-ai/[id]/page.tsx
import { JobApplicationResponse } from "@/app/(job-offer-ai)/types/index";
import { JobOfferStatusBanner } from "@/components/frontbuild/JobOfferStatusBanner";

async function getJobOffer(id: string): Promise<JobApplicationResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/jobs/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) throw new Error("Failed to fetch job");
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const jobOffer = await getJobOffer(id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <JobOfferStatusBanner job={jobOffer} />
    </main>
  );
}

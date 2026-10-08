// por si se necesita esta lista en ejecucion
// const JOB_OFFER_STATUS = ["scrapping", "moderator", "administrator"] as const;
import { JobApplicationResponse } from "@/app/(job-offer-ai)/types/index";
async function getJobOffer(id: string): Promise<JobApplicationResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/jobs/${id}`,
    {
      cache: "no-store", // o 'force-cache' by needs
    },
  );

  if (!res.ok) throw new Error("Failed to fetch job");
  return res.json();
}
// todo: armar tests
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const jobOffer = await getJobOffer(id);
  console.log(jobOffer);
  return <div>Test</div>;
}

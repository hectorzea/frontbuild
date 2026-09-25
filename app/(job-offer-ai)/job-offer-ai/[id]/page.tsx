const JOB_OFFER_STATUS = ["scrapping", "moderator", "administrator"] as const;
type JobStatus = (typeof JOB_OFFER_STATUS)[number];
type JobOffer = {
  id: string;
  status: JobStatus;
  refined_data: [];
};

async function getJobOffer(id: string): Promise<JobOffer> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/jobs/${id}`,
    {
      cache: "no-store", // o 'force-cache' by needs
    },
  );

  if (!res.ok) throw new Error("Failed to fetch job");
  return res.json();
}

// todo: armar estructura
// todo: armar tests
// todo: ver como devolver la info si trae en be
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const jobOffer = await getJobOffer(id);

  return <div>{jobOffer.status}</div>;
}

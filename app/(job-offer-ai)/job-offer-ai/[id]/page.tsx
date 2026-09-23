const JOB_OFFER_STATUS = ["scrapping", "moderator", "administrator"] as const;
type JobStatus = (typeof JOB_OFFER_STATUS)[number];
type JobOffer = {
  id: string;
  status: JobStatus;
};

async function getJobOffer(id: string): Promise<JobOffer> {
  const res = await fetch(`https://api.example.com/jobs/${id}`, {
    cache: "no-store", // o 'force-cache' by needs
  });

  if (!res.ok) throw new Error("Failed to fetch job");
  return res.json();
}

export default async function JobOfferPage({
  params,
}: {
  params: { id: string };
}) {
  const jobOffer = await getJobOffer(params.id);

  return <div>{jobOffer.status}</div>;
}

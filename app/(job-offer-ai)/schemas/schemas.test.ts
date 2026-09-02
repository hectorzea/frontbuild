import { jobSearchSchema } from "@/app/(job-offer-ai)/schemas";

test("Test schema with all valid data ", async () => {
  expect(() =>
    jobSearchSchema.parse({
      linkedinJobOfferUrl: "https://www.linkedin.com/jobs/view/4382174999",
    }),
  ).not.toThrow();
});

import { JobOffer } from "@/app/(job-search)/types";

//Types && Interfaces
export type CheckJobRequestBody = {
  linkedinJobUrl: string;
};

export type SuccessJobSearchResponse = JobOffer;
export type ErrorJobSearchResponse = { message: string };

export type SuccessJobSearch = {
  status: 200;
  response: JobOffer;
};

export type ErrorJobSearch = {
  status: 500 | 503;
  response: ErrorJobSearchResponse;
};

type MockScenarioJobSearch = SuccessJobSearch | ErrorJobSearch;
export type JobSearchMockScenarios = Record<string, MockScenarioJobSearch>;

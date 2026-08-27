//Types && Interfaces
export type CheckJobRequestBody = {
  linkedinJobUrl: string;
};

export type SuccessJobSearchResponse = { _id: string };
export type ErrorJobSearchResponse = { message: string };

export type SuccessJobSearch = {
  status: 200;
  response: { _id: string };
};

export type ErrorJobSearch = {
  status: 500 | 503;
  response: ErrorJobSearchResponse;
};

type MockScenarioJobSearch = SuccessJobSearch | ErrorJobSearch;
export type JobSearchMockScenarios = Record<string, MockScenarioJobSearch>;

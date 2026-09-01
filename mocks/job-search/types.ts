//Types && Interfaces
export type CheckJobRequestBody = {
  linkedinJobOfferUrl: string;
};

export type SuccessJobSearchResponse = { id: string };
export type ErrorJobSearchResponse = { message: string };

export type SuccessJobSearch = {
  status: 200;
  response: { id: string };
};

export type ErrorJobSearch = {
  status: 500 | 503;
  response: ErrorJobSearchResponse;
};

type MockScenarioJobSearch = SuccessJobSearch | ErrorJobSearch;
export type JobSearchMockScenarios = Record<string, MockScenarioJobSearch>;

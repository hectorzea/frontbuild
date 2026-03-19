import { http, HttpResponse } from "msw";
import {
  ErrorJobSearchResponse,
  jobSearchMockScenarios,
  SuccessJobSearchResponse,
} from "../data/job-search";

//request bodies
type CheckJobRequestBody = {
  linkedinJobUrl: string;
};

export const jobCheckHandlers = [
  http.post<
    never,
    CheckJobRequestBody,
    SuccessJobSearchResponse | ErrorJobSearchResponse
  >(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/ai/process-job`,
    async ({ request }) => {
      const requestJobFormData = await request.json();
      const jobUrl = requestJobFormData.linkedinJobUrl as string;
      const mockResponse = jobSearchMockScenarios[jobUrl];
      return HttpResponse.json(mockResponse.response, {
        status: mockResponse.status,
      });
    },
  ),
];

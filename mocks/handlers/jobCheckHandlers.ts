import { http, HttpResponse } from "msw";
import {
  CheckJobRequestBody,
  ErrorJobSearchResponse,
  SuccessJobSearchResponse,
} from "../job-search/types";
import { jobSearchMockScenarios } from "../job-search/data";

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

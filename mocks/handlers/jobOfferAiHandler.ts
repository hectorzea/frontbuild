import { http, HttpResponse } from "msw";
import {
  CheckJobRequestBody,
  ErrorJobSearchResponse,
  SuccessJobSearchResponse,
} from "../job-search/types";
import { jobSearchMockScenarios } from "../job-search/data";
import { JobOffer } from "@/app/(job-offer-ai)/types";

export const jobOfferAiHandler = [
  http.post<
    never,
    CheckJobRequestBody,
    SuccessJobSearchResponse | ErrorJobSearchResponse
  >(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/ai/process-job`,
    async ({ request }) => {
      const requestJobFormData = await request.json();
      const jobUrl = requestJobFormData.linkedinJobOfferUrl as string;
      const mockResponse = jobSearchMockScenarios[jobUrl];
      return HttpResponse.json(mockResponse.response, {
        status: mockResponse.status,
      });
    },
  ),
  http.get<{ id: string }, JobOffer>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/jobs/:id`,
    ({ params }) => {
      const { id } = params;
      //TODO: generate error scenarios
      const defaultId = id as string;
      console.log(defaultId);
      return HttpResponse.json({
        _id: "6a961a421b20e94410f9481a",
        jobLink: "https://www.linkedin.com/jobs/view/4382174999",
        status: "FAILED",
        createdAt: "2026-09-01T00:20:18.929Z",
        updatedAt: "2026-09-01T00:22:22.984Z",
        __v: 0,
        lastError: "Navigation timeout of 120000 ms exceeded",
      });
    },
  ),
];

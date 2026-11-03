// mocks/handlers/jobOfferAiHandler.ts
import { JobApplicationResponse } from "@/app/(job-offer-ai)/types";
import { http, HttpResponse } from "msw";
import { jobData, jobSearchMockScenarios } from "../job-search/data";
import {
  CheckJobRequestBody,
  ErrorJobSearchResponse,
  SuccessJobSearchResponse,
} from "../job-search/types";

export const jobStatusByIdMocks: Record<string, JobApplicationResponse> = {
  pending: {
    _id: "6a961a421b20e94410f90001",
    jobLink: "https://www.linkedin.com/jobs/view/4382174904",
    status: "PENDING",
    createdAt: "2026-09-01T00:20:18.929Z",
    updatedAt: "2026-09-01T00:20:18.929Z",
  },
  scraping: {
    _id: "6a961a421b20e94410f90002",
    jobLink: "https://www.linkedin.com/jobs/view/4382174904",
    status: "SCRAPING",
    createdAt: "2026-09-01T00:20:18.929Z",
    updatedAt: "2026-09-01T00:20:30.000Z",
  },
  analyzing: {
    _id: "6a961a421b20e94410f90003",
    jobLink: "https://www.linkedin.com/jobs/view/4382174904",
    status: "ANALYZING",
    createdAt: "2026-09-01T00:20:18.929Z",
    updatedAt: "2026-09-01T00:21:00.000Z",
  },
  completed: {
    _id: "6a8f877d5122687436367a30",
    jobLink: "https://www.linkedin.com/jobs/view/4382174904",
    status: "COMPLETED",
    aiResult: jobData,
    createdAt: "2026-09-01T00:20:18.929Z",
    updatedAt: "2026-09-01T00:21:45.000Z",
  },
  failed: {
    _id: "6a961a421b20e94410f9481a",
    jobLink: "https://www.linkedin.com/jobs/view/4382174999",
    status: "FAILED",
    lastError: "Navigation timeout of 120000 ms exceeded",
    createdAt: "2026-09-01T00:20:18.929Z",
    updatedAt: "2026-09-01T00:22:22.984Z",
  },
};

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
  http.get<{ id: string }, never, JobApplicationResponse>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/jobs/:id`,
    ({ params }) => {
      const id = String(params.id);
      const response =
        jobStatusByIdMocks[id] ??
        (id === "6a8f877d5122687436367a30"
          ? jobStatusByIdMocks.completed
          : jobStatusByIdMocks.failed);

      return HttpResponse.json(response);
    },
  ),
];

// Need to use the React-specific entry point to import `createApi`
import { JobSearch } from "@/app/(job-offer-ai)/schemas";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const jobSearchApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/ai/process-job`,
  }),
  reducerPath: "jobOfferAiApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["JobOfferAi"],
  endpoints: (build) => ({
    createJobSearch: build.mutation<{ _id: string }, JobSearch>({
      query(body) {
        return {
          url: ``,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useCreateJobSearchMutation } = jobSearchApiSlice;

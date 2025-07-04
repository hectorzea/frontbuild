// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Label } from "@/app/types/api/Api";

// Define a service using a base URL and expected endpoints
export const labelApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/labels`,
  }),
  reducerPath: "labelApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Labels"],
  endpoints: (build) => ({
    // Supply generics for the return type (in this case `QuotesApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    //build.query<ResponseDelBackend, parametro url que queramos enviar>
    //luego cuando ejecutemos query: (parametroURl) especificado del tipo de arriba obviamente
    getLabels: build.query<Label[], void>({
      query: () => ``,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      //  providesTags: (result, error, id) => [{ type: "Labels" }],
      providesTags: () => [{ type: "Labels" }],
    }),
  }),
});

// Hooks are auto-generated by RTK-Query
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useGetLabelsQuery } = labelApiSlice;

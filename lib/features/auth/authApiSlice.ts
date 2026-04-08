import { User } from "@/app/(login)/schema";
import { RegisterUserResponse } from "@/app/(login)/types";
import { RootState } from "@/lib/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserProfile = {
  name: string;
};

export type LoginSuccessResponse = { accessToken: string; user: string };
export type LoginErrorResponse = { message: string };

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginSuccessResponse, User>({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation<RegisterUserResponse, User>({
      query: (user) => ({
        url: "/api/auth/register",
        method: "POST",
        body: user,
      }),
    }),
    profile: build.query<UserProfile, void>({
      query: () => `/api/auth/profile`,
    }),
    refresh: build.query<{ accessToken: string }, void>({
      query: () => "/api/auth/refresh",
    }),
    logout: build.mutation<{ message: string }, void>({
      query: () => ({
        url: "/api/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useLazyProfileQuery,
  useRefreshQuery,
} = authApiSlice;

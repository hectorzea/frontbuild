import { http, HttpResponse } from "msw";
import { LoginRequest } from "../auth/types";
import { loginMockScenarios } from "../auth/data";
import {
  LoginErrorResponse,
  LoginSuccessResponse,
} from "@/lib/features/auth/authApiSlice";

export const authHandlers = [
  http.get<never>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/auth/refresh`,
    () => {
      return HttpResponse.json({ accessToken: "some-fake-token" });
    },
  ),
  http.post<never, LoginRequest, LoginSuccessResponse | LoginErrorResponse>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/auth/login`,
    async ({ request }) => {
      const requestData: LoginRequest = await request.json();
      const email = requestData.email;
      const mockResponse = loginMockScenarios[email];
      return HttpResponse.json(mockResponse.response, {
        status: mockResponse.status,
      });
    },
  ),
];

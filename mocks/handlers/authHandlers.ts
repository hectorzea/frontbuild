import { http, HttpResponse } from "msw";
import { LoginRequest, RegisterRequest } from "../auth/types";
import { loginMockScenarios, registerMockScenarios } from "../auth/data";
import {
  LoginErrorResponse,
  LoginSuccessResponse,
  RegisterErrorResponse,
  RegisterSuccessResponse,
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
  http.post<
    never,
    RegisterRequest,
    RegisterSuccessResponse | RegisterErrorResponse
  >(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/auth/register`,
    async ({ request }) => {
      const requestData: RegisterRequest = await request.json();
      const email = requestData.email;
      const mockResponse = registerMockScenarios[email];
      return HttpResponse.json(mockResponse.response, {
        status: mockResponse.status,
      });
    },
  ),
  http.post<never, never, { message: string }>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/auth/logout`,
    async ({}) => {
      return HttpResponse.json(
        { message: "Success Logout" },
        {
          status: 200,
        },
      );
    },
  ),
];

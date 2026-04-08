import { User } from "@/app/(login)/schema";
import {
  LoginErrorResponse,
  LoginSuccessResponse,
} from "@/lib/features/auth/authApiSlice";

export type LoginRequest = User;

export type LoginSuccess = {
  status: 200;
  response: LoginSuccessResponse;
};
export type LoginError = {
  status: 403;
  response: LoginErrorResponse;
};

export type MockScenarioLogin = LoginSuccess | LoginError;

export type LoginMockScenarios = Record<string, MockScenarioLogin>;

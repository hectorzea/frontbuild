import { User } from "@/app/(login)/schema";
import {
  LoginErrorResponse,
  LoginSuccessResponse,
  RegisterErrorResponse,
  RegisterSuccessResponse,
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

//register
export type MockScenarioRegister = RegisterSuccess | RegisterError;

export type RegisterMockScenarios = Record<string, MockScenarioRegister>;

export type RegisterRequest = User;

export type RegisterSuccess = {
  status: 200;
  response: RegisterSuccessResponse;
};

export type RegisterError = {
  status: 500;
  response: RegisterErrorResponse;
};

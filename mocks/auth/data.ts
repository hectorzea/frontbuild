import { LoginMockScenarios, RegisterMockScenarios } from "./types";

export const loginMockScenarios: LoginMockScenarios = {
  "successUser@test.abc": {
    status: 200,
    response: { accessToken: "fake-token", user: "successUser@test.abc" },
  },
  "errorUser@test.abc": {
    status: 403,
    response: {
      message: "Error on login",
    },
  },
};

export const registerMockScenarios: RegisterMockScenarios = {
  "reg-succ@test.test": {
    status: 200,
    response: {
      message: "Register Success",
      user: { email: "reg-succ@test.test" },
    },
  },
  "reg-err@test.test": {
    status: 500,
    response: {
      message: "Error on register",
    },
  },
};

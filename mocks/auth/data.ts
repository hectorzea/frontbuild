import { LoginMockScenarios } from "./types";

export const loginMockScenarios: LoginMockScenarios = {
  "successUser@test.abc": {
    status: 200,
    response: { acessToken: "fake-token", user: "successUser@test.abc" },
  },
  "errorUser@test.abc": {
    status: 403,
    response: {
      message: "Error on parsing job info",
    },
  },
};

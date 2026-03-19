import { HearthstoneMatchCreatedResponse } from "../handlers/hearthstoneApiHandlers";

export type CardMatchMockScenarios = Record<string, MockScenario>;

type MockScenario = SuccessResponse | ErrorResponse;

type SuccessResponse = {
  status: 200;
  response: HearthstoneMatchCreatedResponse;
};
type ErrorResponse = {
  status: 500;
  response: {
    message: string;
  };
};

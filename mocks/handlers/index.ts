import { taskHandlers } from "./taskHandlers";
import { jobOfferAiHandler } from "./jobOfferAiHandler";
import { hearthstoneApiHandlers } from "./hearthstoneApiHandlers";
import { authHandlers } from "./authHandlers";

export const handlers = [
  ...authHandlers,
  ...jobOfferAiHandler,
  ...taskHandlers,
  ...hearthstoneApiHandlers,
];

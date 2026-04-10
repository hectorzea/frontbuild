import { taskHandlers } from "./taskHandlers";
import { jobCheckHandlers } from "./jobCheckHandlers";
import { hearthstoneApiHandlers } from "./hearthstoneApiHandlers";
import { authHandlers } from "./authHandlers";

export const handlers = [
  ...authHandlers,
  ...jobCheckHandlers,
  ...taskHandlers,
  ...hearthstoneApiHandlers,
];

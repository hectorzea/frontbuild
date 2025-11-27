import { taskHandlers } from "./taskHandlers";
import { jobCheckHandlers } from "./jobCheckHandlers";
import { hearthstoneApiHandlers } from "./hearthstoneApiHandlers";

export const handlers = [
  ...jobCheckHandlers,
  ...taskHandlers,
  ...hearthstoneApiHandlers,
];

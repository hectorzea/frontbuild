import { statusHandlers } from "./statusHandlers";
import { taskHandlers } from "./taskHandlers";
import { labelHandlers } from "./labelHandlers";
import { priorityHandlers } from "./priorityHandlers";
import { jobCheckHandlers } from "./jobCheckHandlers";
import { hearthstoneApiHandlers } from "./hearthstoneApiHandlers";

export const handlers = [
  ...jobCheckHandlers,
  ...taskHandlers,
  ...statusHandlers,
  ...labelHandlers,
  ...priorityHandlers,
  ...hearthstoneApiHandlers,
];

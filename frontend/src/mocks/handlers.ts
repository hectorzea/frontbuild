import { statusHandlers } from './statusHandlers'
import { taskHandlers } from './taskHandlers'
import { labelHandlers } from './labelHandlers'
import { priorityHandlers } from './priorityHandlers'

export const handlers = [
    ...taskHandlers,
    ...statusHandlers,
    ...labelHandlers,
    ...priorityHandlers
]
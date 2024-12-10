import { statusHandlers } from './statusHandlers'
import { taskHandlers } from './taskHandlers'
import { labelHandlers } from './labelHandlers'

export const handlers = [
    ...taskHandlers,
    ...statusHandlers,
    ...labelHandlers
]
import { handlers } from './handlers'

export const setUpMocks = async () => {
    if (typeof window !== 'undefined') {
        const { setupWorker } = require("msw/browser");

        const worker = setupWorker(...handlers);

        await worker.start();
    }
}
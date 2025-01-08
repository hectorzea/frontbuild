import { handlers } from './handlers';

export const setUpMocks = async () => {
    if (typeof window !== 'undefined') {
        const { setupWorker } = await import('msw/browser');
        const worker = setupWorker(...handlers);
        await worker.start({ onUnhandledRequest: 'bypass' });
        return worker;
    }
};
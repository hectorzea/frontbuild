import { handlers } from './handlers';


export const setUpMocks = async () => {
    if (typeof window !== 'undefined') {
        try {
            const { setupWorker } = await import('msw/browser');
            const worker = setupWorker(...handlers);
            await worker.start({ onUnhandledRequest: 'bypass' })
        } catch (error) {
            console.error('MSW: Error setting up or starting worker:', error);
        }
    }
    return { workerExists: false };
};
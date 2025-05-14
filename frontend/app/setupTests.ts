import '@testing-library/jest-dom';
import '@/app/mocks/matchMedia.mock';
import { loadEnvConfig } from '@next/env';

//mocks for client side rendering on i18n URL params for useT() correct behavior
//we also have next-router-mock for testing navigation on the user navigation component
jest.mock('next/navigation', () => ({
    ...jest.requireActual('next-router-mock'),
    useParams: jest.fn(() => ({
        lang: 'en',
    })),
}))

//mock for the server side rendering and use the getT() function for server components
jest.mock('next/headers', () => ({
    headers: jest.fn(() => {
        return {
            get: jest.fn((name) => {
                if (name === 'x-i18next-current-language') {
                    return 'en';
                }
                return null;
            }),
        }
    }),
}));

const projectDir = process.cwd();
loadEnvConfig(projectDir);
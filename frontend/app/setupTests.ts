import '@testing-library/jest-dom';
import '@/app/mocks/matchMedia.mock';
import { loadEnvConfig } from '@next/env';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

//mock headers for i18n-next TODO test different cases
jest.mock('next/headers', () => ({
    headers: jest.fn(() => {
        return {
            get: jest.fn((name) => {
                if (name === 'accept-language') {
                    return 'en';
                }
                return null;
            }),
        }
    }), // Mockea la función headers
}));

const projectDir = process.cwd();
loadEnvConfig(projectDir);
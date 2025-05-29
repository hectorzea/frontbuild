import '@testing-library/jest-dom';
import '@/app/mocks/matchMedia.mock';
import { loadEnvConfig } from '@next/env';
import en  from '@/i18n/messages/en.json';

type ValidNamespace = 'HomePage';
jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))
jest.mock('next-intl', () => {
    return {
        useTranslations: jest.fn().mockImplementation((namespace: ValidNamespace) => {
            return (key: string) => {
                const translations = {
                    en
                };
                const homePageTranslations = translations['en'][namespace]
                return (homePageTranslations && typeof key === 'string' && key in homePageTranslations)
                    ? homePageTranslations[key as keyof typeof homePageTranslations] //assertion
                    : `Missing translation: ${namespace}.${key}`;
            };
        }),
    };
});

const projectDir = process.cwd();
loadEnvConfig(projectDir);
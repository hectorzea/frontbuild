import { render, screen } from '@testing-library/react'
import HomePage from '@/app/[locale]/page'
import en from '@/i18n/messages/en.json';

type ValidNamespace = 'HomePage';

jest.mock('next-intl', () => {
    return {
        useTranslations: jest.fn().mockImplementation((namespace: ValidNamespace) => {
            return (key: string) => {
                const translations = {
                    en
                };
                const homePageTranslations = translations[namespace]
                return (homePageTranslations && typeof key === 'string' && key in homePageTranslations)
                    ? homePageTranslations[key as keyof typeof homePageTranslations] //assertion
                    : `Missing translation: ${namespace}.${key}`;
            };
        }),
    };
});

describe('Page', () => {
    it('renders a heading', () => {
        render(<HomePage />)
        expect(screen.getByText('Some title')).toBeInTheDocument();
        expect(screen.getByText('Some link to profile')).toBeInTheDocument();
    })
})
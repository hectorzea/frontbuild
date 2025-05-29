// // src/test-utils/next-intl-mock.ts
// import en from '@/i18n/messages/en.json';
// import es from '@/i18n/messages/es.json';

// type MockTranslations = {
//     en: typeof en;
//     es: typeof es;
// }

// type ValidLocale = keyof MockTranslations;

// const mockTranslations: MockTranslations = {
//     en,
//     es,
// };

// const createUseTranslationsMock = (locale: ValidLocale) => {
//     return jest.fn().mockImplementation((namespace: string) => {
//         return (key: string) => {
//             return mockTranslations[locale]?.[namespace]?.[key] || `Traducción faltante: ${namespace}.${key}`;
//         };
//     });
// };

// export const useNextIntlTranslations = createUseTranslationsMock;
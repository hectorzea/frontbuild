import "@testing-library/jest-dom";
import "@/app/mocks/matchMedia.mock";
import { loadEnvConfig } from "@next/env";
import en from "@/i18n/messages/en.json";

type ValidNamespace = "HomePage";
jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));
jest.mock("next-intl", () => {
  return {
    useTranslations: jest
      .fn()
      .mockImplementation((namespace: ValidNamespace) => {
        return (key: string) => {
          const translations = {
            en,
          };
          const homePageTranslations = translations["en"][namespace];
          return homePageTranslations &&
            typeof key === "string" &&
            key in homePageTranslations
            ? homePageTranslations[key as keyof typeof homePageTranslations] //assertion
            : `Missing translatio n: ${namespace}.${key}`;
        };
      }),
  };
});
jest.mock("next-intl/server", () => ({
  setRequestLocale: jest.fn((locale: string) => locale),
}));

jest.mock("@/i18n/navigation", () => ({
  useRouter: jest.fn(),
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const projectDir = process.cwd();
loadEnvConfig(projectDir);

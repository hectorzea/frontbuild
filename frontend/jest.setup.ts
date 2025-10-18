import "@testing-library/jest-dom";
import "@/app/mocks/matchMedia.mock";
import { loadEnvConfig } from "@next/env";
import { server } from "@/app/mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

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

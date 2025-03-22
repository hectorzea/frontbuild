import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

const projectDir = process.cwd();
loadEnvConfig(projectDir);
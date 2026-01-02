import { defineConfig, globalIgnores } from 'eslint/config'
import { FlatCompat } from "@eslint/eslintrc";
import nextVitals from 'eslint-config-next/core-web-vitals'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});
 
const eslintConfig = defineConfig([
...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'playwright-report/**',
    'coverage/**',
    'public/mockServiceWorker.js'
  ]),
])
 
export default eslintConfig


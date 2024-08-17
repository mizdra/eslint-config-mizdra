import { FlatCompat } from '@eslint/eslintrc';

const __dirname = new URL('.', import.meta.url).pathname;
export const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname });

export const jsPattern = '**/*.{js,jsx,mjs,cjs}';
export const tsPattern = '**/*.{ts,tsx,cts,mts}';

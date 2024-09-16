import type { Linter } from 'eslint';

interface ESLintPluginMizdra {
  baseConfigs: Linter.FlatConfig[];
  typescriptConfigs: Linter.FlatConfig[];
  reactConfigs: Linter.FlatConfig[];
  nodeConfigs: Linter.FlatConfig[];
  prettierConfig: Linter.FlatConfig;
}
declare const mizdra: ESLintPluginMizdra;
export default mizdra;

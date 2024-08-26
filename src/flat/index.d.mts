import type { Linter } from 'eslint';

interface ESLintPluginMizdra {
  baseConfigs: Linter.FlatConfig[];
  typescriptConfigs: Linter.FlatConfig[];
  reactConfigs: Linter.FlatConfig[];
  nodeConfigs: Linter.FlatConfig[];
  prettierConfig: Linter.FlatConfig;
}
declare const mizdra: ESLintPluginMizdra;
// eslint-disable-next-line import-x/no-default-export
export default mizdra;

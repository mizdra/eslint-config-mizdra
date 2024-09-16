import type { Linter } from 'eslint';

interface ESLintPluginMizdra {
  baseConfigs: Linter.Config[];
  typescriptConfigs: Linter.Config[];
  reactConfigs: Linter.Config[];
  nodeConfigs: Linter.Config[];
  prettierConfig: Linter.Config;
}
declare const mizdra: ESLintPluginMizdra;
export default mizdra;

import type { Linter } from 'eslint';

interface ESLintPluginMizdra {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  baseConfigs: Linter.FlatConfig[];
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  typescriptConfigs: Linter.FlatConfig[];
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  reactConfigs: Linter.FlatConfig[];
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  nodeConfigs: Linter.FlatConfig[];
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  prettierConfig: Linter.FlatConfig;
}
declare const mizdra: ESLintPluginMizdra;
export default mizdra;

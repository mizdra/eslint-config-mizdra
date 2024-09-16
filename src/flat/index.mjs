import { baseConfigs } from './configs/base.mjs';
import { nodeConfigs } from './configs/node.mjs';
import { prettierConfig } from './configs/prettier.mjs';
import { reactConfigs } from './configs/react.mjs';
import { typescriptConfigs } from './configs/typescript.mjs';

const mizdra = {
  baseConfigs,
  typescriptConfigs,
  reactConfigs,
  nodeConfigs,
  prettierConfig,
};

export default mizdra;

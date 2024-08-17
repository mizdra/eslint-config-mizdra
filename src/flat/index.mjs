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

// eslint-disable-next-line import-x/no-default-export
export default mizdra;

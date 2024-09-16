declare module 'eslint-plugin-react' {
  import { Linter } from 'eslint';
  interface ReactPlugin {
    configs: {
      flat: {
        'recommended': Linter.Config;
        'all': Linter.Config;
        'jsx-runtime': Linter.Config;
      };
    };
  }
  const plugin: ReactPlugin;
  export default plugin;
}

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
  // eslint-disable-next-line import-x/no-default-export
  export default plugin;
}

declare module 'eslint-plugin-react' {
  import { ESLint } from 'eslint';
  interface ReactPlugin {
    configs: {
      flat: {
        'recommended': ESLint.Linter.Config;
        'all': ESLint.Linter.Config;
        'jsx-runtime': ESLint.Linter.Config;
      };
    };
  }
  const plugn: ReactPlugin;
  export default plugn;
}

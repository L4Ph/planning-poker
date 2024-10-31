import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig({
  source: {
    define: publicVars,
  },
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
});

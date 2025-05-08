import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  nodeResolve: true,
  appIndex: 'src/index.html',
  plugins: [esbuildPlugin({
    ts: true,
    target: 'auto',
    tsconfig: './tsconfig.json'
  })],
  watch: true,
  open: true, // Opens the browser automatically
  rootDir: './', // Serve from the project root
}; 
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'es2022',
  platform: 'node',
  format: ['esm'],
  outDir: 'dist',
  clean: true,
  minify: true,
  tsconfig: 'tsconfig.json',
});

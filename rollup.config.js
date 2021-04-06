import babel from '@rollup/plugin-babel';

import pkg from './package.json'

export default {
  input: 'src/Index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'default'
    }
  ],
  plugins: [
    babel({
      presets: ["@babel/preset-react"],
    }),
  ],
  external: ['react', 'react-dom']
}
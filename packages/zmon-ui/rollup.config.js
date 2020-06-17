import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default  [{
  input: 'lib/index.js',
  output: [
    {
      file: pkg.main,
      name: '$zmon',
      format: 'umd'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    babel(),
    postcss({
      plugins: [
        autoprefixer()
      ]
    })
  ],
}];

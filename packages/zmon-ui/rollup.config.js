import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
// import tslint from 'rollup-plugin-tslint';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default  [{
  input: 'src/index.ts',
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
      extract: false,
      plugins: [
        autoprefixer()
      ]
    }),
    typescript({
      include: [
        // Project files
        './**/*.ts+(|x)',
        // Files from outside of the project
        '../shared/**/*.ts+(|x)'
      ]
    }),
    // tslint() // TODO
  ],
}];

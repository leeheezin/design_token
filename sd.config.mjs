import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'tokens-studio',
      buildPath: 'styles/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/module-flat',
        },
      ],
    },
  },
};
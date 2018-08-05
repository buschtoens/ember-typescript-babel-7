'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
      extensions: ['js', 'ts']
    },
    babel: {
      plugins: [
        '@babel/transform-typescript',
        [
          '@babel/plugin-proposal-decorators',
          { legacy: true, decoratorsBeforeExport: true }
        ],
        [
          '@babel/plugin-proposal-class-properties',
          { loose: true }
        ],
        '@babel/proposal-object-rest-spread'
      ]
    }
  });

  return app.toTree();
};

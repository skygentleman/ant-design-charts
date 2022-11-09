const { BaseJestConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
    '@antv/xflow': '<rootDir>/node_modules/@antv/xflow/dist/index.umd.js',
  },
};

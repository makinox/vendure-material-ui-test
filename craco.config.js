const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
};

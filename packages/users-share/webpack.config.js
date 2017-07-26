const webpack = require('webpack');
const path = require('path');

module.exports = function (env) {
  const out =  require(`./scripts/webpack.${env}.js`);
  // console.log('xxxxx:', out);
  return out;
};

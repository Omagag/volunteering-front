const common = require('./webpack.common.js');
const process = require( 'process' );
const argv = require('minimist')(process.argv.slice(2));

const dev = require('./webpack.dev.js');
const pro = require('./webpack.prod.js');

const merge = require('webpack-merge');

module.exports = env => {

  if(env.dev || env.DEV){
    console.log('entro por dev');
    return merge(common, dev);
  }else{
    return merge(common, pro);    
  }
}
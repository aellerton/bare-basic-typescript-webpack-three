var webpack = require('webpack');
var failPlugin = require('webpack-fail-plugin');

module.exports = {
  // Note: can put three in the build list here but it slows iterations down a lot.
  // Should set up a dev vs production mode for this.
  //entry: ["./node_modules/three/build/three.js", "./src/global.ts", "./src/app.ts"],
  entry: ["./src/global.ts", "./src/app.ts"],
  output: {
    filename: "dist/bundle.js"
  },

  plugins: [
    // The uglify plugin works but during development is annoying.
    // TODO: make a development mode that doesn't minify and a production mode that does.
    //new webpack.optimize.UglifyJsPlugin(),

    // This stops webpack from proceeding if something fails with a non-zero exit.
    failPlugin
  ],

  resolve: {
    //extensions: ['', '.js', '.es6']
    //extensions: ['', '.ts']
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
     { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },

  devServer: {
    contentBase: "./dist"
  }
}


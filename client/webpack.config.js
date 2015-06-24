/**
 * Created by wallace on 2015-06-24.
 */

module.exports = {
  entry: "./app.js",
    output:{
        path: "../public/build",
        filename: "bundle.js"
    },
   module: {
       loaders: [
           {test: /\.js$/, loader: 'jsx-loader?harmony'}
       ]
   }
};

m/**
 * Created by wallace on 2015-06-24.
 */

module.exports = {
  entry: "./client/app.js",
    output:{
        path: "./client/public/build",
        filename: "bundle.js"
    },
   module: {
       loaders: [
           {test: /\.js$/, loader: 'jsx-loader?harmony'}
       ],
   },
};

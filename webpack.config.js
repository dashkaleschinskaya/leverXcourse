
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path= require('path')
const WebpackMd5Hash = require('webpack-md5-hash');
const miniCss = require('mini-css-extract-plugin');


module.exports = {
    mode:'development',
    entry: __dirname + "/public/js/index.js",
    output: {
        path: __dirname+"/dist",
        filename: 'bundle.js',
        library: "home",
    },
    devtool:"source-map",
    module: {
       rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: "babel-loader"
               },
           },
            {
                test: /\.html/,
                loader: 'raw-loader'
            },
            {
                test: /\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',

                ]
            }
        ]
    },
    plugins: [
         // new CleanWebpackPlugin({
         //     cleanAfterEveryBuildPatterns: ['dist']
         // }),
        new miniCss({
            filename: 'style.css',
        }),
        // new WebpackMd5Hash()
    ],
    // devServer: {
    //     stats: 'errors-only',
    //     port:3000,
    // },
    watch: true
}
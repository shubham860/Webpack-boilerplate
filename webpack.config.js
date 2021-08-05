const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssnanoPlugin = require('cssnano-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); 

module.exports = {
    mode: mode,
    target: target,

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },

    plugins: [
                new CleanWebpackPlugin(),
                new MiniCssExtractPlugin(),
                new CssnanoPlugin({sourceMap: true}),
                new HtmlWebpackPlugin({ template: "./src/index.html"}),
                new ReactRefreshWebpackPlugin()
            ],

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    },
                     "css-loader",
                     "postcss-loader",
                     "sass-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // OT automatcially looks for babel config file like .babelrc or babel.config.js
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                // instead of user --> use.loader we use type inbuilt feature of webpack5
                // type: "asset/resource" // convert image into images
                // type: "asset/inline"  // convert image into js code and inject it into bundle
                type: "asset" // convert image into js and image both automatically whatever type it need
             }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },


    devtool: 'source-map',
    devServer: {
        contentBase: "./dist",
        hot: true
    }
}
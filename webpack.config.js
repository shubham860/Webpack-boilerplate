const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssnanoPlugin = require('cssnano-webpack-plugin')


module.exports = {
    mode: mode,

    plugins: [new MiniCssExtractPlugin(), new CssnanoPlugin({sourceMap: true})],

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,
                     "css-loader",
                     "postcss-loader",
                     "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // OT automatcially looks for babel config file like .babelrc or babel.config.js
                }
            }
        ]
    },



    devtool: 'source-map',
    devServer: {
        contentBase: "./dist",
        hot: true
    }
}
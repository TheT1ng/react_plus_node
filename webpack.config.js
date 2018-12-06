const HtmlWebPackPlugin = require("html-webpack-plugin");
const path= require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true,
        contentBase: './src',
        historyApiFallback: true,
        inline: true
    },
    plugins: [htmlWebpackPlugin]
};
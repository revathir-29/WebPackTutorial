const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    output: {
        filename : "bundle.[contenthash].js",
        path :path.resolve(__dirname, "./dist"),
        publicPath : "./dist/"
    },
    mode : "none",
    module : {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
            test:/\.css$/,
            use:['style-loader','css-loader']
            },
            {
            test:/\.scss$/,
            use:[//'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'sass-loader',
                    options : {
                        implementation: require("sass")

                    }

                }
            ]
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            },
        ]
    },
    plugins: 
    [new TerserPlugin, 
        new MiniCssExtractPlugin({filename: 'style.[contenthash].css'}),
        new CleanWebpackPlugin()
    ]
}
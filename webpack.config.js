const webpack = require('webpack'); 
require('dotenv').config({ path: './.env' })

// plugin import
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


let webpack_config = {
    entry: path.join(__dirname,'/src/index.jsx'),
    output: {
        path: path.join(__dirname, '/src/dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:    {
                        presets: [['@babel/preset-env',{ targets: "defaults", "debug":true, "useBuiltIns":"usage", "corejs":3 }], ['@babel/preset-react',{runtime:"automatic"}]]
                                }
                }
            },
            {
                test: /\.geojson$/,
                type: 'json',
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                  }
                }]
              },
              {                
                test: /\.(s[ac]|c)ss$/i,                
                use: [                  {                    
                  loader: MiniCssExtractPlugin.loader,                                  
                  options: { publicPath: "" },                  
                },                  
                "css-loader",                  
                "postcss-loader",                                                 
                "sass-loader",                                  
                ],              
              },
        ]
    },
    devServer: {
        hot:true,
        port: 3000,
        open:true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ]
}

module.exports = (env, argv) => {
    // create a plugin obj and write --mode and new plugin array with new title
    let HTMLWEBPACK_PLUGIN = new HTMLWebpackPlugin({
        template: path.join(__dirname,'/src/public/index.html'),
        favicon: path.join(__dirname,'/src/assets/for_web/favicon3.png'),
        title:process.env.NODE_ENV,
    });
    webpack_config.plugins = [...webpack_config.plugins,HTMLWEBPACK_PLUGIN]

    // if development this is work
    if (argv.mode === 'development') {
        webpack_config.devServer.port = 3000;
    }

    // if production this is work 
    if (argv.mode === 'production') {
        webpack_config.devServer.port = 5000;
    }
    return webpack_config;
};
let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let merge = require('webpack-merge');

let commonConfig = require('./common');

const mode = 'development';
const config = {
    mode: mode,
    devtool: 'eval-source-map',
    devServer: {
        port: 8080,
        contentBase: __dirname + '../build',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configFile: `./scripts/linterConfigs/development/tslint.json`,
                    emitErrors: true,
                    failOnHint: true
                }
            }
        ]
    },
    plugins: [        
        new CopyWebpackPlugin([
            {
                from: 'config/apiConfigs/api.config.LOCAL.json',
                to: 'config/api.config.json'
            }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};

module.exports = merge(commonConfig(), config);

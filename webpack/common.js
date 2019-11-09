let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

function config () {
    const config = {
        entry: {
            index: path.resolve(__dirname, '../src/index.tsx')
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../build'),
            publicPath: '/'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(ttf|eot|svg|woff|woff2|png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './img/'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                chunks: ['index'],
                // favicon: './public/img/favicon.ico',
                template: './src/index.html',
                filename: 'index.html'
            })            
        ]
    };
    return config;
};

module.exports = config;

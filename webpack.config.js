const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.json');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'index.tsx')
    },
    devtool: 'inline-source-map',
    stats: 'minimal',
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: [/\.m\.css$/, /\.m\.scss$/], //  /\.m\.(s?)css$/ || /\.m\.(css|scss)$/
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { // (!) Need differentiate for builds
                            url: true,
                            sourceMap: true,
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: [/\.css$/, /\.scss$/],
                exclude: [/\.m\.css$/, /\.m\.scss$/, /\.s\.css$/, /\.s\.scss$/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { url: false, sourceMap: true } // (!) Need differentiate for builds
                    },
                    'sass-loader'
                ]
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: './dist',
        port: config.port,
        compress: true,
        client: {
            logging: 'none',
            overlay: true,
            progress: true,
        }
        // hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        })
    ]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.json');

module.exports = {
	mode: 'development',
	entry: {
		app: path.join(__dirname, 'index.tsx')
	},
	devtool: 'eval-source-map',
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
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					context: path.resolve(__dirname, 'assets/'),
					outputPath: 'assets',
					publicPath: '../',
					useRelativePaths: true
				},
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]'
				}
			},
			// {
			// 	test: /\.(png|jpg)$/,
			// 	loader: 'url-loader'
			// },
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath: path.resolve(__dirname, 'dist')
	},
	devServer: {
		static: './dist',
		port: config.port,
		compress: true,
		client: {
			logging: 'none',
			overlay: true,
			progress: true,
		},
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			// 'Content-Type': 'application/json'
		},
		// hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html')
		})
	]
}

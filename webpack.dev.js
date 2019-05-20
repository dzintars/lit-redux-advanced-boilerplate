const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
			// template: path.resolve(__dirname, 'src', 'template.html'),
			filename: './index.html',
		}),
	],
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', // 3. Inject styles into DOM
					'css-loader', // 2. Turns CSS into commonjs
					'sass-loader', // 1. Turns SCSS into CSS
				],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: '/img',
					},
				},
			},
		],
	},
});

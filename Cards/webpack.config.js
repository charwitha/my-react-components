var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: [ 'style-loader', 'css-loader' ]
		},
		{
			test: /\.(?:png|jpg|svg)$/,
			exclude: /node_modules/,
			loader: 'url-loader'
		}
		]
	},
	output: {
		filename: 'build.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
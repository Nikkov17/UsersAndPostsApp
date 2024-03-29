const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, "public/"),
		port: 3000,
		watchContentBase: true,
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
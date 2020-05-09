const path = require('path');

module.exports = {
	entry: {
		main: "./src/App.jsx"
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public/js')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}

			}
		]
	}
}
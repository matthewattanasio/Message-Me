module.exports = {
	module: {
		loaders: [
			{
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a legal name to reference
		      query: {
		        presets: ['es2015', 'react']
		      }
		    }
		],
	},
    entry: {
        app: './app/src/js/app.js'
    },
    output: {
        filename: './[name].js'
    }
    //,
    //watch: true
};

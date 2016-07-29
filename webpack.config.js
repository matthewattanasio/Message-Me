module.exports = {
	module: {
		loaders: [
			{
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a legal name to reference
		      query: {
		        presets: ['es2015', 'react', 'stage-0'],
		        plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties', ],
		      }
		    }
		],
	},
    entry: {
        app: './app/src/js/index.js'
    },
    output: {
        filename: './[name].js'
    }
    //,
    //watch: true
};

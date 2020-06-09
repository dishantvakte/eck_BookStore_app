module.exports={
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    resolve:{
        extensions: ['','.js']          //any file or with .js  ..... no need to mention the extensions 
    },
    devServer:{
        historyApiFallback: true,
        contentBase: './'
    },

    module: {
        loaders: [                  //for conversion from typical react to standard js
            {
                loader:'babel',              //babel loader responsible to translate react js into es2015
                query: {
                    presets : ['react', 'es2015', 'stage-1']       //convert react to es2015... because thats what browsers understand
                },
                test: /\.js?$/,   //standard syntax to understand all js files across all locations 
                exclude: /node_modules/     //exculde node modules from above
            }

        ]
    }
}
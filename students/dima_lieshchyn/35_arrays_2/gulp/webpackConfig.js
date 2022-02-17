const isDev = process.argv.includes('--dev');

const webpackConfig = {
    mode: (isDev ? 'development' : 'production'),
    output: {
        filename: 'script.js'
    },
    watch: false,
    devtool: isDev ? 'source-map' : false,
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', {
                        debug: isDev,
                        corejs: 3,
                        useBuiltIns: "usage"
                    }]]
                }
            }
        }]
    }
};

module.exports = webpackConfig;

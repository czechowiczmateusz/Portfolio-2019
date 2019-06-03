
module.exports = {
    entry: ["whatwg-fetch", "./js/app.jsx"],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        },
            {
                test: /\.(png|jpg|gif|ttf|svg|mp4)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};


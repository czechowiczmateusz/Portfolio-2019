
module.exports = {
    entry: ["whatwg-fetch", "./js/app.jsx"],
    output: {
        filename: "./js/out.js"
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    devtool: 'source-map',
    
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','stage-2', 'react']
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true
                }
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
        ]
    }
};

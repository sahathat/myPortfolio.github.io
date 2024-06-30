module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(pdf)$/,
                    loader: 'file-loader',
                    options: {
                        name: `files/[name].[ext]`
                    }
                }
            ],
        },
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : './'
}
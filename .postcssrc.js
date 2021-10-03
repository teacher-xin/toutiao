module.exports = {
    plugins: {
        // 'autoprefixer': {
        //     browsers: ['android' >= 4.0, 'iOS >= 8']
        // },
        'postcss-pxtorem': {
            rootValue({ file }) {
                console.log('处理的 css 文件', file)
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            //  rootValue: 37.5,
            propList: ['*'],
        },
    },
};
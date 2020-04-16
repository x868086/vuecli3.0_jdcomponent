module.exports = {
  css: {
    requireModuleExtension: false
  },
  chainWebpack: config => {
    // 转换vue文件中，style标签内的css代码 px2rem
    config.module
      .rule('css')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 })
      .end()

    // 转换vue文件中，style标签内cssModule模块中的css代码 px2rem
    config.module
      .rule('css')
      .oneOf('vue-modules')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 })
      .end()

    // 转换css文件中的css代码 px2rem
    config.module
      .rule('css')
      .oneOf('normal')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 })
      .end()

    // 转换css文件中，cssModule模块中的css代码 px2rem
    config.module
      .rule('css')
      .oneOf('normal-modules')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 })
      .end()

    // 转换vue文件中，style标签内的scss代码 px2rem
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 })
      .end()

    // 转换vue文件中，style标签内cssModule模块中的scss代码 px2rem
    config.module
      .rule('scss')
      .oneOf('vue-modules')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 })
      .end()

    // 转换scss文件中的scss代码 px2rem
    config.module
      .rule('scss')
      .oneOf('normal')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 })
      .end()

    // 转换scss文件中，cssModule模块中的scss代码 px2rem
    config.module
      .rule('scss')
      .oneOf('normal-modules')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 })
      .end()
  }
}

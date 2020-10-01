// eslint-disable-next-line @typescript-eslint/no-var-requires
const path=require('path')



module.exports = {
  lintOnSave: false,
  chainWebpack:config=>{
    const dir =path.resolve(__dirname,'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()

    //清除svg中自带的fill属性
    // .use('svgo-loader').loader('svgo-loader')
    // .tap(option=>({...option,plugins:[{removeAttrs:{attr:'fill'}}]})).end()


    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir)
  }
}

<template>
  <div id="app">
    <!-- vue init webpack-simple xxx 创建组件开发模板 -->
    <button class="btn" @click="test">点击测试</button>
  </div>
</template>

<script>
import build from '../dist/build'

export default {
  name: 'app',
  methods: {
    test () {
      build({content: '打包后测试'}) // 打包后测试
      // this.$notice({content: '开发测试'})
    }
  }
  // 1 开发完成组件
  // 2 修改打包配置webpack.config.js
  // 3 打包 npm run build
  // 4 测试打包后的dist
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>

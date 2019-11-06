# v-notice

> 一个vue2.0的提示类函数式调用的组件

## 使用方法

``` bash
# main.js
import notice from './components/notice/notice' // 引入
Vue.prototype.$notice = notice // 挂到vue上

# 调用
方法一：notice({text: '提示语句', time: 1000})
text：提示语句   time: 显示时间，默认是1500，单位ms

方法二：this.$notice({text: '开发测试'})


# 待开发完善，尚未发布npm
```

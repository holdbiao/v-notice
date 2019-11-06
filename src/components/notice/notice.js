/* eslint-disable */
import Vue from 'vue'
import Notice from './Notice.vue'

const NoticeConstructor = Vue.extend(Notice)

const notice = (option = {}) => { // 对外调用的方法
  const Instance = new NoticeConstructor({
    data: { // 传入组件的data
      content: option.text,
      duration: option.time || 2000
    }
  })
  // console.log('Instance:', Instance)
  Instance.vm = Instance.$mount() // 挂载
  // console.log('mounted', Instance.vm.$el)
  Instance.vm.visible = true
  document.body.appendChild(Instance.vm.$el) // 插入到body
}
export default notice

// 直接挂到vue上
// export default {
//   install: (Vue) => {
//     Vue.prototype.$notice = notice
//   }
// }

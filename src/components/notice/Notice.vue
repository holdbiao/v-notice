<template>
  <transition name="fade">
    <div class="biu-notice-cont" v-show="visible">{{content}}</div>
  </transition>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      visible: false,
      content: '',
      duration: 1500
    }
  },
  methods: {
    setTimer () {
      setTimeout(() => {
        this.close()
      }, this.duration)
    },
    close () {
      this.visible = false // 触发消失动画
      setTimeout(() => { // 动画完成后执行
        this.$destroy(true) // 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
        this.$el.parentNode.removeChild(this.$el) // 从dom节点删除
      }, 500)
    }
  },
  mounted () {
    this.setTimer()
  }
}
</script>
<style>
.biu-notice-cont {
  position: fixed;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  padding: 20px;
  color: #fff;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .8);
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}

</style>

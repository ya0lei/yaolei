<script setup lang="ts" name="LunBo">
import { computed } from 'vue'
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const props = defineProps<{
  fatherWidth: number
}>()
const { width } = useWindowSize()
const active = ref(0)
const right = () => {
  active.value++
}
const left = () => {
  active.value--
}
// 计算属性(计算一定距离)
const transform = computed(
  () => (props.fatherWidth / 375) * width.value * active.value
)
</script>

<template>
  <div
    class="father"
    :style="{ width: `${(props.fatherWidth / 375) * width}px` }"
  >
    <!-- 轮播图的主体 -->
    <ul class="banner" :style="{ transform: `translateX(-${transform}px)` }">
      <!-- 轮播图的每一项 -->
      <li style="background-color: red">img1</li>
      <li style="background-color: orange">img2</li>
      <li style="background-color: green">img3</li>
    </ul>

    <!-- 模拟轮播图的左右按钮,定位 -->
    <div class="btn-left" @click="left"></div>
    <div class="btn-right" @click="right"></div>
  </div>
  <div
    class="box"
    :style="{
      width: '200px',
      height: '100px',
      border: '1px solid #000',
      backgroundColor: 'aqua'
    }"
  >
    我是box
  </div>
</template>

<style lang="scss" scoped>
.father {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  overflow: hidden;
  position: relative;
  .btn-left {
    width: 10px;
    height: 10px;
    background-color: blue;
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
  }
  .btn-right {
    width: 10px;
    height: 10px;
    background-color: blue;
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.banner {
  height: 100%;
  display: flex;
  transition: all 1s;
  //   transform: translateX(0px);
  li {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
  }
}
</style>

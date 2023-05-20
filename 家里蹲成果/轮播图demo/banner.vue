<script setup lang="ts" name="Banner">
// 使组件配置的 name 名称生效，需要 script 标签里面有内容(注释占位)
import LunBo from '@/cs/components/lunbo.vue'
</script>

<template>
  <div class="banner-page" >
    <LunBo :fatherWidth="200"></LunBo>
  </div>
</template>

<style lang="scss" scoped>
.banner-page {
  margin: 0 auto;
  width: 150px;
  height: 50px;
  border: 1px solid #000;
}
</style>

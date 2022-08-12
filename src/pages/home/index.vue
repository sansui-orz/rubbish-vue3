<script lang="ts" setup>
import Nav from './component/Nav.vue'

</script>
<template>
  <div class="home-page">
    <Nav></Nav>
  </div>
</template>
<style lang="less" scoped>
@import '@/assets/css/variable.less';

.home-page {
  position: relative;
  min-height: 10vh;
  padding-bottom: @navHeight;
}
</style>
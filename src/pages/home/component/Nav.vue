<script lang="ts" setup>
import { reactive } from 'vue';

const obj = reactive({ count: 1 });
</script>
<template>
  <div class="navs">
    <nav>HOME</nav>
    <nav>STAR</nav>
  </div>
</template>
<style lang="less" scoped>
@import '@/assets/css/variable.less';

.navs {
  position: fixed;
  height: @navHeight;
  display: flex;
  bottom: 0;
  width: 100%;

  &::before {
    position: absolute;
    content: ' ';
    height: 1px;
    width: 100%;
    background: #000;
    top: 0;
    transform: scaleY(0.5);
  }

  // TODO: 效果
  // &::after {
  //   position: absolute;
  //   content: ' ';
  //   width: 60%;
  //   background: #ccc;
  //   height: @navHeight * 2;
  //   left: -10%;
  //   z-index: -1;
  // }
}

nav {
  width: 50%;
  line-height: @navHeight;
  text-align: center;
  color: #333;
  font-size: 18px;
}
</style>
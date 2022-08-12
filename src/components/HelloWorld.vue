<script setup lang="ts">
import { reactive, ref } from 'vue'

defineProps({
  msg: String
})
// const user = ref({})
const user = reactive<{name?: string}>({})
const clickHandle = () => {
  user.name = '李四'
}
</script>

<template>
  <div>name: {{user.name}}</div>
  <button @click="clickHandle">点击</button>
</template>

<style lang="less" scoped>
</style>

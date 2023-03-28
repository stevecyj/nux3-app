<template>
  <div></div>
</template>

<script setup lang="ts">
// 取得組件實例
const ins = getCurrentInstance();
onMounted(() => {
  ins?.proxy?.$alert('component mounted!');
});
</script>

<style scoped></style>

<template>
  <div>
    <h1>Mid Page</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // middleware(to, from) {
  //   console.log('匿名中間件，當前頁面執行，不可複用！');
  // },

  middleware: ['amid', 'bmid'],
});
</script>

<style scoped></style>

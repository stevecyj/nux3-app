<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
// 請求資料 $fetch
interface Data {
  message: string;
}
const { message } = await $fetch<Data>('/api/hello');
</script>

<template>
  <div class="p-4">
    Counter: {{ counter }}
    <div class="mt-2">
      <NButton @click="counter++">+</NButton>
      <NButton @click="counter--">-</NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>

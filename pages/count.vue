<template>
  <div class="p-4">
    Counter: {{ counter }}
    <div class="mt-2">
      <!--      <van-button type="primary" @click="counter++">+</van-button>-->
      <!--      <van-button type="danger" @click="counter&#45;&#45;">-</van-button>-->
    </div>
    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>

<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>

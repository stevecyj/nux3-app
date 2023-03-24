<template>
  <div class="p-4">
    Counter: {{ counter }} CounterRef:{{ counterRef }}
    <div class="mt-2">
      <van-button type="primary" @click="counter++">+</van-button>
      <van-button type="danger" @click="counter--">-</van-button>
    </div>
    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>

<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000));
const counterRef = ref(Math.round(Math.random() * 1000));
</script>

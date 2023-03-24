<template>
  <div class="p-4">
    Counter1: {{ counter1 }} Counter2: {{ counter2 }}
    <div class="mt-2">
      <van-button
        @click="
          counter1++;
          counter2++;
        "
        >+
      </van-button>
      <van-button
        @click="
          counter1--;
          counter2--;
        "
        >-
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const counter1 = useCounter();
const counter2 = ref(1);
</script>

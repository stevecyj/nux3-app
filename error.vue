<template>
  <div class="pt-10">
    <h1 class="text-2xl text-center mb-2">
      出了点错 - {{ props.error?.statusCode }} - {{ props.error?.message }}
    </h1>
    <NEmpty description="你什么也找不到">
      <template #extra>
        <van-button @click="retry">重试</van-button>
        <van-button @click="handleError">回到首页</van-button>
      </template>
    </NEmpty>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});
console.log(props.error);
const router = useRouter();
const retry = () => (window.location.href = props.error!.url);
const handleError = () => clearError({ redirect: '/' });
</script>

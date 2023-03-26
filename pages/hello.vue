<template>
  <div>
    {{ message }}
    <van-button @click="router.push('/')">to Home</van-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

// 請求資料 $fetch
interface Data {
  message: string;
}

const { message } = await $fetch<Data>('/api/hello');

const id = ref(123.1); // 要发送的整数ID
const fetch = () => {
  try {
    const response = useFetch(`/api/error-handle/${id.value}`, {
      method: 'GET',
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
fetch();
</script>

<template>
  <div class="flex items-center flex-col gap-2 py-4">
    <!--  <h1>Index Page</h1>-->
    <!--  <BaseFooButton></BaseFooButton>-->
    <!--  <div>-->
    <!--    <NButton>hello</NButton>-->
    <!--    <hr>-->
    <!--    <h3>vant</h3>-->
    <!--    <van-button type="primary">主要按钮</van-button>-->
    <!--    <van-button type="success">成功按钮</van-button>-->
    <!--    <van-button type="default">默认按钮</van-button>-->
    <!--    <van-button type="warning">警告按钮</van-button>-->
    <!--    <van-button type="danger">危险按钮</van-button>-->
    <!--  </div>-->
    <!--  <NuxtLink to="/detail/1">Detail page 1</NuxtLink>-->
    <!--    錯誤處理-->
    <div v-if="error">{{ error.message }}</div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <NuxtLink class="text-lg" :to="`/detail/${post.id}`"
          >{{ post.title }}
        </NuxtLink>
        <p class="text-slate-500">发布于: {{ post.date }}</p>
      </div>
      <!--      pagination button-->
      <div>{{ page }}</div>
      <van-button @click="prev">上一頁</van-button>
      <van-button @click="next">下一頁</van-button>
      <van-button @click="router.push('/hello')">to hello</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
// const posts = await $fetch('/api/posts');
const page = ref(1);
const {
  data: posts,
  pending,
  error,
  refresh,
} = await useFetch(() => `/api/posts?page=${page.value}&size=1`);

function prev() {
  page.value--;
  refresh();
}

function next() {
  page.value++;
  refresh();
}
</script>

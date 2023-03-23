<template>
  <NuxtLink to="/">Index page </NuxtLink>
  <!--  <p>{{ $route.params.id }}</p>-->
  <div class="p-5">
    <div v-if="pending">Loading...</div>
    <div v-else>
      <h1>{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 取得文章 id
const router = useRoute();
// const { title, content } = await $fetch(`/api/detail/${route.params.id}`);

const fetchPost = () => {
  return $fetch(`/api/detail/${router.params.id}`);
};

const { data, pending } = await useAsyncData(fetchPost);
</script>

<style lang="scss" scoped>
p {
  /* color: $linkColor; */
  color: var(--link-color);
}
</style>

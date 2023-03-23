<template>
  <NuxtLink to="/">Index page </NuxtLink>
<!--  <p>{{ $route.params.id }}</p>-->
  <h1>{{title}}</h1>
  <div v-html="content"></div>
</template>

<script setup lang="ts">
// 取得文章 id
const route = useRoute();
const {title, content} = await $fetch(`/api/detail/${route.params.id}` );
</script>

<style lang="scss" scoped>
p {
  /* color: $linkColor; */
  color: var(--link-color)
}
</style>

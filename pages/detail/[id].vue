<template>
  <NuxtLink to="/">Index page </NuxtLink>
  <p>{{ $route.params.id }}</p>
</template>
<style lang="scss" scoped>
p {
  /* color: $linkColor; */
  color: var(--link-color)
}
</style>

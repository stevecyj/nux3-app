<template>
  <div>
    <NuxtLayout>
      <!--      <NMessageProvider>-->
      <NuxtPage></NuxtPage>
      <!--      </NMessageProvider>-->
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - my space` : 'my space';
  },
});
</script>

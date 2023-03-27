<template>
  <div :class="{ dark: appConfig.theme.dark }">
    <p
      class="bg-blue-300 dark:bg-slate-600 dark:text-slate-200"
      @click="appConfig.title = 'hello'"
    >
      appConfig: {{ appConfig.title }}
    </p>

    <label>
      dark mode:
      <NSwitch id="toggle" v-model:value="appConfig.theme.dark" />
    </label>
  </div>
</template>

<script setup lang="ts">
//取得 appConfig
const appConfig = useAppConfig();

// 取得環境變量
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);

if (process.server) {
  console.log('API secret:', runtimeConfig.apiSecret);
}
</script>

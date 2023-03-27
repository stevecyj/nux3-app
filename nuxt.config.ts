// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 只能用於服務端的 key
    apiSecret: '',
    public: {
      apiBase: '',
    },
  },
  ssr: true,
  // nitro: {},
  // builder:'webpack', // 預設vite, 需要安裝: @nuxt/webpack-builder
  // postcss: {},
  // vite: {},
  // webpack: {},
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    '@vant/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
  ],
});

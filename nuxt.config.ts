// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'my space',
      meta: [
        { name: 'description', content: '專注前端技術分享' },
        { name: 'keywords', content: 'nuxt,vue,ts' },
      ],
    },
  },
  runtimeConfig: {
    // 只能用於服務端的 key
    apiSecret: '',
    public: {
      apiBase: '',
    },
  },
  ssr: false,
  imports: { dirs: ['store'] },
  nitro: {
    // preset: 'vercel',
  },
  // builder:'webpack', // 預設vite, 需要安裝: @nuxt/webpack-builder
  // postcss: {},
  // vite: {},
  // webpack: {},
  modules: [
    '@nuxtjs/tailwindcss', // 單純引入，不配置
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
    // [
    //   '@nuxtjs/color-mode',
    //   {
    //     preference: 'dark',
    //   },
    // ],
    '@nuxtjs/color-mode', // 建議用這個方法
  ],
  colorMode: {
    // 獨立配置項
    preference: 'dark',
  },
});

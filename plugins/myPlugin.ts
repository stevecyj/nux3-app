import dayjs from 'dayjs';

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp);

  //   使用生命週期 hook
  nuxtApp.hook('app:error', (err) => {
    //   do
  });

  //   訪問 vue instance，新增自訂內容
  nuxtApp.vueApp.config.globalProperties.$xxx = () => {
    //   do
  };

  //   全局注入屬性、方法，provide，更直接
  nuxtApp.provide('format', (date?: Date, template?: string) => {
    return dayjs(date).format(template);
  });
});

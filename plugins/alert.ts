export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    vueApp.config.globalProperties.$alert = (msg: string) => {
      // navi ui
      // const message = useMessage();
      // message.warning(msg);

      // vant ui
      showNotify({ type: 'warning', message: msg });
    };
  });
});

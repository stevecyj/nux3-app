export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.config.errorHandler = () => {
    console.log('vue error handler');
  };

  nuxt.hook('vue:error', () => {
    console.log('vue:error');
  });
});

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.config.errorHandler = (err) => {
    console.log(err);
    console.log('vue error handler');
  };

  nuxt.hook('vue:error', () => {
    console.log('vue:error');
  });
});

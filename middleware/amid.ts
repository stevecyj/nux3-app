export default defineNuxtRouteMiddleware((to, from) => {
  console.log('具名中間件a，影響指定頁面：' + to.path);
});

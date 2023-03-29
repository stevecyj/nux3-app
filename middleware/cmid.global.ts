export default defineNuxtRouteMiddleware((to, from) => {
  console.log('全局中間件c影響指定頁面');
});

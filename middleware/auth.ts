export default defineNuxtRouteMiddleware((to, from) => {
  //   判斷用戶是否登入
  const store = useUser();
  if (!store.isLogin) {
    return navigateTo('/login?callback=' + to.path);
  }
});

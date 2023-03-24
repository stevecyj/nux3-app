<template>
  <div>
    <van-button @click="onLogin">登录</van-button>
  </div>
</template>

<script setup lang="ts">
const storeUser = useUser();
const { isLogin } = storeToRefs(storeUser);
const router = useRouter();
const route = useRoute();
const onLogin = () => {
  isLogin.value = true;
  const callback = route.query.callback?.toString() || '';
  router.push(callback);
};
</script>

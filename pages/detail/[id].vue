<template>
  <NuxtLink to="/">Index page</NuxtLink>
  <!--  <p>{{ $route.params.id }}</p>-->
  <div class="p-5">
    <div v-if="error">{{ errorMsg }}</div>
    <div v-else-if="pending">Loading...</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
      <!--      評論區-->
      <div class="py-2">
        <van-field
          v-model="value"
          type="textarea"
          autosize
          placeholder="輸入評論"
        ></van-field>
        <van-button @click="onSubmit">送出</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtError } from '#app';
// 取得文章 id

const router = useRouter();
const route = useRoute();

useHead({
  title: route.params.id as string,
});
//  定義 middleware,路由守衛
definePageMeta({
  middleware: 'auth',
});

// const { title, content } = await $fetch(`/api/detail/${route.params.id}`);
const value = useState('comment', () => '');
const storeUser = useUser();
const { isLogin } = storeToRefs(storeUser);
const onSubmit = () => {
  if (isLogin.value) {
    //   提交留言
    value.value = '';
  } else {
    //   要求登錄
    router.push('/login?callback=' + route.path);
  }
};
const fetchPost = () => {
  return $fetch(`/api/detail/${route.params.id}`);
};

const { data, pending, error } = await useAsyncData(fetchPost);
const errorMsg = computed(() => error.value as NuxtError);

watchEffect(() => {
  if (error.value) {
    // 如果有 error 物件，展示錯誤頁
    console.log(errorMsg);
    showError('文件不存在');
  }
});
</script>

<style lang="scss" scoped>
p {
  /* color: $linkColor; */
  color: var(--link-color);
}
</style>

<template>
  <NuxtLink to="/">Index page</NuxtLink>
  <!--  <p>{{ $route.params.id }}</p>-->
  <div class="p-5">
    <div v-if="pending">Loading...</div>
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
// 取得文章 id

const router = useRouter();
const route = useRoute();
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

const { data, pending } = await useAsyncData(fetchPost);
</script>

<style lang="scss" scoped>
p {
  /* color: $linkColor; */
  color: var(--link-color);
}
</style>

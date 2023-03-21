<template>
  <div>
    <nav>
      導航欄
      <img class="avatar" src="/images/image_1.png" alt="" />
      <img class="avatar" src="~assets/images/image_2.png" alt="" />
    </nav>
    <slot></slot>
  </div>
</template>
<style scoped>
.avatar {
  width: 50px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 50%;
}
</style>

<script>
export default {
  name: "NewsCard",
  props: {
    image: String,
    title: String
  }
};
</script>

<template>
  <div class="card">
    <img class="rounded-4" :src="image" alt="">
    <h5 class="fw-bold text-center p-4">
      {{ title }}
    </h5>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  height: 100%;
  border: unset;
  cursor: pointer;
  img {
    filter: brightness(0.5);
  }
  h5 {
    position: absolute;
    bottom: 0;
    z-index: 1;
    color: white;
  }
}
</style>

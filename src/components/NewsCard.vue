<script>
export default {
  name: "NewsCard",
  props: {
    title: String
  }
};
</script>

<template>
  <div class="card">
    <h5 class="fw-bold text-center p-4">
      {{ title }}
    </h5>
    <div class="card-body rounded-4"></div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  height: 100%;
  border: unset;
  h5 {
    position: absolute;
    bottom: 0;
    z-index: 1;
    color: white;
  }
  .card-body {
    background-image: url(../assets/img/news-1.jpg);
    background-size: cover;
    filter: brightness(0.5);
  }
}
</style>

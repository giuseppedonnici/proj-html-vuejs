<script>
export default {
  name: "ServiceCard",
  props: {
    image: String,
    title: String,
    description: String
  }
};
</script>

<template>
  <div class="card p-5">
    <img :src="image" alt="Image of Service" />
    <h5 class="card-title fw-bold mt-3 mb-3">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
    .card {
        height: 100%;
        border: unset;
    }
</style>

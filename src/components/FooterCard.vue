<script>
export default {
  name: "FooterCard",
  props: {
    cardInfo: Object,
  },
};
</script>

<template>
  <div class="card">
    <ul>
      <li class="mb-3">
        <h5 class="text-white">{{ cardInfo.title }}</h5>
      </li>
      <li class="mb-2" v-for="listItem in cardInfo.items[0]">
        <a href="#">
          <i class="fa-solid fa-chevron-right"></i>
          <span>{{ listItem }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.card {
  --bs-card-bg: #ffffff12;
  padding: 2rem 1rem;
  height: 100%;
  h5 {
    cursor: pointer;
  }
  i {
    margin-right: 1rem;
  }
}
</style>

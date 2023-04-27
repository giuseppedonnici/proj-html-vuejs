<script>
export default {
  name: "NewsSections",
};
</script>

<template>
  <section id="blog">
    <div class="ms-container">
      <div class="news-description">
        <h6>our editorial content</h6>
        <h2>Latest <span class="special-span">News</span></h2>
        <p>
          Every week we publish content about what is best in the business world.
        </p>
        <button class="btn primary-btn">see all</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.news-description {
    position: relative;
    .special-span {
        color: $primary-color;
        background-color: $secondary-color;
    }
    button {
        position: absolute;
        bottom: 0;
        right: 0;
    }
}

</style>

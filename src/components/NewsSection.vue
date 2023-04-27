<script>
import NewsCard from './NewsCard.vue';

export default {
  name: "NewsSections",
  components: {
    NewsCard
  }

}
</script>

<template>
  <section id="blog">
    <div class="ms-container">

      <div class="news-description mb-5">
        <h6>our editorial content</h6>
        <h2>Latest <span class="special-span">News</span></h2>
        <p>
          Every week we publish content about what is best in the business world.
        </p>
        <button class="btn primary-btn">see all</button>
      </div>

      <div class="row row-cols-lg-3 gx-3">
          <div class="col">
            <NewsCard 
            title="Increasing creativity is possible for everyone"
            />
          </div>
          <div class="col">
            <NewsCard 
            title="Because market research is part of the business plan"
            />
          </div>
          <div class="col">
            <NewsCard 
            title="Working from home is now a trend"
            />
          </div>
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

.col {
    aspect-ratio: 1 / 1;
}

</style>

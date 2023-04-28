<script>
import NewsCard from './NewsCard.vue';
import {store} from '../store';
import { getImagePath } from '../utils';

export default {
  name: "NewsSections",
  components: {
    NewsCard
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getImagePath
  }
}
</script>

<template>
  <section id="blog">
    <div class="ms-container">
      <!-- TOP -->
      <div class="news-description mb-5">
        <h6>our editorial content</h6>
        <h2>Latest <span class="special-span">News</span></h2>
        <p>
          Every week we publish content about what is best in the business world.
        </p>
        <button class="btn primary-btn">see all</button>
      </div>
      <!-- /TOP -->

      <!-- DOWN -->
      <div class="row row-cols-lg-3 gx-3">
          <div class="col" 
            v-for="(singleNews, index) in store.news" 
            :key="index"
            v-show="index < 3"
            >
            <NewsCard 
            :title="singleNews.title"
            :image="getImagePath(singleNews.img)"
            />
          </div>
      </div>
      <!-- /DOWN -->
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

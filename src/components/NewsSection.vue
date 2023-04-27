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
            :title="store.news[0].title"
            :image="getImagePath(store.news[0].img)"
            />
          </div>
          <div class="col">
            <NewsCard 
            :title="store.news[1].title"
            :image="getImagePath(store.news[1].img)"
            />
          </div>
          <div class="col">
            <NewsCard 
            :title="store.news[2].title"
            :image="getImagePath(store.news[2].img)"
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

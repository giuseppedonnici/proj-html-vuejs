<script>
import ServiceCard from "./ServiceCard.vue";
import { getImagePath } from "../utils";
import { store } from "../store";

export default {
  name: "ServiceSection",
  components: {
    ServiceCard,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getImagePath,
  },
};
</script>

<template>
  <section id="services">
    <div class="ms-container">
      <div class="container-fluid">
        <div class="row row-cols-lg-3 gx-3">
          <div class="col">
            <h6>our business areas</h6>
            <h2>Logistics Services</h2>
            <p class="w-75">
              We are leaders in providing logistics services with a set of
              cutting edge technologies and a team of experienced and renowned
              professionals.
            </p>
            <span class="badge p-2 me-3 mb-3" 
            v-for="(badge, index) in store.badgesService" 
            :key="index"
            >
            {{ badge }}</span>
            <button class="primary-btn btn d-block">read more</button>
          </div>
          <div class="col" v-for="(service, index) in store.servicesCards" :key="index">
            <ServiceCard
              :image="getImagePath(service.img)"
              :title="service.title"
              :description="service.description"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="dots-pattern mt-5"></div>
  </section>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

#services {
    position: relative;
  background-color: $section-bg-color;
  .col {
    h2 {
      width: 60%;
    }
    span {
      color: $primary-color;
      background-color: $secondary-color;
      font-weight: 300;
    }
  }
}
</style>

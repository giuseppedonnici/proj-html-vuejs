<script>
import AppLogo from "./AppLogo.vue";
import FooterCard from "./FooterCard.vue";
import { store } from "../store";

export default {
  name: "AppFooter",
  components: {
    AppLogo,
    FooterCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer>
    <!-- TOP -->
    <div class="footer-top">
      <div class="ms-container">
        <div class="row row-cols-md-4">
          <div class="col">
            <AppLogo />
            <p>A Functional HTML Template for Corporate & Business</p>
            <ul>
              <li>
                <a href="#">
                  <i class="fa-solid fa-phone" style="color: #9fa3ac"></i>
                </a>
                <span>
                  <a href="#">+1 (305) 1234-5678</a>
                </span>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-envelope" style="color: #9fa3ac"></i>
                </a>
                <span>
                  <a href="#">hello@example.com</a>
                </span>
              </li>
              <li>
                <a href="#">
                  <i
                    class="fa-solid fa-location-dot"
                    style="color: #9fa3ac"
                  ></i>
                </a>
                <span>
                  <a href="#">Main Avenue, 987</a>
                </span>
              </li>
            </ul>
            <a href="#getintouch" class="btn secondary-btn"> get in touch </a>
          </div>
          <div class="col" v-for="card in store.footerCards" :key="card.id">
            <FooterCard :cardInfo="card" />
          </div>
        </div>
      </div>
    </div>
    <!-- /TOP -->

    <!-- DOWN -->
    <div class="footer-down pt-4">
      <div class="ms-container d-flex justify-content-between">
        <p>Enjoy the low price. We are tracking any intention of piracy.</p>
        <p>
          © 2020 <span class="text-uppercase">nexgen</span> is Proudly Powered by <span class="special">Codings</span>.
        </p>
      </div>
    </div>
    <!-- /DOWN -->
  </footer>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

footer {
  .footer-top {
    color: $gray-text;
    background-image: url(../assets/img/bg-10.jpg);
    background-size: cover;
    background-position: center;
    padding: 6rem 0;
    li {
      padding-bottom: 1rem;
      & > a {
        margin-right: 1rem;
      }
    }
  }
  .footer-down {
    background-color: $footer-down-color;
    color: $gray-text;
    p {
      margin-bottom: unset;
    }
    .special {
      color: $primary-color;
    }
  }
}
</style>

<script>
import AppLogo from "./AppLogo.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<template>
  <header>
    <!-- CONTACT NAVBAR -->
    <div class="contact-navbar p-1">
      <div class="ms-container d-flex justify-content-between pt-2 pb-2">
        <p>
          <i class="fa-solid fa-clock pe-2"></i>Open Hours: Mon - Sat -
          <time>9:00</time> - <time>18:00</time>
        </p>
        <ul class="d-flex">
          <li><i class="fa-solid fa-phone pe-2"></i>+1 (305) 1234-5678</li>
          <li><i class="fa-solid fa-envelope pe-2"></i>hello@example.com</li>
          <li><i class="fa-brands fa-facebook-f"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li><i class="fa-brands fa-linkedin-in"></i></li>
        </ul>
      </div>
    </div>
    <!-- /CONTACT NAVBAR -->

    <!-- MAIN NAVBAR -->
    <div class="ms-container">
      <div
        class="main-navbar d-flex justify-content-between align-items-center text-uppercase"
        :class="{change_color: scrollPosition > 50}, {'pt-3': scrollPosition < 50}"
      >
        <AppLogo />
        <ul class="d-flex align-items-center">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#partners">partners</a>
          </li>
          <li>
            <a href="#blog">blog</a>
          </li>
          <li>
            <a href="#getintouch" class="primary-btn btn">get in touch</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- MAIN NAVBAR -->

    <!-- JUMBOTRON -->
    <div class="jumbotron">
      <div class="jumbo-overlay">
        <div
          class="ms-container h-100 d-flex justify-content-end align-items-center"
        >
          <div class="jumbo-title me-5">
            <h1 class="fw-bold">Logistics that goes further.</h1>
            <p>
              For 20 years working with the most innovative in the field of
              transport.
            </p>
            <a href="#getintouch" class="primary-btn btn">get in touch</a>
            <button class="secondary-btn btn ms-3">read more</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /JUMBOTRON -->
  </header>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/general.scss";

header {
  color: white;
  ul,
  p {
    margin: unset;
    li {
      margin-left: 2rem;
      cursor: pointer;
    }
  }
  .contact-navbar {
    height: $contact-navbar-height;
    background-color: $contact-navbar-color;
  }
  .change_color {
    background-color: $contact-navbar-color;
    top: 0;
    padding-top: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
   }
  .main-navbar {
    width: 70%;
    margin: 0 auto;
    position: fixed;
    z-index: 999;
  }
  .jumbotron {
    position: relative;
    z-index: 0;
    height: calc(100vh - $contact-navbar-height);
    background-image: url(../assets/img/jumbo.jpg);
    background-size: cover;

    .jumbo-overlay {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      height: 100%;
      width: 100%;
      background-color: rgba($color: #000000, $alpha: 0.5);
      .jumbo-title {
        width: 30%;
        padding: 2rem;
        h1 {
          position: relative;
          font-size: 4rem;
          &::before {
            content: "";
            display: inline-block;
            position: absolute;
            top: 38px;
            left: 4px;
            z-index: -1;
            width: 305px;
            height: 30px;
            border-radius: 5px;
            background-color: rgba($color: $primary-color, $alpha: 0.5);
          }
        }
        p {
          margin: 2rem 0;
        }
      }
    }
  }
}
</style>

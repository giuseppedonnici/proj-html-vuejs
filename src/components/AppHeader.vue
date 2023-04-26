<script>
import AppLogo from "./AppLogo.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo
  }
};
</script>

<template>
  <header>
    <!-- CONTACT NAVBAR -->
    <div class="contact-navbar p-1">
      <div class="ms-container d-flex justify-content-between pt-2 pb-2">
        <p><i class="fa-solid fa-clock pe-2"></i>Open Hours: Mon - Sat - <time>9:00</time> - <time>18:00</time></p>
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
        <div class="main-navbar d-flex justify-content-between align-items-center text-uppercase pt-4">
            <AppLogo />
            <ul class="d-flex ">
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">services</a>
                </li>
                <li>
                    <a href="#">skills</a>
                </li>
                <li>
                    <a href="#">partners</a>
                </li>
                <li>
                    <a href="#">blog</a>
                </li>
                <li>
                    <button class="primary-btn btn">get in touch</button>
                </li>
            </ul>
        </div>

    </div>
    <!-- MAIN NAVBAR -->
    

  </header>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/general.scss";

header {
    color: white;
    ul, p {
        margin: unset;
        li{
            margin-left: 2rem;
            cursor: pointer;
        }

    }
    .contact-navbar {
      background-color: $contact-navbar-color;
    }
}
</style>

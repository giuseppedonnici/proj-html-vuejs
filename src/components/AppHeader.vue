<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="contact-navbar p-1">
      <div class="ms-container d-flex justify-content-between">
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
  </header>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.contact-navbar {
  background-color: $contact-navbar-color;
  color: white;
  ul, p {
    margin: unset;
    padding: .5rem 0;
    li{
        margin-left: 2rem;
    }
  }
}
</style>

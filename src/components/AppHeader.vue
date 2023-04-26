<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="contact-navbar p-1">
      <div class="container">
        <p><i class="fa-solid fa-clock pe-2"></i>Open Hours: Mon - Sat - <time>9:00</time> - <time>18:00</time></p>
        <ul>
            <li><i class="fa-solid fa-phone pe-2"></i>+1 (305) 1234-5678</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
}
</style>

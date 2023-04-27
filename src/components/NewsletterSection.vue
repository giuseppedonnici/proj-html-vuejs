<script>
export default {
  name: "NewsletterSection",
};
</script>

<template>
  <section id="newsletter">
    <div class="ms-container d-flex">
      <div class="newsletter-description p-5">
        <h6>newsletter</h6>
        <h2><span class="special-span">Know</span> First</h2>
        <p>
          Follow closely and receive content about our company and the news of
          the current market
        </p>
      </div>

      <form class="p-5">
        <div class="row mb-3">
          <div class="col-lg-10">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-10">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
        <button type="submit" class="btn primary-btn">subscribe</button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

#newsletter {
  background-image: url(../assets/img/bg-1.jpg);
  background-size: cover;
  background-position: center;
  .newsletter-description {
    width: 50%;
    h2 {
      color: white;
    }
    .special-span {
      background-color: rgba($color: $primary-color, $alpha: 0.3);
    }
  }
  form {
    width: 50%;
    .form-control {
        background-color: #ffffff4f;
    }
    .form-control:focus {
        border-color: $primary-color;
        box-shadow: 0 0 0 0.25rem rgba($color: $primary-color, $alpha: 0.2);
    }
  }
}
</style>

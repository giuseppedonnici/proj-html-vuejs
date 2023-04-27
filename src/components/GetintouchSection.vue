<script>
export default {
  name: "GetintouchSection",
};
</script>

<template>
  <section id="getintouch">
    <div class="ms-container d-flex">
      <!-- LEFT -->
      <div class="cta-left pe-5">
        <h6>send a message</h6>
        <h2>Get in <span class="special-span">Touch</span></h2>
        <p>We will respond to your message as soon as possible.</p>

        <form class="row g-3 mt-4">
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class="col-md-6">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="col-md-6">
            <input
              type="tel"
              class="form-control"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div class="col-md-6">
            <select id="inputState" class="form-select">
              <option selected="">More Info</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
            </select>
          </div>
          <div class="input-group">
            <textarea
              class="form-control"
              aria-label="With textarea"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn primary-btn">send</button>
          </div>
        </form>
      </div>
      <!-- /LEFT -->

      <!-- RIGHT -->
      <div class="cta-right">
        <h5 class="fw-bold mb-3">Example Inc.</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Blanditiis perferendis aliquam ipsum laudantium, officia qui officiis
          ipsa perspiciatis sint libero dolores voluptas iure, ducimus eligendi
          fugiat natus, nulla ullam temporibus.
        </p>

        <ul>
          <li>
            <a href="#">
              <i class="fa-solid fa-phone" style="color: #058283"></i>
            </a>
            <span>
                <a href="#">+1 (305) 1234-5678</a>
            </span>
          </li>
          <li>
            <a href="#">
              <i class="fa-solid fa-envelope" style="color: #058283"></i>
            </a>
            <span>
                <a href="#">hello@example.com</a>
            </span>
          </li>
          <li>
            <a href="#">
              <i class="fa-solid fa-location-dot" style="color: #058283"></i>
            </a>
            <span>
                <a href="#">Main Avenue, 987</a>
            </span>
          </li>
        </ul>
        <button class="btn secondary-btn" style="color: #058283">view map</button>
      </div>
      <!-- /RIGHT -->
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

#getintouch {
    background-color: $section-bg-color;
}
.cta-left {
  width: 60%;
  flex-shrink: 0;
  .special-span {
    color: $primary-color;
    background-color: $secondary-color;
  }
  .form-control,
  .form-select {
    background-color: #0f050514;
    color: grey;
  }
  textarea.form-control {
    min-height: calc(8em + 0.75rem + 2px);
}
}
  .cta-right {
    width: 40%;
    ul {
        padding: unset;
        margin-top: 2rem;
        li {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            color: $primary-color;
            & > a {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                margin-right: 1rem;
                border-radius: 50%;
                background-color: $secondary-color;
            }
        }
    }
  }
</style>

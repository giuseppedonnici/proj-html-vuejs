<script>
export default {
  name: "SkillsSection",
};
</script>

<template>
  <section id="skills">
    <div class="ms-container">
      <div class="company-skills">
        <h6>about the network</h6>
        <h2><span class="special-span">The</span> Company</h2>
        <p>
          With all this expertise and capability comes an unrivalled commitment
          to customer service.
        </p>
        <ul>
          <li>
            <div class="skill-description">
              <h5 class="fw-bold">Leadership</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </li>
          <li>
            <div class="skill-description">
              <h5 class="fw-bold">Psychology</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </li>
          <li class="c1">
            <div class="skill-description c-1">
              <h5 class="fw-bold">Flexibility</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

#skills {
  background-color: black;
  background-image: url(../assets/img/about-5.jpg);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: right;
  color: white;
  padding: unset;
  .company-skills {
    .special-span {
      padding: 0.2rem;
      background-color: rgba($color: $primary-color, $alpha: 0.3);
    }
    width: 50%;
    padding: 5rem 4rem 5rem 0;
    ul {
      padding: 3rem 0;
      li {
        margin-bottom: 3rem;
        p {
          color: $gray-text;
        }
      }
      li.c1 {
        position: relative;
      }
      li.c1::before {
        content: "";
        display: block;
        position: absolute;
        top: 38px;
        left: 0;
        width: 5px;
        border-bottom: 5px solid $primary-color;
      }
      .skill-description:before {
        content: "0%";
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        font-weight: bold;
        font-size: 25px;
        margin-right: 1.5rem;
        padding: 1.5rem;
        width: 80px;
        height: 80px;
        border: 5px solid rgba($color: $gray-text, $alpha: 0.4);
        border-radius: 50%;
      }
      .skill-description.c-1:before {
        content: "1%";
      }
    }
  }
}
</style>

<script>
export default {
  name: "AppLogo",
};
</script>

<template>
  <p class="fs-4 text-uppercase"><span>nex</span> gen</p>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
p {
  font-weight: bold;
  letter-spacing: 5px;
}
span {
  display: inline-block;
  background-color: rgba($color: $primary-color, $alpha: 0.7);
  color: $primary-color;
  line-height: 50px;
  width: 100px;
  text-align: right;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>

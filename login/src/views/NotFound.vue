<template>
  <div class="error">
    <img src="../assets/not-found.b557dd39.jpg" alt="" />
    <h3>404-Page-Not-Found!</h3>
    <p>Sorry, that page doesn't exist. What would you like to do?</p>
  </div>
</template>
<script>
export default {
  name: "NotFoundPage",
};
</script>
<style lang="scss">
.error {
  font-weight: bolder;
  color: #6f7f9f;
  font-size: 1.1rem;
  img {
    width: 44%;
  }
  h3 {
    font-weight: bolder;
    color: #00287a;
    margin-bottom: 1.2rem;
  }
}
</style>

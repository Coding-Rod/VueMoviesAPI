<template>
  <nav class="container-fluid mb-2">
    <div class="row">
        <div class="col-12 col-lg-8">
          <router-link to="/" class="d-flex text-decoration-none home-link">
            <img src="@/assets/images/logo.png" alt="logo" />
            <h1 class="text-black text-uppercase">Movies API</h1>
          </router-link>
        </div>
        <div class="col pt-2 mb-2">
          <search-bar />
        </div>
      </div>
  </nav>
</template>

<script>
import SearchBar from '@/components/template/Header/SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

nav {
  background: rgba($color: $primary, $alpha: 0.8);
}

img {
  width: 50px;
}
</style>

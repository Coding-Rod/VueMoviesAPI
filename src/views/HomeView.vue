<template>
  <div class="container">
    <router-view />
    <div class="row">
      <main class="col-12 col-lg-9">
        <home-carousel :movies="getFirstThreeMovies" :screenwidth="screenwidth" />
      </main>
      <aside class="col-12 col-lg-3 mt-3 mt-lg-0">
        <home-genres :genres="genres" />
      </aside>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HomeCarousel from "@/components/Home/HomeCarousel.vue";
import HomeGenres from "@/components/Home/HomeGenres.vue";

export default {
  name: "HomeView",
  data() {
    return {
      screenwidth: 0,
    }
  },
  components:{
    HomeCarousel,
    HomeGenres
  },
  computed: {
    ...mapState(["genres"]),
    ...mapGetters(["getFirstThreeMovies"])
  },
  mounted() {
    this.$store.dispatch("fetchGenres");
    this.$store.dispatch("fetchTopMovies");
    this.screenwidth = parseInt(window.screen.availWidth);
    window.addEventListener("resize", () => {
      this.screenwidth = parseInt(window.screen.availWidth);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

</style>
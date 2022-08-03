<template>
  <div class="container">
    <router-view />
    <div class="row">
      <home-carousel :movies="getFirstThreeMovies" :screenwidth="screenwidth" />
      <aside class="col-12 col-lg-3 mt-3 mt-lg-0">
        <div class="card">
          <div class="card-header">Categories</div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="genre in genres"
              :key="genre"
              :v-if="genres"
            >
              {{ genre.name }}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HomeCarousel from "@/components/Home/HomeCarousel.vue";

export default {
  name: "HomeView",
  data() {
    return {
      screenwidth: 0,
    }
  },
  components:{
    HomeCarousel
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
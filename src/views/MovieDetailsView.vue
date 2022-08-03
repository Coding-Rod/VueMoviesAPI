<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <back-button />
      </div>
      <div class="row">
        <div class="col">
          <p>{{ $route.params.id }}</p>
          <h1>{{ movie.original_title }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-8 fill">
          <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path"
              :alt="movie.original_title"
              class="img-fluid"
            />
        </div>
        <div class="col-4">
          <h3>Genres</h3>
            <span v-for="genre in movie.genres" :key="genre" class="badge rounded-pill text-bg-primary">{{genre.name}}</span>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <h2>Related Movies</h2>
          <Pagination :movies="movies" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/template/BackButton.vue";
import Pagination from "@/components/template/Pagination.vue";
import { mapState } from "vuex";

export default {
  name: "MovieDetails",
  components: {
    BackButton,
    Pagination
  },
  computed:{
    ...mapState(["movie", "movies"]),
  },
  mounted() {
    this.$store.dispatch("movieDetails", this.$route.params.id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/_helpers.scss";
</style>

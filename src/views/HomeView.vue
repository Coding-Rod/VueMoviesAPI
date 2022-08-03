<template>
  <div class="container">
    <router-view />
    <div class="row">
      <main class="col-12 col-lg-9">
        <div class="container-fluid">
          <div class="row mb-4 mb-lg-2">
            <div class="col-9 text-left">
              <h2>Trends</h2>
            </div>
            <div class="col-3">
              <router-link class="btn btn-primary" to="/trends"
                >Discover more
              </router-link>
            </div>
          </div>
          <div class="row">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              
              <div class="carousel-inner">
                <div class="carousel-item fill" :class="index==0?'active':''" v-for="(movie, index) in getFirstThreeMovies" :key="movie">
                  <img v-if="screenwidth >= 763" :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path" :alt="movie.original_title">
                  <img v-else :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.original_title">
                  <div class="carousel-caption movie-description">
                    <h5>{{ movie.original_title}}</h5>
                    <p>{{ movie.overview }}</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </main>
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

export default {
  name: "HomeView",
  data() {
    return {
      screenwidth: 0,
    }
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
    })
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.movie-description {
  background-color: rgba($color: $secondary, $alpha: 0.4);
  padding: 1rem;
  border-radius: 15px 0 15px 0;
}

.fill {
    overflow: hidden;
    > img {
      flex-shrink: 0;
      min-width: 100%;
      min-height: 100%;
    }
}

</style>
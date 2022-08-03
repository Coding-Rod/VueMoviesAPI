<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-3 my-2" v-for="movie in movies" :key="movie">
        <div class="card text-white">
          <img
            class="card-img"
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          />
          <div class="card-img-overlay">
            <h2 class="card-title"> {{ movie.original_title }}</h2>
            <p class="card-text">
              {{
                movie.overview.length > 200
                  ? movie.overview.substring(0, 200) + "..."
                  : movie.overview
            }}
            </p>
            <router-link :to="'/movie/'+movie.id" class="btn btn-outline-light" href="#">Find out</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.card-img-overlay {
  transform: translateY(13rem);
  transition: transform 0.18s ease-in;
  background: linear-gradient(0deg, rgba($info,1) 0%, rgba($info,0.8) 62%, rgba($info,0.3) 100%);
  .card-text {
    opacity: 0;
    transform: translateY(-6rem);
    transition: opacity 0.05s ease-in, transform 0.25s ease-in;
  }
  .btn {
    opacity: 0;
    transform: translateY(2rem);
  }
}
.card {
  overflow: hidden;
  background-color: #345;
  &:hover {
    .card-img {
      mix-blend-mode: overlay;
    }
    .card-img-overlay {
      transform: translateY(0);
      transition: transform 0.25s ease-out;
      background-color: rgba(0, 0, 0, 0.1);
    }
    .card-text {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 0.5s ease-out, transform 0.2s ease-out;
    }
    .btn {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 0.7s ease-out, transform 0.35s ease-out;
    }
  }
}
</style>
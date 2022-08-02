<template>
  <div class="home">
    <MovieDetails msg="This is a home page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieDetails from '@/components/MovieDetails.vue'

export default {
  name: 'HomeView',
  components: {
    MovieDetails
  }
}
</script>

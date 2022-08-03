<template>
  <div class="alert alert-success" role="alert">
    <h1>{{msg}}</h1>
    <router-link to="/top_movies">Movies</router-link>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

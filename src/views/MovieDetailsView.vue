<template>
  <div class="alert alert-success" role="alert">
    <back-button />
    <h1>{{msg}}</h1>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
import BackButton from '@/components/template/BackButton.vue';

export default {
  name: 'MovieDetails',
  components: {
    BackButton,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

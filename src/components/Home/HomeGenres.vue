<template>
  <div class="card">
    <div class="card-header">Categories</div>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item list-group-item-action"
        v-for="genre in genres"
        :key="genre"
        :v-if="genres"
      >
        <router-link :to="'/filter/'+genre.id" class="text-center text-decoration-none text-dark">
          {{ genre.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        genres: {},
    },
};
</script>

<style>
</style>
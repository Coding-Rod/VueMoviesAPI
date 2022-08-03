<template>
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
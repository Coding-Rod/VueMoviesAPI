<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <back-button />
        <h1>{{ $route.params.genre }}</h1>
      </div>
      <div class="row">
        <div class="col">
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
  components: {
    BackButton,
    Pagination,
  },
  computed: {
    ...mapState(["movies"]),
  },
  mounted() {
    this.$store.dispatch("getMoviesByGenre", this.$route.query.id);
  },
};
</script>

<style>
</style>
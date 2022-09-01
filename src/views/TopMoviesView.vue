<template>
  <div class="about container">
    <div class="row">
      <div class="col">
    <back-button />
    <h1>Top Movies</h1>
    <Pagination :movies="top_movies" />
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
    ...mapState(["top_movies"]),
  },
  mounted() {
    this.$store.dispatch("fetchTopMovies");
  },
};
</script>
<template>
  <div class="about">
    <span>{{$store.state.log}}</span>
    <back-button />
    <h1>Top Movies</h1>
    <Pagination :movies="movies" />
  </div>
</template>

<script>
import BackButton from '@/components/template/BackButton.vue';
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
    this.$store.dispatch("moviesSearch", this.$route.query);
  },
};
</script>

<style>

</style>
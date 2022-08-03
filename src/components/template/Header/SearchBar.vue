<template>
  <div class="input-group rounded">
    <input
      type="search"
      class="form-control py-2 border-0"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      v-model="search"
    />
    <button @click="searchMovie" class="input-group-text border-0 btn bg-white" id="search-addon">
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    async searchMovie() {
      await this.$store.dispatch("moviesSearch", this.$route.query);
      await this.$router.push({
        path: "/filter",
        query: {
          query: this.search,
          page: 1,
        },
      });
    },
  },
};
</script>

<style>
</style>
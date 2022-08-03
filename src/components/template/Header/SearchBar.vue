<template>
  <div class="input-group rounded">
    <input
      type="search"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      v-model="search"
    />
    <router-link :to="'/filter?query='+search" class="input-group-text border-0" id="search-addon">
      <i class="bi bi-search"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
</style>
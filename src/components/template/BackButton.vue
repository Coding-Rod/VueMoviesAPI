<template>
    <button class="btn btn-primary" :key="$route.fullPath" @click="goBack">
      <i class="bi bi-arrow-left"></i>
    </button>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    goBack() {
      if (this.$router.options.history.state.back) {
        this.$router.back();
      } else {
        this.$router.push({ name: "home" });
      }
    }
  }
}
</script>

<style>

</style>
<template>
    <button class="btn btn-primary" @click="goBack">
      <i class="bi bi-arrow-left"></i>
    </button>
</template>

<script>
export default {
    methods: {
      goBack() {
        if (!this.$router.options.history.state.back) {
          this.$router.push('/');
        } else {
          this.$router.go(-1);
        }
      }
    }
}
</script>

<style>

</style>
<template>
  <div class="about">
    <button class="btn btn-primary" @click="goBack">
      <i class="bi bi-arrow-left"></i>
    </button>
    <h1>Top Movies</h1>
  </div>
</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>
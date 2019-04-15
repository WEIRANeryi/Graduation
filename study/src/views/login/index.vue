<template>
  <div class="container">
    <navbar class="navbar" selected="1"></navbar>
  </div>
</template>

<script>
  import navbar from '@/components/navbar'
  export default {
    name: "login",
    components: {
      navbar
    }
  }
</script>

<style scoped>
  .navbar {

  }
</style>

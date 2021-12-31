<template>
    <div class="header section">
        <img class="banner" src="../assets/logo.png">
        <PartToWhole></PartToWhole>
    </div>
    
</template>

<script>
import PartToWhole from './charts/PartToWhole.vue';

export default {
  name: 'Header',
  components: {
    PartToWhole
  }
}
</script>

<style scoped>

</style>
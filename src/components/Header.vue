<template>
    <div class="header section">
        <img class="banner" src="../assets/logo.png">
        <TestChart></TestChart>
    </div>
    
</template>

<script>
import TestChart from './charts/TestChart.vue';

export default {
  name: 'Header',
  components: {
    TestChart
  }
}
</script>

<style scoped>

</style>
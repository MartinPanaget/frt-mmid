<template>
    <div class="header section">
        <div class="general">
            <h3>67%</h3>
            <h3>38%</h3>
            <h3>50%</h3>
            <h3>47%</h3>
        </div>
        <div class="countries">
            <img src="../assets/countries/china.png"/>
            <img src="../assets/countries/germany.png"/>
            <img src="../assets/countries/united-kingdom.png"/>
            <img src="../assets/countries/united-states-of-america.png"/>
        </div>
        <PartToWhole></PartToWhole>
    </div>
    
</template>

<script>
import PartToWhole from './charts/PartToWhole.vue';

export default {
  name: 'SocialAcceptance',
  components: {
    PartToWhole
  }
}
</script>

<style scoped>

    .general {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }

    h3 {
        font-family: 'Avenir Next Codensed';
        font-size: 30px;
        font-weight: normal;
    }

    .countries {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }

    .countries img {
        width: 250px
    }
</style>
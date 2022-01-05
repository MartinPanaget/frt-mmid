<template>
    <Wrapper>
        <div class="general">
            <h3>67%</h3>
            <h3>38%</h3>
            <h3>50%</h3>
            <h3>47%</h3>
        </div>
        <div class="countries">
            <img :src='china'/>
            <img :src='de'/>
            <img :src='uk'/>
            <img :src='usa'/>
        </div>
        <PartToWhole></PartToWhole>
    </Wrapper>
    
</template>

<script>
import Wrapper from './Wrapper.vue';
import PartToWhole from './charts/PartToWhole.vue';
import china from '../assets/countries/china.png';
import germany from '../assets/countries/de.png';
import unitedKingdom from '../assets/countries/uk.png';
import unitedStatesOfAmerica from '../assets/countries/usa.png';

export default {
  name: 'SocialAcceptance',
  components: {
    Wrapper,
    PartToWhole
  },
  data() {
    return {
        china: china, 
        de: germany, 
        uk: unitedKingdom, 
        usa: unitedStatesOfAmerica
    }
  },
  methods: {
    change: function (event) {
      if (event.target.innerHTML === 'Overview') {
        document.getElementsByClassName('test1')[0].style.display = 'block';
        document.getElementsByClassName('test2')[0].style.display = 'none';
      } else {
        document.getElementsByClassName('test1')[0].style.display = 'none';
        document.getElementsByClassName('test2')[0].style.display = 'block';
      }
    }
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
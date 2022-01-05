<template>
    <Wrapper>
        <h3>Acceptance towards FRT</h3>
        <div class="buttons">
            <button v-on:click='change'>Overview</button>
            <button v-on:click='change'>Detail</button>
        </div>
        <div class="overview">
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
        </div>
        <div class="detail">
            <p>detailpage</p>
        </div>
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
      let overview = document.getElementsByClassName('overview')[0].style;
      let detail = document.getElementsByClassName('detail')[0].style;
      if (event.target.innerHTML === 'Overview') {
        overview.display = 'block';
        detail.display = 'none';
      } else {
        overview.display = 'none';
        detail.display = 'block';
      }
    }
  }
}
</script>

<style scoped>

    h3 {
        font-family: 'Avenir Next Codensed';
        font-size: 30px;
        font-weight: normal;
    }

    .buttons {
        text-align: center;
    }

    .overview {
        display: block;
    }

    .detail {
        display: none;
    }
    
    .general {
        display: grid;
        grid-template-columns: repeat(4, 20%);
        grid-column-gap: 6.7%;
        height: 5vh;
    }

    .general h3 {
        margin: 0 auto;
    }

    .countries {
        display: grid;
        grid-template-columns: repeat(4, 20%);
        grid-column-gap: 6.7%;
        height: 20vh;
    }

    .countries img {
        height: 15vh;
        margin: 0 auto;
    }
</style>
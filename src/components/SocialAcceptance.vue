<template>
    <Wrapper>
        <h3>Acceptance towards FRT</h3>
        <div class="buttons">
            <button id='overview' v-on:click='change'>Overview</button>
            <button id='detail' v-on:click='change'>Detail</button>
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
      let buttonOverview = document.getElementById('overview').style;
      let buttonDetail = document.getElementById('detail').style;
      if (event.target.innerHTML === 'Overview') {
        event.target.style.backgroundColor = '#00FFFF';
        event.target.style.borderColor = '#00FFFF';
        buttonDetail.backgroundColor = '#E6E6E6';
        buttonDetail.borderColor = '#E6E6E6';
        overview.display = 'block';
        detail.display = 'none';
      } else {
        event.target.style.backgroundColor = '#00FFFF';
        event.target.style.borderColor = '#00FFFF';
        buttonOverview.backgroundColor = '#E6E6E6';
        buttonOverview.borderColor = '#E6E6E6';
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
        margin: 20px
    }

    .buttons button:first-child {
        border-color: #00FFFF;
        background-color: #00FFFF;
    }

    .buttons button {
        padding: 10px;
        margin: 0 2vw;
        color: #222222;
        font-size: 17px;
        border-radius: 10px;
        border-color: #E6E6E6;
        background-color: #E6E6E6;
    }

    .overview {
        display: block;
    }

    .detail {
        display: none;
    }
    
    .general {
        display: grid;
        grid-template-columns:  repeat(4, 22%);
        grid-column-gap: 4%;
        height: 7vh;
    }

    .general h3 {
        margin: 0 auto;
        margin-bottom: 10px; 
    }

    .countries {
        display: grid;
        grid-template-columns: repeat(4, 24%);
        grid-column-gap: 1%;
        /*height: 20vh;*/
    }

    .countries img {
        height: 25vh;
        margin: 0 auto;
    }
</style>
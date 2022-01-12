<template>
    <Wrapper>
        <h2>Acceptance towards FRT</h2>
        <div class="round-dots">
                <div class="dot">
                    <a href='#page3' id='overview' v-on:click='change'>OVER_ <br> VIEW</a>
                </div>
                <div class="dot">
                    <a href='#page3' id='detail' v-on:click='change'>DETAIL</a>
                </div>
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
                <img :src='germany'/>
                <img :src='unitedKingdom'/>
                <img :src='unitedStatesOfAmerica'/>
            </div>
            <PartToWhole></PartToWhole>
        </div>
        <div class="detail">
            <div class="countries-icon">
                <img :src='ch'/>
                <img :src='de'/>
                <img :src='gb'/>
                <img :src='us'/>
            </div>
            <LineChart v-bind:series="series"></LineChart>
        </div>
    </Wrapper>
    
</template>

<script>
import Wrapper from './Wrapper.vue';
import PartToWhole from './charts/PartToWhole.vue';
import LineChart from './charts/LineChart.vue';

import china from '../assets/countries/china.png';
import germany from '../assets/countries/de.png';
import unitedKingdom from '../assets/countries/uk.png';
import unitedStatesOfAmerica from '../assets/countries/usa.png';
import ch from '../assets/images/CH_circle_small.png';
import de from '../assets/images/DE_circle_small.png';
import gb from '../assets/images/GB_circle_small.png';
import us from '../assets/images/USA_circle_small.png';

export default {
  name: 'SocialAcceptance',
  components: {
    Wrapper,
    PartToWhole,
    LineChart
  },
  data() {
    return {
        series: [],
        china: china, 
        germany: germany, 
        unitedKingdom: unitedKingdom, 
        unitedStatesOfAmerica: unitedStatesOfAmerica,
        ch: ch,
        de: de,
        gb: gb,
        us: us
    }
  },
  methods: {
    change: function (event) {
      let overview = document.getElementsByClassName('overview')[0].style;
      let detail = document.getElementsByClassName('detail')[0].style;
      let buttonOverview = document.getElementById('overview').parentElement.style;
      let buttonDetail = document.getElementById('detail').parentElement.style;
      if (event.target.innerHTML.includes('OVER')) {
        event.target.parentElement.style.backgroundColor = '#00FFFF';
        buttonDetail.backgroundColor = '#E6E6E6';
        overview.display = 'block';
        detail.display = 'none';
      } else {
        event.target.parentElement.style.backgroundColor = '#00FFFF';
        buttonOverview.backgroundColor = '#E6E6E6';
        overview.display = 'none';
        detail.display = 'block';
      }
    }
  }
}
</script>

<style scoped>

    h3 {
        font-size: 30px;
        font-weight: normal;
    }

    .dot:first-child{
        background-color: #00FFFF;
    }

    .dot{
        margin: 0 2vw;
        height: 70px;
        width: 70px;
        background-color: #E6E6E6;
        border-radius: 50%;
        /* display: inline-block; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .round-dots{
        display: flex;
        justify-content: space-between;
        width: 28%;
        margin: auto;
        padding-bottom: 50px;
    }

    .round-dots a{
        color: #222222;
        text-decoration: none;
    }

    /*.buttons {
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
    }*/

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

    .countries-icon {
        height: 5vh;
    }
</style>
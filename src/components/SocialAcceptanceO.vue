<template>
    <Wrapper id="section5">
        <h2>Acceptance rate of Facial Recognition Technologies</h2>
        <div class="overview">
            <div class="general">
                <div>
                    <p>ACCEPTANCE RATE</p>
                    <p>= Strongly + Somewhat agree</p>
                </div>
                <h3 @mouseover='changeColor(1, $event)' @mouseleave='changeColorBack(1, $event)' style="color: #C7F700;cursor:default;">CN 67%</h3>
                <h3 @mouseover='changeColor(2, $event)' @mouseleave='changeColorBack(2, $event)' style="color: #70E6AB;cursor:default;">GB 50%</h3>
                <h3 @mouseover='changeColor(3, $event)' @mouseleave='changeColorBack(3, $event)' style="color: #0CBAF7;cursor:default;">US 47%</h3>
                <h3 @mouseover='changeColor(4, $event)' @mouseleave='changeColorBack(4, $event)' style="color: #23EFEF;cursor:default;">DE 38%</h3>
            </div>
            <div class="countries">
                <div/>
                <img @mouseover='changeColor(1, $event)' @mouseleave='changeColorBack(1, $event)' :src='china'/>
                <img @mouseover='changeColor(2, $event)' @mouseleave='changeColorBack(2, $event)' :src='unitedKingdom'/>
                <img @mouseover='changeColor(3, $event)' @mouseleave='changeColorBack(3, $event)' :src='unitedStatesOfAmerica'/>
                <img @mouseover='changeColor(4, $event)' @mouseleave='changeColorBack(4, $event)' :src='germany'/>
            </div>
            <PartToWhole id="ptw-chart"></PartToWhole>
        </div>
    </Wrapper>
    
</template>

<script>
import Wrapper from './Wrapper.vue';
import PartToWhole from './charts/PartToWhole.vue';

// countries
import china from '../assets/countries/china.png';
import germany from '../assets/countries/de.png';
import unitedKingdom from '../assets/countries/uk.png';
import unitedStatesOfAmerica from '../assets/countries/usa.png';

export default {
  name: 'SocialAcceptanceO',
  components: {
    Wrapper,
    PartToWhole,
  },
  data() {
    return {
        //countries
        china: china, 
        germany: germany, 
        unitedKingdom: unitedKingdom, 
        unitedStatesOfAmerica: unitedStatesOfAmerica,
    }
  },
  methods: {
    changeColor : function (number) {
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-series-group')[0].children[0].children[2].setAttribute('opacity', '0.3');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-series-group')[0].children[0].children[3].setAttribute('opacity', '0.3');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-series-group')[0].children[0].children[4].setAttribute('opacity', '0.3');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-data-labels')[0].children[2].children[0].setAttribute('opacity', '0.3');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-data-labels')[0].children[3].children[0].setAttribute('opacity', '0.3');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-data-labels')[0].children[4].children[0].setAttribute('opacity', '0.3');
    },
    changeColorBack : function (number) {
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-series-group')[0].children[0].children[2].setAttribute('opacity', '1');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-series-group')[0].children[0].children[3].setAttribute('opacity', '1');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-series-group')[0].children[0].children[4].setAttribute('opacity', '1');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-data-labels')[0].children[2].children[0].setAttribute('opacity', '1');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-data-labels')[0].children[3].children[0].setAttribute('opacity', '1');
        document.getElementById('ptw-chart').children[number].children[0].children[0].getElementsByClassName('highcharts-data-labels')[0].children[4].children[0].setAttribute('opacity', '1');
    },
  }
}
</script>

<style scoped>

    #section5 h2 {
        margin-bottom: 5%;
    }
    
    h3 {
        font-size: 40px;
        font-weight: normal;
    }

    .overview {
        display: block;
    }
    
    .general {
        display: grid;
        grid-template-columns: 10% repeat(4, 20%);
        grid-column-gap: 1%;
        /*height: 7vh;*/
    }

    .general p:last-child {
        text-align: right;
        margin-top: 3px;
    }

    .general p:first-child {
        text-align: right;
        text-shadow: rgba(0,255,255,0.9) 0px 0px 9px;
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 0
    }

    @media only screen and (max-width: 1000px) {
        .general p:first-child {
            text-align: right;
            text-shadow: rgba(0,255,255,0.9) 0px 0px 9px;
            font-size: 32px;
            margin-top: 10px;
            margin-bottom: 0
        }
    }

    .general h3 {
        margin: 0 auto;
        margin-bottom: 2%; 
    }

    .countries {
        display: grid;
        grid-template-columns: 10% repeat(4, 20%);
        grid-column-gap: 1%;
    }

    .countries img {
        height: 20vh;
        margin: 0 auto;
    }
</style>
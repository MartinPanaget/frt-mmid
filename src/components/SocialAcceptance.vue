<template>
    <Wrapper id="section5">
        <h2>Acceptance towards FRT</h2>
        <div class="round-dots">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.04 105.03">
                <!-- <defs>
                    <style>.cls-1{fill:#e6e6e6;}.cls-2{fill:none;stroke:#e6e6e6;stroke-width:3px;}</style>
                </defs> -->
                <g id="Ebene_2" data-name="Ebene 2">
                    <g id="Ebene_1-2" data-name="Ebene 1">
                        <polyline class="cls-2" points="308.22 15.31 240.22 52.31 88.22 52.31 13.22 74.31"/>
                        <g id="Gruppe_514" data-name="Gruppe 514">
                            <circle id="Ellipse_546" data-name="Ellipse 546" class="cls-1" cx="160.04" cy="53" r="10"/>
                            <circle id="Ellipse_519" data-name="Ellipse 519" class="cls-1" cx="14.5" cy="75.11" r="14.5"/>
                            <circle id="Ellipse_518" data-name="Ellipse 518" class="cls-1" cx="308.54" cy="14.5" r="14.5"/>

                            <circle id="c-detail" v-on:click="change('toOverview')" :class="{active:detailActive}" data-name="Ellipse 545" class="cls-1" cx="228.05" cy="53.03" r="42"/>
                            <text x="228.05" y="53.03" text-anchor="middle" stroke="#222222" stroke-width="1px" alignment-baseline="middle">DETAIL</text>
                            <circle id="c-overview" v-on:click="change('toDetail')" :class="{active:overviewActive}" data-name="Ellipse 545" class="cls-1" cx="90.06" cy="53.03" r="42"/>
                            <text x="90.06" y="53.03" text-anchor="middle" stroke="#222222" stroke-width="1px" alignment-baseline="middle">
                                <tspan x="90.06" dy="0">OVER-</tspan>
                                <tspan x="90.06" dy="20">VIEW</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>

        </div>
        <div class="overview">
            <div class="general">
                <p>ACCEPTANCE RATE</p>
                <h3 @mouseover='changeColor(1, $event)' @mouseleave='changeColorBack(1, $event)' style="color: #C7F700">CH 67%</h3>
                <h3 @mouseover='changeColor(2, $event)' @mouseleave='changeColorBack(2, $event)' style="color: #70E6AB">UK 50%</h3>
                <h3 @mouseover='changeColor(3, $event)' @mouseleave='changeColorBack(3, $event)' style="color: #0CBAF7">US 47%</h3>
                <h3 @mouseover='changeColor(4, $event)' @mouseleave='changeColorBack(4, $event)' style="color: #23EFEF">DE 38%</h3>
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
        <div class="detail">
            <div class="chart-detail">
                <div class="countries-icon">
                    <img :src='ch'/>
                    <img :src='de'/>
                    <img :src='gb'/>
                    <img :src='us'/>
                </div>
                <LineChart v-bind:attributes="attributes"></LineChart>
            </div>
            <div class="attributes">
                <div v-for="(attr, attrName) in attributeList" :key="attrName" :class="attrName" class="test">
                    <div v-for="(item, index) in attr" :key="index">
                        <a v-for="entry in item" :key="entry.name" href="#" v-on:click='addOrRemove(entry.attribute, $event)'>
                            <img @click="$set(entry, 'selected', !entry.selected)" :src="entry.selected ? entry.imgActive : entry.img" :class="{active:!entry.selected}">
                        </a>
                    </div>
                </div>
                <div class="garbage">
                    <a href="#" v-on:click='deleteAttributes'>
                        <img src="../assets/attributes/icon_garbage.svg">
                    </a>
                </div>
            </div>
        </div>
    </Wrapper>
    
</template>

<script>
import Wrapper from './Wrapper.vue';
import PartToWhole from './charts/PartToWhole.vue';
import LineChart from './charts/LineChart.vue';

// countries
import china from '../assets/countries/china.png';
import germany from '../assets/countries/de.png';
import unitedKingdom from '../assets/countries/uk.png';
import unitedStatesOfAmerica from '../assets/countries/usa.png';

// country round icon
import ch from '../assets/icons/flagge-china.png';
import de from '../assets/icons/flagge-de.png';
import gb from '../assets/icons/flagge-uk.png';
import us from '../assets/icons/flagge-usa.png';

// attribute icons
import incomeLow from '../assets/attributes/icon_einkommen-low.svg';
import incomeMiddle from '../assets/attributes/icon_einkommen-middle.svg';
import incomeHigh from '../assets/attributes/icon_einkommen-high.svg';
import incomeVeryHigh from '../assets/attributes/icon_einkommen-veryhigh.svg';

import educationLow from '../assets/attributes/icon_bildung-low.svg';
import educationMiddle from '../assets/attributes/icon_bildung-middle.svg';
import educationHigh from '../assets/attributes/icon_bildung-high.svg';

import ageYoung from '../assets/attributes/icon_alter-low.svg';
import ageMiddle from '../assets/attributes/icon_alter-middle.svg';
import ageOld from '../assets/attributes/icon_alter-high.svg';

import genderMale from '../assets/attributes/icon_maennlich.svg';
import genderFemale from '../assets/attributes/icon_weiblich.svg';

import raceMinority from '../assets/attributes/icon_minority.svg';
import raceMajority from '../assets/attributes/icon_majority.svg';

import lifeRural from '../assets/attributes/icon_ansiedlung.svg';
import lifeCity from '../assets/attributes/icon_city.svg';

// attribute icons active
import incomeLowActive from '../assets/attributes/icon_einkommen-low-active.svg';
import incomeMiddleActive from '../assets/attributes/icon_einkommen-middle-active.svg';
import incomeHighActive from '../assets/attributes/icon_einkommen-high-active.svg';
import incomeVeryHighActive from '../assets/attributes/icon_einkommen-veryhigh-active.svg';

import educationLowActive from '../assets/attributes/icon_bildung-low-active.svg';
import educationMiddleActive from '../assets/attributes/icon_bildung-middle-active.svg';
import educationHighActive from '../assets/attributes/icon_bildung-high-active.svg';

import ageYoungActive from '../assets/attributes/icon_alter-low-active.svg';
import ageMiddleActive from '../assets/attributes/icon_alter-middle-active.svg';
import ageOldActive from '../assets/attributes/icon_alter-high-active.svg';

import genderMaleActive from '../assets/attributes/icon_maennlich-active.svg';
import genderFemaleActive from '../assets/attributes/icon_weiblich-active.svg';

import raceMinorityActive from '../assets/attributes/icon_minority-active.svg';
import raceMajorityActive from '../assets/attributes/icon_majority-active.svg';

import lifeRuralActive from '../assets/attributes/icon_ansiedlung-active.svg';
import lifeCityActive from '../assets/attributes/icon_city-active.svg';


var attributeList = [
    {income:[
        {
            name: 'incomeLow',
            imgActive:incomeLowActive,
            img:incomeLow,
            attribute:{name: 'Low income', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name:'incomeMiddle',
            imgActive:incomeMiddleActive,
            img:incomeMiddle,
            attribute:{name: 'Middle income', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name:'incomeHigh',
            imgActive:incomeHighActive,
            img:incomeHigh,
            selected: true,
            attribute:{name: 'High income', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name:'incomeVeryHigh',
            imgActive:incomeVeryHighActive,
            img:incomeVeryHigh,
            attribute:{name: 'Very high income', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
    ]},
    {education:[
        {
            name: 'educationLow',
            imgActive :educationLowActive,
            img :educationLow,
            attribute:{name: 'Low education', color: '#70E6AB', data: [[0.3, 1.7], [1.3, 2.0], [2.3, 2.5], [3.3, 1.8]]}
        },
        {
            name: 'educationMiddle',
            imgActive :educationMiddleActive,
            img :educationMiddle,
            attribute:{name: 'Middle education', color: '#70E6AB', data: [[0.3, 1.7], [1.3, 2.0], [2.3, 2.5], [3.3, 1.8]]}
        },
        {
            name: 'educationHigh',
            imgActive :educationHighActive,
            img :educationHigh,
            selected: true,
            attribute:{name: 'High education', color: '#70E6AB', data: [[0.3, 1.7], [1.3, 2.0], [2.3, 2.5], [3.3, 1.8]]}
        },   
    ]},
    {age:[
        {
            name:'ageYoung',
            imgActive:ageYoungActive,
            img:ageYoung,
            attribute:{name: 'Lower age', color: '#BBFEFE', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'ageMiddle',
            imgActive:ageMiddleActive,
            img:ageMiddle,
            attribute:{name: 'Medium age', color: '#BBFEFE', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'ageOld',
            imgActive:ageOldActive,
            img:ageOld,
            attribute:{name: 'Higher age', color: '#BBFEFE', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        }
    ]},
    {gender:[
        {
            name:'genderMale',
            imgActive:genderMaleActive,
            img:genderMale,
            attribute:{name: 'Male', color: '#23EFEF', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'genderFemale',
            imgActive:genderFemaleActive,
            img:genderFemale,
            attribute:{name: 'Female', color: '#23EFEF', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        }
    ]},
    {race:[
        {
            name:'raceMinority',
            imgActive:raceMinorityActive,
            img:raceMinority,
            attribute:{name: 'Minority', color: '#0CBAF7', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'raceMajority',
            imgActive:raceMajorityActive,
            img:raceMajority,
            attribute:{name: 'Majority', color: '#0CBAF7', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        }
    ]},
    {life:[
        {
            name:'lifeRural',
            imgActive:lifeRuralActive,
            img:lifeRural,
            attribute:{name: 'Rural', color: '#222222', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'lifeCity',
            imgActive:lifeCityActive,
            img:lifeCity,
            attribute:{name: 'City', color: '#222222', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        }
    ]},
    ]

export default {
  name: 'SocialAcceptance',
  components: {
    Wrapper,
    PartToWhole,
    LineChart
  },
  data() {
    return {
        // toggle
        overviewActive:true,
        detailActive:false,
        attributeList,
        // attriute icons: 
        incomeLow: incomeLow,
        incomeMiddle:incomeMiddle,
        incomeHigh:incomeHigh,
        incomeVeryHigh:incomeVeryHigh,
        educationLow:educationLow ,
        educationMiddle :educationMiddle,
        educationHigh:educationHigh,
        ageYoung:ageYoung,
        ageMiddle:ageMiddle,
        ageOld : ageOld,
        genderMale : genderMale,
        genderFemale : genderFemale,
        raceMinority:raceMinority,
        raceMajority :raceMajority,
        lifeRural :lifeRural,
        lifeCity :lifeCity,
        //attribute icons active
        incomeLowActive: incomeLowActive,
        incomeMiddleActive:incomeMiddleActive,
        incomeHighActive:incomeHighActive,
        incomeVeryHighActive:incomeVeryHighActive,
        educationLowActive:educationLowActive ,
        educationMiddleActive :educationMiddleActive,
        educationHighActive:educationHighActive,
        ageYoungActive:ageYoungActive,
        ageMiddleActive:ageMiddleActive,
        ageOldActive : ageOldActive,
        genderMaleActive : genderMaleActive,
        genderFemaleActive : genderFemaleActive,
        raceMinorityActive:raceMinorityActive,
        raceMajorityActive :raceMajorityActive,
        lifeRuralActive :lifeRuralActive,
        lifeCityActive :lifeCityActive,
        selected: undefined,
        //countries
        china: china, 
        germany: germany, 
        unitedKingdom: unitedKingdom, 
        unitedStatesOfAmerica: unitedStatesOfAmerica,
        //country circle
        ch: ch,
        de: de,
        gb: gb,
        us: us,
        // Hier sind die Daten für die Detailseite
        attributes: [{name: 'High income', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}, {name: 'High education', color: '#70E6AB', data: [[0.3, 1.7], [1.3, 2.0], [2.3, 2.5], [3.3, 1.8]]}],
        highIncome: {name: 'High income', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]},
        highEducation: {name: 'High education', color: '#70E6AB', data: [[0.3, 1.7], [1.3, 2.0], [2.3, 2.5], [3.3, 1.8]]},
        middleAge: {name: '31-40', color: '#BBFEFE', data: [[0.45, 0.4], [1.45, 0.8], [2.45, 1.1], [3.45, 0.9]]}
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
    addOrRemove : function (attribute) {
        let hasAttribute = this.attributes.some( attr => attr.name === attribute.name )
        if (hasAttribute) {
            let index = this.attributes.findIndex(attr => attr.name === attribute.name);
            this.attributes.splice(index, 1);
        } else {
            this.attributes.push(attribute)
        }
    },
    deleteAttributes : function () {
        this.attributes.splice(0, this.attributes.length);
        this.attributeList.forEach((attribute) => {
            attribute[Object.keys(attribute)[0]].forEach((specificAttribute) => {
                if(specificAttribute.selected) {
                    specificAttribute.selected = false;
                }
            })
        });
    },
    change: function (page) {
      let overview = document.getElementsByClassName('overview')[0].style;
      let detail = document.getElementsByClassName('detail')[0].style;

      if(page == 'toDetail'){
        overview.display = 'block';
        detail.display = 'none';
        this.overviewActive = true;
        this.detailActive = false;
      }else{
        overview.display = 'none';
        detail.display = 'grid';
        this.detailActive = true;
        this.overviewActive = false;
      }
    }
  }
}
</script>

<style scoped>

    .cls-1{
        fill:#e6e6e6;
        cursor: pointer;
        }
    .cls-1.active{
        fill:rgb(0, 255, 255); 
        filter: drop-shadow(0 0 6px rgb(0 255 255 / 0.8));
        }
    .cls-2{
        fill:none;
        stroke:#e6e6e6;stroke-width:3px;
        }

    text{
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        pointer-events: none;
    }

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
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .round-dots{
        display: flex;
        justify-content: space-between;
        width: 18%;
        margin: auto;
        padding-bottom: 50px;
    }

    .round-dots a{
        color: #222222;
        text-decoration: none;
    }

    .overview {
        display: block;
    }

    .detail {
        display: none;
        /*grid-template-columns: 10% 60% 20%;*/
        grid-template-columns: 70% 20%;
        grid-column-gap: 3.3%;
    }

    .chart-detail {
        display: grid;
        grid-template-columns: 15% 80%;
    }
    
    .general {
        display: grid;
        grid-template-columns: 10% repeat(4, 20%);
        grid-column-gap: 1%;
        height: 7vh;
    }

    .general p {
        text-align: right;
        text-shadow: rgba(0,255,255,0.9) 0px 0px 9px;
    }

    .general h3 {
        margin: 0 auto;
        margin-bottom: 10px; 
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

    .countries-icon img {
        height: 7vh;
        margin: 43px 0 43px 80px;
    }

    .attributes div {
        margin: 20px 0;
    }

    .attributes div a img {
        height: 6vh;
        margin: 0 5px;
    }

    .garbage a{
        margin-right: 0;
        margin-left: 224.4px;
    }
</style>
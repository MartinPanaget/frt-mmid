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
                <!--<div class="countries-icon">
                    <img :src='ch'/>
                    <img :src='de'/>
                    <img :src='gb'/>
                    <img :src='us'/>
                </div>-->

                <svg xmlns="http://www.w3.org/2000/svg" width="1252" height="42.133" viewBox="0 0 1252 42.133">
                    <g id="Gruppe_877" data-name="Gruppe 877" transform="translate(10464.5 -10987.367)">
                        <g id="Gruppe_869" data-name="Gruppe 869" transform="translate(-10891 10797)" opacity="0.1">
                        <line id="Linie_572" data-name="Linie 572" x2="1252" transform="translate(426.5 210.368)" fill="none" stroke="#e6e6e6" stroke-width="2"/>
                        <circle id="Ellipse_687" data-name="Ellipse 687" cx="5.5" cy="5.5" r="5.5" transform="translate(636 205)" fill="#fff"/>
                        <circle id="Ellipse_688" data-name="Ellipse 688" cx="5.5" cy="5.5" r="5.5" transform="translate(801 205)" fill="#fff"/>
                        <circle id="Ellipse_689" data-name="Ellipse 689" cx="5.5" cy="5.5" r="5.5" transform="translate(965 205)" fill="#fff"/>
                        <circle id="Ellipse_690" data-name="Ellipse 690" cx="5.5" cy="5.5" r="5.5" transform="translate(1133 205)" fill="#fff"/>
                        <circle id="Ellipse_692" data-name="Ellipse 692" cx="5.5" cy="5.5" r="5.5" transform="translate(1300 205)" fill="#fff"/>
                        <circle id="Ellipse_693" data-name="Ellipse 693" cx="5.5" cy="5.5" r="5.5" transform="translate(1466 205)" fill="#fff"/>
                        </g>
                        <g id="Gruppe_870" data-name="Gruppe 870" transform="translate(-12068 10589.463)">
                        <rect id="v5-button-1" width="125" height="42" rx="21" transform="translate(1673 398)" fill="#eff3ff" v-on:click="addOrRemove(age)"/>
                        <text id="Age" transform="translate(1725 426)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Age</tspan></text>
                        </g>
                        <g id="Gruppe_871" data-name="Gruppe 871" transform="translate(-11903 10536.463)">
                        <rect id="v5-button-2" width="125" height="42" rx="21" transform="translate(1673 451)" fill="#b2dbff" v-on:click="addOrRemove(gender)"/>
                        <text id="Gender" transform="translate(1715.5 479)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Gender</tspan></text>
                        </g>
                        <g id="Gruppe_872" data-name="Gruppe 872" transform="translate(-11729 10482.463)">
                        <rect id="v5-button-3" width="125" height="42" rx="21" transform="translate(1664 505)" fill="#6c93ed"/>
                        <text id="Income" transform="translate(1706.5 533)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Income</tspan></text>
                        </g>
                        <g id="Gruppe_873" data-name="Gruppe 873" transform="translate(-11564 10428.367)">
                        <rect id="v5-button-4" width="125" height="42" rx="21" transform="translate(1664 559)" fill="#4dd1f0"/>
                        <text id="Education_" data-name="Education " transform="translate(1697 587)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Education </tspan></text>
                        </g>
                        <g id="Gruppe_874" data-name="Gruppe 874" transform="translate(-11372 10374.463)">
                        <rect id="Rechteck_334" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d"/>
                        <text id="Minority_City" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Minority/City</tspan></text>
                        <rect id="v5-button-5" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#39decd"/>
                        <text id="Ethnical_minority" data-name="Ethnical minority" transform="translate(1655.5 641)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Ethnical minority</tspan></text>
                        </g>
                        <g id="Gruppe_875" data-name="Gruppe 875" transform="translate(-11062 10482.463)">
                        <path id="v5-button-7" d="M21,0h83a21,21,0,0,1,0,42H21A21,21,0,0,1,21,0Z" transform="translate(1664 505)" fill="#086dd3"/>
                        <text id="Exposure" transform="translate(1706.5 533)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Exposure</tspan></text>
                        </g>
                        <g id="Gruppe_876" data-name="Gruppe 876" transform="translate(-11207 10374.5)">
                        <rect id="Rechteck_334-2" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d"/>
                        <text id="Minority_City-2" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Minority/City</tspan></text>
                        <rect id="v5-button-6" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#00a5c3"/>
                        <text id="City" transform="translate(1693 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">City</tspan></text>
                        </g>
                    </g>
                </svg>
                
                <ForestChart v-bind:attributes="attributes"></ForestChart>
            </div>
        </div>
    </Wrapper>
    
</template>

<script>
import Wrapper from './Wrapper.vue';
import PartToWhole from './charts/PartToWhole.vue';
import ForestChart from './charts/ForestChart.vue';

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

export default {
  name: 'SocialAcceptance',
  components: {
    Wrapper,
    PartToWhole,
    //LineChart,
    ForestChart
  },
  data() {
    return {
        // toggle
        overviewActive:true,
        detailActive:false,
        /*attributeList,
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
        selected: undefined,*/
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
        attributes: [[{name: 'CH',data: [{x: 0,y:1,color: '#EFF3FF'}, {x: 1,y: 2,color: '#B2DBFF',}, {x: 2,y: 3,color: '#6C93ED',}, {x: 3,y: 1,color: '#6C93ED',}]}, 
                      {color: '#EFF3FF',data: [[0.5, 2]],}, {color: '#B2DBFF',data: [null, [1.5, 2.3]],}, {color: '#6C93ED',data: [null, null, [2.8,3.1]],}, {color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}],
                      [{name: 'UK',data: [{x: 0,y:1,color: '#EFF3FF'}, {x: 1,y: 2,color: '#B2DBFF',}, {x: 2,y: 3,color: '#6C93ED',}, {x: 3,y: 1,color: '#6C93ED',}]}, 
                      {color: '#EFF3FF',data: [[0.5, 2]],}, {color: '#B2DBFF',data: [null, [1.5, 2.3]],}, {color: '#6C93ED',data: [null, null, [2.8,3.1]],}, {color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}],
                      [{name: 'US',data: [{x: 0,y:1,color: '#EFF3FF'}, {x: 1,y: 2,color: '#B2DBFF',}, {x: 2,y: 3,color: '#6C93ED',}, {x: 3,y: 1,color: '#6C93ED',}]}, 
                      {color: '#EFF3FF',data: [[0.5, 2]],}, {color: '#B2DBFF',data: [null, [1.5, 2.3]],}, {color: '#6C93ED',data: [null, null, [2.8,3.1]],}, {color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}],
                      [{name: 'DE',data: [{x: 0,y:1,color: '#EFF3FF'}, {x: 1,y: 2,color: '#B2DBFF',}, {x: 2,y: 3,color: '#6C93ED',}, {x: 3,y: 1,color: '#6C93ED',}]}, 
                      {color: '#EFF3FF',data: [[0.5, 2]],}, {color: '#B2DBFF',data: [null, [1.5, 2.3]],}, {color: '#6C93ED',data: [null, null, [2.8,3.1]],}, {color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}],
                      [{name: 'CH',data: [{x: 0,y:1,color: '#CDF2D8'}, {x: 1,y: 2,color: '#8EE5A9',}, {x: 2,y: 3,color: '#8BFFBC',}, {x: 3,y: 1,color: '#67EB68',}]}, 
                      {color: '#CDF2D8',data: [[0.5, 2]],}, {color: '#8EE5A9',data: [null, [1.5, 2.3]],}, {color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, {color: '#67EB68',data: [null, null, null,[0.9,1.5]],}],
                      [{name: 'UK',data: [{x: 0,y:1,color: '#CDF2D8'}, {x: 1,y: 2,color: '#8EE5A9',}, {x: 2,y: 3,color: '#8BFFBC',}, {x: 3,y: 1,color: '#67EB68',}]}, 
                      {color: '#CDF2D8',data: [[0.5, 2]],}, {color: '#8EE5A9',data: [null, [1.5, 2.3]],}, {color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, {color: '#67EB68',data: [null, null, null,[0.9,1.5]],}],
                      [{name: 'US',data: [{x: 0,y:1,color: '#CDF2D8'}, {x: 1,y: 2,color: '#8EE5A9',}, {x: 2,y: 3,color: '#8BFFBC',}, {x: 3,y: 1,color: '#67EB68',}]}, 
                      {color: '#CDF2D8',data: [[0.5, 2]],}, {color: '#8EE5A9',data: [null, [1.5, 2.3]],}, {color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, {color: '#67EB68',data: [null, null, null,[0.9,1.5]],}],
                      [{name: 'DE',data: [{x: 0,y:1,color: '#CDF2D8'}, {x: 1,y: 2,color: '#8EE5A9',}, {x: 2,y: 3,color: '#8BFFBC',}, {x: 3,y: 1,color: '#67EB68',}]}, 
                      {color: '#CDF2D8',data: [[0.5, 2]],}, {color: '#8EE5A9',data: [null, [1.5, 2.3]],}, {color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, {color: '#67EB68',data: [null, null, null,[0.9,1.5]],}]],
        age: [[{x: 0,y:1,color: '#EFF3FF'}, {color: '#EFF3FF',data: [[0.5, 2]],}], [{x: 0,y:1,color: '#EFF3FF'}, {color: '#EFF3FF',data: [[0.5, 2]],}], [{x: 0,y:1,color: '#EFF3FF'}, {color: '#EFF3FF',data: [[0.5, 2]],}], [{x: 0,y:1,color: '#EFF3FF'}, {color: '#EFF3FF',data: [[0.5, 2]],}]],
        /*attributes: [{name: 'High income', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}, {name: 'High education', color: '#70E6AB', data: [[0.3, 1.7], [1.3, 2.0], [2.3, 2.5], [3.3, 1.8]]}],
        highIncome: {name: 'High income', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]},
        highEducation: {name: 'High education', color: '#70E6AB', data: [[0.3, 1.7], [1.3, 2.0], [2.3, 2.5], [3.3, 1.8]]},
        middleAge: {name: '31-40', color: '#BBFEFE', data: [[0.45, 0.4], [1.45, 0.8], [2.45, 1.1], [3.45, 0.9]]}*/
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
        let hasAttribute = this.attributes[0][0].data.some( attr => attr.color === attribute[0][0].color )
        if (hasAttribute) {
            let indexData = this.attributes[0][0].data.findIndex(attr => attr.color === attribute[0][0].color);
            let indexColor = this.attributes[0].findIndex(attr => attr.color === attribute[0][1].color);
            for (let i = 0; i < 4; i++) {
                this.attributes[i][0].data.splice(indexData, 1);
                this.attributes[i].splice(indexColor, 1);
            }
        } else {
            for (let i = 0; i < 4; i++) {
                this.attributes[i][0].data.push(attribute[i][0]);
                this.attributes[i].push(attribute[i][1]);
            }
        }
        console.log(this.attributes);
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
        padding-bottom: 20px;
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
    }

    /*.detail {
        display: none;
        grid-template-columns: 10% 60% 20%;
        grid-template-columns: 70% 20%;
        grid-column-gap: 3.3%;
    }

    .chart-detail {
        display: grid;
        grid-template-columns: 15% 80%;
    }*/
    
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
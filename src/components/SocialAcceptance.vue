<template>
    <Wrapper id="section5">
        <h2>Acceptance towards FRT</h2>
        <div class="overview">
            <div class="general">
                <p v-on:click="change('toOverview')">ACCEPTANCE RATE</p>
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

                <svg xmlns="http://www.w3.org/2000/svg" width="1542.386" height="85.517" viewBox="0 0 1542.386 85.517" id="buttonsTop">
                    <path id="Pfad_74" data-name="Pfad 74" d="M0,0V37.377H77.115" transform="translate(1538.386 85.517) rotate(180)" fill="none" stroke="aqua" stroke-width="8"/>
                    <path id="Pfad_101" data-name="Pfad 101" d="M0,37.376V0H218.646" transform="translate(4 48.14)" fill="none" stroke="aqua" stroke-width="8"/>
                    <text id="Sociodemographics" transform="translate(3.463 31)" fill="aqua" font-size="32" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Sociodemographics</tspan></text>
                    <g id="Gruppe_870" data-name="Gruppe 870" transform="translate(-213.497 -162.241)" opacity="0.1">
                        <line id="Linie_572" data-name="Linie 572" x2="1252" transform="translate(426.5 210.368)" fill="none" stroke="#e6e6e6" stroke-width="2"/>
                        <circle id="Ellipse_687" data-name="Ellipse 687" cx="5.5" cy="5.5" r="5.5" transform="translate(636 205)" fill="#fff"/>
                        <circle id="Ellipse_688" data-name="Ellipse 688" cx="5.5" cy="5.5" r="5.5" transform="translate(801 205)" fill="#fff"/>
                        <circle id="Ellipse_689" data-name="Ellipse 689" cx="5.5" cy="5.5" r="5.5" transform="translate(965 205)" fill="#fff"/>
                        <circle id="Ellipse_690" data-name="Ellipse 690" cx="5.5" cy="5.5" r="5.5" transform="translate(1133 205)" fill="#fff"/>
                        <circle id="Ellipse_692" data-name="Ellipse 692" cx="5.5" cy="5.5" r="5.5" transform="translate(1300 205)" fill="#fff"/>
                        <circle id="Ellipse_693" data-name="Ellipse 693" cx="5.5" cy="5.5" r="5.5" transform="translate(1466 205)" fill="#fff"/>
                    </g>
                    <g id="Gruppe_871" data-name="Gruppe 871" transform="translate(-1390.497 -369.778)">
                        <rect id="v5-button-1" width="125" height="42" rx="21" transform="translate(1673 398)" fill="#eff3ff" v-on:click="addOrRemoveTop(age, $event)"/>
                        <text id="Age" transform="translate(1725 426)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Age</tspan></text>
                    </g>
                    <g id="Gruppe_872" data-name="Gruppe 872" transform="translate(-1225.497 -422.778)">
                        <rect id="v5-button-2" width="125" height="42" rx="21" transform="translate(1673 451)" fill="#b2dbff" v-on:click="addOrRemoveTop(gender, $event)"/>
                        <text id="Gender" transform="translate(1715.5 479)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Gender</tspan></text>
                    </g>
                    <g id="Gruppe_873" data-name="Gruppe 873" transform="translate(-1051.497 -476.778)">
                        <rect id="v5-button-3" width="125" height="42" rx="21" transform="translate(1664 505)" fill="#6c93ed" v-on:click="addOrRemoveTop(incomeHigh, $event); addOrRemoveTop(incomeMedium, $event);"/>
                        <text id="Income" transform="translate(1706.5 533)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Income</tspan></text>
                    </g>
                    <g id="Gruppe_874" data-name="Gruppe 874" transform="translate(-886.497 -530.874)">
                        <rect id="v5-button-4" width="125" height="42" rx="21" transform="translate(1664 559)" fill="#4dd1f0" v-on:click="addOrRemoveTop(incomeMedium, $event); addOrRemoveTop(incomeHigh, $event);"/>
                        <text id="Education_" data-name="Education " transform="translate(1697 587)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Education </tspan></text>
                    </g>
                    <g id="Gruppe_875" data-name="Gruppe 875" transform="translate(-694.497 -584.778)">
                        <rect id="Rechteck_334" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d"/>
                        <text id="Minority_City" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Minority/City</tspan></text>
                        <rect id="v5-button-5" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#39decd"/>
                        <text id="Ethnical_minority" data-name="Ethnical minority" transform="translate(1655.5 641)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Ethnical minority</tspan></text>
                    </g>
                    <g id="Gruppe_876" data-name="Gruppe 876" transform="translate(-384.497 -476.778)">
                        <path id="v5-button-7" d="M21,0h83a21,21,0,0,1,0,42H21A21,21,0,0,1,21,0Z" transform="translate(1664 505)" fill="#086dd3"/>
                        <text id="Exposure" transform="translate(1706.5 533)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Exposure</tspan></text>
                    </g>
                    <g id="Gruppe_877" data-name="Gruppe 877" transform="translate(-529.497 -584.741)">
                        <rect id="Rechteck_334-2" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d"/>
                        <text id="Minority_City-2" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Minority/City</tspan></text>
                        <rect id="v5-button-6" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#00a5c3"/>
                        <text id="City" transform="translate(1693 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">City</tspan></text>
                    </g>
                </svg>
                
                <ForestChart v-bind:attributes="attributes"></ForestChart>

                <svg xmlns="http://www.w3.org/2000/svg" width="1547.771" height="93.771" viewBox="0 0 1547.771 93.771" id="buttonsBottom">
                    <g id="Gruppe_883" data-name="Gruppe 883" transform="translate(10516.473 -11873.805)">
                        <g id="Gruppe_880" data-name="Gruppe 880" transform="translate(-10722.107 11709.517)" opacity="0.1">
                        <line id="Linie_572" data-name="Linie 572" x2="1252" transform="translate(426.5 210.368)" fill="none" stroke="#e6e6e6" stroke-width="2"/>
                        <circle id="Ellipse_687" data-name="Ellipse 687" cx="5.5" cy="5.5" r="5.5" transform="translate(712 205)" fill="#fff"/>
                        <circle id="Ellipse_688" data-name="Ellipse 688" cx="5.5" cy="5.5" r="5.5" transform="translate(877 204.868)" fill="#fff"/>
                        <circle id="Ellipse_689" data-name="Ellipse 689" cx="5.5" cy="5.5" r="5.5" transform="translate(1040.5 205)" fill="#fff"/>
                        <circle id="Ellipse_690" data-name="Ellipse 690" cx="5.5" cy="5.5" r="5.5" transform="translate(1208.5 205)" fill="#fff"/>
                        <circle id="Ellipse_692" data-name="Ellipse 692" cx="5.5" cy="5.5" r="5.5" transform="translate(1376.5 205)" fill="#fff"/>
                        </g>
                        <path id="Pfad_130" data-name="Pfad 130" d="M0,45.63V0H77.115" transform="translate(-8978.086 11919.436) rotate(180)" fill="none" stroke="aqua" stroke-width="8"/>
                        <path id="Pfad_131" data-name="Pfad 131" d="M0,34.342V79.971H219.194" transform="translate(-10512.473 11839.463)" fill="none" stroke="aqua" stroke-width="8"/>
                        <text id="Perceived_Consequences" data-name="Perceived Consequences" transform="translate(-10513.01 11957.576)" fill="aqua" font-size="32" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Perceived Consequences</tspan></text>
                        <g id="Gruppe_882" data-name="Gruppe 882" transform="translate(-10722.244 10968.941)">
                        <g id="Gruppe_866" data-name="Gruppe 866">
                            <g id="Gruppe_839" data-name="Gruppe 839" transform="translate(-1100.746 531.576)">
                            <path id="v5-button-8" d="M21,0h83a21,21,0,0,1,0,42H21A21,21,0,0,1,21,0Z" transform="translate(1673 398)" fill="#cdf2d8" v-on:click="addOrRemoveBottom(convenience, $event)"/>
                            <text id="Convenience" transform="translate(1701 426)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Convenience</tspan></text>
                            </g>
                            <g id="Gruppe_840" data-name="Gruppe 840" transform="translate(-936.746 478.744)">
                            <rect id="v5-button-9" width="125" height="42" rx="21" transform="translate(1673 451)" fill="#8ee5a9"/>
                            <text id="Privacy_Violation" data-name="Privacy Violation" transform="translate(1689 479)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Privacy Violation</tspan></text>
                            </g>
                            <g id="Gruppe_841" data-name="Gruppe 841" transform="translate(-762.746 424.574)">
                            <rect id="v5-button-10" width="125" height="42" rx="21" transform="translate(1664 505)" fill="#8bffbc"/>
                            <text id="Efficiency" transform="translate(1700.5 533)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Efficiency</tspan></text>
                            </g>
                            <g id="Gruppe_842" data-name="Gruppe 842" transform="translate(-599 370.576)">
                            <rect id="v5-button-11" width="125" height="42" rx="21" transform="translate(1664 559)" fill="#67eb68"/>
                            <text id="Discrimination" transform="translate(1687 587)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Discrimination</tspan></text>
                            </g>
                            <g id="Gruppe_843" data-name="Gruppe 843" transform="translate(-405 317.576)">
                            <rect id="Rechteck_334" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d"/>
                            <text id="Minority_City" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Minority/City</tspan></text>
                            <rect id="v5-button-12" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#00881f"/>
                            <text id="Security" transform="translate(1681.5 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Security</tspan></text>
                            </g>
                            <g id="Gruppe_844" data-name="Gruppe 844" transform="translate(-240 316.576)">
                            <rect id="Rechteck_334-2" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d"/>
                            <text id="Minority_City-2" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Minority/City</tspan></text>
                            <rect id="v5-button-13" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#016228"/>
                            <text id="Surveillance" transform="translate(1670 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Surveillance</tspan></text>
                            </g>
                        </g>
                        </g>
                        <text id="textBottom" data-name="*p &lt; .10, **p &lt; .05, ***p &lt; .01." transform="translate(-9128.701 11946.076)" fill="aqua" font-size="16" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">*p &lt; .10, **p &lt; .05, ***p &lt; .01.</tspan></text>
                    </g>
                </svg>

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
        gender: [[{x: 1,y: 2,color: '#B2DBFF',}, {color: '#B2DBFF',data: [null, [1.5, 2.3]],}], [{x: 1,y: 2,color: '#B2DBFF',}, {color: '#B2DBFF',data: [null, [1.5, 2.3]],}], [{x: 1,y: 2,color: '#B2DBFF',}, {color: '#B2DBFF',data: [null, [1.5, 2.3]],}], [{x: 1,y: 2,color: '#B2DBFF',}, {color: '#B2DBFF',data: [null, [1.5, 2.3]],}]],
        incomeMedium: [[{x: 2,y: 3,color: '#6C93ED'}, {color: '#6C93ED',data: [null, null, [2.8,3.1]]}], [{x: 2,y: 3,color: '#6C93ED'}, {color: '#6C93ED',data: [null, null, [2.8,3.1]]}], [{x: 2,y: 3,color: '#6C93ED'}, {color: '#6C93ED',data: [null, null, [2.8,3.1]]}], [{x: 2,y: 3,color: '#6C93ED'}, {color: '#6C93ED',data: [null, null, [2.8,3.1]]}]],
        incomeHigh:[[{x: 3,y: 1,color: '#6C93ED',}, {color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}], [{x: 3,y: 1,color: '#6C93ED',}, {color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}], [{x: 3,y: 1,color: '#6C93ED',}, {color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}], [{x: 3,y: 1,color: '#6C93ED',}, {color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}]],
        convenience: [[{x: 0,y:1,color: '#CDF2D8'}, {color: '#CDF2D8',data: [[0.5, 2]],},], [{x: 0,y:1,color: '#CDF2D8'}, {color: '#CDF2D8',data: [[0.5, 2]],},], [{x: 0,y:1,color: '#CDF2D8'}, {color: '#CDF2D8',data: [[0.5, 2]],},], [{x: 0,y:1,color: '#CDF2D8'}, {color: '#CDF2D8',data: [[0.5, 2]],},]]
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
    addOrRemoveTop : function (attribute, event) {
        let hasAttribute = this.attributes[0][0].data.some( attr => attr.color + attr.y === attribute[0][0].color + attribute[0][0].y )
        if (hasAttribute) {
            event.target.setAttribute('fill', '#9D9D9D');
            let indexData = this.attributes[0][0].data.findIndex(attr => attr.color === attribute[0][0].color);
            let indexColor = this.attributes[0].findIndex(attr => attr.color === attribute[0][1].color);
            for (let i = 0; i < 4; i++) {
                this.attributes[i][0].data.splice(indexData, 1);
                this.attributes[i].splice(indexColor, 1);
            }
        } else {
            event.target.setAttribute('fill', attribute[0][0].color);
            for (let i = 0; i < 4; i++) {
                this.attributes[i][0].data.push(attribute[i][0]);
                this.attributes[i].push(attribute[i][1]);
            }
        }
    },
    addOrRemoveBottom : function (attribute, event) {
        let hasAttribute = this.attributes[4][0].data.some( attr => attr.color + attr.y === attribute[0][0].color + attribute[0][0].y )
        if (hasAttribute) {
            event.target.setAttribute('fill', '#9D9D9D');
            let indexData = this.attributes[4][0].data.findIndex(attr => attr.color === attribute[0][0].color);
            let indexColor = this.attributes[4].findIndex(attr => attr.color === attribute[0][1].color);
            for (let i = 4; i < 8; i++) {
                this.attributes[i][0].data.splice(indexData, 1);
                this.attributes[i].splice(indexColor, 1);
            }
        } else {
            event.target.setAttribute('fill', attribute[0][0].color);
            for (let i = 4; i < 8; i++) {
                this.attributes[i][0].data.push(attribute[i-4][0]);
                this.attributes[i].push(attribute[i-4][1]);
            }
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
        stroke:#4d4d4d;stroke-width:3px;
        }
    .op{
    fill:#4d4d4d;
    }

    text{
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        pointer-events: none;
    }

    #Sociodemographics {
        font-family: 'futura-pt-condensed';
        font-size: 32px;
        font-style: medium;
    }

    #buttonsTop g text {
        font-family: 'futura-pt-condensed';
        font-size: 20px;
        font-style: medium;
    }

    #Perceived_Consequences {
        font-family: 'futura-pt-condensed';
        font-size: 32px;
        font-style: medium;
    }

    #Gruppe_866 text{
        font-family: 'futura-pt-condensed';
        font-size: 20px;
        font-style: medium;
    }

    #textBottom {
        font-family: 'futura-pt-condensed';
        font-size: 16px;
        font-style: medium;
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
        padding-bottom: 10px;
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

    .chart-detail {
        text-align: center;
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
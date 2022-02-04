<template>
    <Wrapper id="section6">
        <h2 id="headline6">Odds Ratio: Acceptance of genereal use of frt</h2>
        <div class="detail">
            <div class="top">
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
                        <rect id="v5-button-1" width="125" height="42" rx="21" transform="translate(1673 398)" fill="#eff3ff" v-on:click="addOrRemoveTop(age, 'ageButton')" ref="ageButton" style="cursor:pointer;"/>
                        <text id="Age" transform="translate(1725 426)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveTop(age, 'ageButton')" style="cursor:pointer;">Age</tspan></text>
                    </g>
                    <g id="Gruppe_872" data-name="Gruppe 872" transform="translate(-1225.497 -422.778)">
                        <rect id="v5-button-2" width="125" height="42" rx="21" transform="translate(1673 451)" fill="#b2dbff" v-on:click="addOrRemoveTop(gender, 'genderButton')" ref="genderButton" style="cursor:pointer;"/>
                        <text id="Gender" transform="translate(1715.5 479)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500" v-on:click="addOrRemoveTop(gender, 'genderButton')" style="cursor:pointer;"><tspan x="0" y="0">Gender</tspan></text>
                    </g>
                    <g id="Gruppe_873" data-name="Gruppe 873" transform="translate(-1051.497 -476.778)">
                        <rect id="v5-button-3" width="125" height="42" rx="21" transform="translate(1664 505)" fill="#6c93ed" v-on:click="addOrRemoveTop(incomeHigh, 'incomeButton'); addOrRemoveTop(incomeMedium, 'incomeButton');" ref="incomeButton" style="cursor:pointer;"/>
                        <text id="Income" transform="translate(1706.5 533)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500" ><tspan x="0" y="0" v-on:click="addOrRemoveTop(incomeHigh, 'incomeButton'); addOrRemoveTop(incomeMedium, 'incomeButton');" style="cursor:pointer;">Income</tspan></text>
                    </g>
                    <g id="Gruppe_874" data-name="Gruppe 874" transform="translate(-886.497 -530.874)">
                        <rect id="v5-button-4" width="125" height="42" rx="21" transform="translate(1664 559)" fill="#4dd1f0" style="cursor:pointer;"/>
                        <text id="Education_" data-name="Education " transform="translate(1697 587)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Education </tspan></text>
                    </g>
                    <g id="Gruppe_875" data-name="Gruppe 875" transform="translate(-694.497 -584.778)">
                        <rect id="Rechteck_334" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d" style="cursor:pointer;"/>
                        <text id="Minority_City" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Minority/City</tspan></text>
                        <rect id="v5-button-5" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#39decd" style="cursor:pointer;"/>
                        <text id="Ethnical_minority" data-name="Ethnical minority" transform="translate(1655.5 641)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Ethnical minority</tspan></text>
                    </g>
                    <g id="Gruppe_876" data-name="Gruppe 876" transform="translate(-384.497 -476.778)">
                        <path id="v5-button-7" d="M21,0h83a21,21,0,0,1,0,42H21A21,21,0,0,1,21,0Z" transform="translate(1664 505)" fill="#086dd3" style="cursor:pointer;"/>
                        <text id="Exposure" transform="translate(1706.5 533)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Exposure</tspan></text>
                    </g>
                    <g id="Gruppe_877" data-name="Gruppe 877" transform="translate(-529.497 -584.741)">
                        <rect id="Rechteck_334-2" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d" style="cursor:pointer;"/>
                        <text id="Minority_City-2" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Minority/City</tspan></text>
                        <rect id="v5-button-6" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#00a5c3" style="cursor:pointer;"/>
                        <text id="City" transform="translate(1693 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">City</tspan></text>
                    </g>
                </svg>
            </div>
                
            <ForestChart v-bind:attributes="attributes"></ForestChart>

            <div class="bottom">
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
                            <path id="v5-button-8" d="M21,0h83a21,21,0,0,1,0,42H21A21,21,0,0,1,21,0Z" transform="translate(1673 398)" fill="#cdf2d8" v-on:click="addOrRemoveBottom(convenience, 'convenienceButton')" ref="convenienceButton" style="cursor:pointer;"/>
                            <text id="Convenience" transform="translate(1701 426)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveBottom(convenience, 'convenienceButton')" style="cursor:pointer;">Convenience</tspan></text>
                            </g>
                            <g id="Gruppe_840" data-name="Gruppe 840" transform="translate(-936.746 478.744)">
                            <rect id="v5-button-9" width="125" height="42" rx="21" transform="translate(1673 451)" fill="#8ee5a9" style="cursor:pointer;"/>
                            <text id="Privacy_Violation" data-name="Privacy Violation" transform="translate(1689 479)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Privacy Violation</tspan></text>
                            </g>
                            <g id="Gruppe_841" data-name="Gruppe 841" transform="translate(-762.746 424.574)">
                            <rect id="v5-button-10" width="125" height="42" rx="21" transform="translate(1664 505)" fill="#8bffbc" style="cursor:pointer;"/>
                            <text id="Efficiency" transform="translate(1700.5 533)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Efficiency</tspan></text>
                            </g>
                            <g id="Gruppe_842" data-name="Gruppe 842" transform="translate(-599 370.576)">
                            <rect id="v5-button-11" width="125" height="42" rx="21" transform="translate(1664 559)" fill="#67eb68" style="cursor:pointer;"/>
                            <text id="Discrimination" transform="translate(1687 587)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Discrimination</tspan></text>
                            </g>
                            <g id="Gruppe_843" data-name="Gruppe 843" transform="translate(-405 317.576)">
                            <rect id="Rechteck_334" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d" style="cursor:pointer;"/>
                            <text id="Minority_City" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Minority/City</tspan></text>
                            <rect id="v5-button-12" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#00881f" style="cursor:pointer;"/>
                            <text id="Security" transform="translate(1681.5 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Security</tspan></text>
                            </g>
                            <g id="Gruppe_844" data-name="Gruppe 844" transform="translate(-240 316.576)">
                            <rect id="Rechteck_334-2" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d" style="cursor:pointer;"/>
                            <text id="Minority_City-2" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Minority/City</tspan></text>
                            <rect id="v5-button-13" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#016228" style="cursor:pointer;"/>
                            <text id="Surveillance" transform="translate(1670 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Surveillance</tspan></text>
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
import ForestChart from './charts/ForestChart.vue';

export default {
  name: 'SocialAcceptanceD',
  components: {
    Wrapper,
    ForestChart
  },
  data() {
    return {
        // Hier sind die Daten für die Detailseite
        attributes: [[{showInLegend:false, name: 'CH',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#EFF3FF',name: '**'}, {x: 1,y: 2,color: '#B2DBFF',name: '**'}, {x: 2,y: 3,color: '#6C93ED',name: '**'}, {x: 3,y: 1,color: '#6C93ED',}, {x: 4,y:1,color: '#4DD1F0'}, {x: 5,y:3,color: '#4DD1F0'}, {x: 6,y:0.5,color: '#39DECD'}, {x: 7,y:4,color: '#00A5C3'}, {x: 8,y:4,color: '#086DD3'}, {x: 9,y:4,color: '#086DD3'}, {x: 10,y:4,color: '#086DD3'}, {x: 11,y:4,color: '#086DD3'}, {x: 12,y:4,color: '#086DD3'},]},
                      {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]]}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, [2.8,3.1]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}],
                      [{showInLegend:false,name: 'UK',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#EFF3FF',name: '***'}, {x: 1,y: 2,color: '#B2DBFF',}, {x: 2,y: 3,color: '#6C93ED',}, {x: 3,y: 1,color: '#6C93ED',}, {x: 4,y:1,color: '#4DD1F0'}, {x: 5,y:3,color: '#4DD1F0'}, {x: 6,y:0.5,color: '#39DECD'}, {x: 7,y:4,color: '#00A5C3'}, {x: 8,y:4,color: '#086DD3'}, {x: 9,y:4,color: '#086DD3'}, {x: 10,y:4,color: '#086DD3'}, {x: 11,y:4,color: '#086DD3'}, {x: 12,y:4,color: '#086DD3'},]}, 
                      {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}, {type: 'errorbar',color: '#6C93ED',data: [null, null, [2.8,3.1]],}, {type: 'errorbar',color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}],
                      [{showInLegend:false,name: 'US',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#EFF3FF',name: ''}, {x: 1,y: 2,color: '#B2DBFF',}, {x: 2,y: 3,color: '#6C93ED',}, {x: 3,y: 1,color: '#6C93ED',}, {x: 4,y:1,color: '#4DD1F0'}, {x: 5,y:3,color: '#4DD1F0'}, {x: 6,y:0.5,color: '#39DECD'}, {x: 7,y:4,color: '#00A5C3'}, {x: 8,y:4,color: '#086DD3'}, {x: 9,y:4,color: '#086DD3'}, {x: 10,y:4,color: '#086DD3'}, {x: 11,y:4,color: '#086DD3'}, {x: 12,y:4,color: '#086DD3'},]}, 
                      {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}, {type: 'errorbar',color: '#6C93ED',data: [null, null, [2.8,3.1]],}, {type: 'errorbar',color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}],
                      [{showInLegend:false,name: 'DE',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#EFF3FF',name: '*'}, {x: 1,y: 2,color: '#B2DBFF',}, {x: 2,y: 3,color: '#6C93ED',}, {x: 3,y: 1,color: '#6C93ED',}, {x: 4,y:1,color: '#4DD1F0'}, {x: 5,y:3,color: '#4DD1F0'}, {x: 6,y:0.5,color: '#39DECD'}, {x: 7,y:4,color: '#00A5C3'}, {x: 8,y:4,color: '#086DD3'}, {x: 9,y:4,color: '#086DD3'}, {x: 10,y:4,color: '#086DD3'}, {x: 11,y:4,color: '#086DD3'}, {x: 12,y:4,color: '#086DD3'},]}, 
                      {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}, {type: 'errorbar',color: '#6C93ED',data: [null, null, [2.8,3.1]],}, {type: 'errorbar',color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}],
                      [{showInLegend:false,name: 'CH',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#CDF2D8'}, {x: 1,y: 2,color: '#8EE5A9',}, {x: 2,y: 3,color: '#8BFFBC',}, {x: 3,y: 1,color: '#67EB68',}, {x: 4,y: 1,color: '#00881F',}, {x: 5,y: 1,color: '#016228',}]}, 
                      {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],}, {type: 'errorbar',color: '#8EE5A9',data: [null, [1.5, 2.3]],}, {type: 'errorbar',color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.9,1.5]],}],
                      [{showInLegend:false,name: 'UK',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#CDF2D8'}, {x: 1,y: 2,color: '#8EE5A9',}, {x: 2,y: 3,color: '#8BFFBC',}, {x: 3,y: 1,color: '#67EB68',}, {x: 4,y: 1,color: '#00881F',}, {x: 5,y: 1,color: '#016228',}]}, 
                      {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],}, {type: 'errorbar',color: '#8EE5A9',data: [null, [1.5, 2.3]],}, {type: 'errorbar',color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.9,1.5]],}],
                      [{showInLegend:false,name: 'US',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#CDF2D8'}, {x: 1,y: 2,color: '#8EE5A9',}, {x: 2,y: 3,color: '#8BFFBC',}, {x: 3,y: 1,color: '#67EB68',}, {x: 4,y: 1,color: '#00881F',}, {x: 5,y: 1,color: '#016228',}]}, 
                      {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],}, {type: 'errorbar',color: '#8EE5A9',data: [null, [1.5, 2.3]],}, {type: 'errorbar',color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.9,1.5]],}],
                      [{showInLegend:false,name: 'DE',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#CDF2D8'}, {x: 1,y: 2,color: '#8EE5A9',}, {x: 2,y: 3,color: '#8BFFBC',}, {x: 3,y: 1,color: '#67EB68',}, {x: 4,y: 1,color: '#00881F',}, {x: 5,y: 1,color: '#016228',}]}, 
                      {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],}, {type: 'errorbar',color: '#8EE5A9',data: [null, [1.5, 2.3]],}, {type: 'errorbar',color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.9,1.5]],}]],
        age: [[{x: 0,y:1,color: '#EFF3FF',name: '**'}, {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}], [{x: 0,y:1,color: '#EFF3FF',name: '***'}, {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}], [{x: 0,y:1,color: '#EFF3FF'}, {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}], [{x: 0,y:1,color: '#EFF3FF',name: '**'}, {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}]],
        gender: [[{x: 1,y: 2,color: '#B2DBFF',name: '**'}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}], [{x: 1,y: 2,color: '#B2DBFF',}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}], [{x: 1,y: 2,color: '#B2DBFF',}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}], [{x: 1,y: 2,color: '#B2DBFF',}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}]],
        incomeMedium: [[{x: 2,y: 3,color: '#6C93ED',name: '**'}, {type: 'errorbar',color: '#6C93ED',data: [null, null, [2.8,3.1]]}], [{x: 2,y: 3,color: '#6C93ED'}, {type: 'errorbar',color: '#6C93ED',data: [null, null, [2.8,3.1]]}], [{x: 2,y: 3,color: '#6C93ED'}, {type: 'errorbar',color: '#6C93ED',data: [null, null, [2.8,3.1]]}], [{x: 2,y: 3,color: '#6C93ED'}, {type: 'errorbar',color: '#6C93ED',data: [null, null, [2.8,3.1]]}]],
        incomeHigh:[[{x: 3,y: 1,color: '#6C93ED',}, {type: 'errorbar',color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}], [{x: 3,y: 1,color: '#6C93ED',}, {type: 'errorbar',color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}], [{x: 3,y: 1,color: '#6C93ED',}, {type: 'errorbar',color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}], [{x: 3,y: 1,color: '#6C93ED',}, {type: 'errorbar',color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}]],
        educationMedium: [],
        educationHigh: [],
        convenience: [[{x: 0,y:1,color: '#CDF2D8'}, {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],},], [{x: 0,y:1,color: '#CDF2D8'}, {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],},], [{x: 0,y:1,color: '#CDF2D8'}, {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],},], [{x: 0,y:1,color: '#CDF2D8'}, {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],},]]
    }
  },
  methods: {
    addOrRemoveColorCategory: function (addOrRemove, ref) {
        let categoryName = ref.replace('Button', '');
        let occurences = document.getElementsByClassName(categoryName);
        for (let element of occurences) {
            if (addOrRemove) {
                element.style.color = '#676767';
            } else {
                element.style.color = 'white';
            }
        }
    },
    addOrRemoveTop : function (attribute, ref) {
        let hasAttribute = this.attributes[0][0].data.some( attr => attr.color + attr.y === attribute[0][0].color + attribute[0][0].y )
        if (hasAttribute) {
            this.addOrRemoveColorCategory(hasAttribute, ref);
            this.$refs[ref].setAttribute('fill', '#9D9D9D');
            let indexData = this.attributes[0][0].data.findIndex(attr => attr.color === attribute[0][0].color);
            let indexColor = this.attributes[0].findIndex(attr => attr.color === attribute[0][1].color);
            for (let i = 0; i < 4; i++) {
                this.attributes[i][0].data.splice(indexData, 1);
                this.attributes[i].splice(indexColor, 1);
            }
        } else {
            this.addOrRemoveColorCategory(hasAttribute, ref);
            this.$refs[ref].setAttribute('fill', attribute[0][0].color);
            for (let i = 0; i < 4; i++) {
                this.attributes[i][0].data.push(attribute[i][0]);
                this.attributes[i].push(attribute[i][1]);
            }
        }
    },
    addOrRemoveBottom : function (attribute, ref) {
        let hasAttribute = this.attributes[4][0].data.some( attr => attr.color + attr.y === attribute[0][0].color + attribute[0][0].y )
        if (hasAttribute) {
            this.addOrRemoveColorCategory(hasAttribute, ref);
            this.$refs[ref].setAttribute('fill', '#9D9D9D');
            let indexData = this.attributes[4][0].data.findIndex(attr => attr.color === attribute[0][0].color);
            let indexColor = this.attributes[4].findIndex(attr => attr.color === attribute[0][1].color);
            for (let i = 4; i < 8; i++) {
                this.attributes[i][0].data.splice(indexData, 1);
                this.attributes[i].splice(indexColor, 1);
            }
        } else {
            this.addOrRemoveColorCategory(hasAttribute, ref);
            this.$refs[ref].setAttribute('fill', attribute[0][0].color);
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
    }
  }
}
</script>

<style scoped>

    #headline6 {
        margin-bottom: 20px;
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

    .detail {
        display: block;
        text-align: center;
    }

    .top svg{
        display: block;
        width: 95%
    }

    .bottom svg{
        display: block;
        width: 95%
    }
</style>
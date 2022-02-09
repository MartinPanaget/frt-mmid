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
                        <rect id="v6-button-1" width="125" height="42" rx="21" transform="translate(1673 398)" fill="#eff3ff" v-on:click="addOrRemoveTop(age, 'ageButton')" ref="ageButton" style="cursor:pointer;"/>
                        <text id="Age" transform="translate(1725 426)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveTop(age, 'ageButton')" style="cursor:pointer;">Age</tspan></text>
                    </g>
                    <g id="Gruppe_872" data-name="Gruppe 872" transform="translate(-1225.497 -422.778)">
                        <rect id="v6-button-2" width="125" height="42" rx="21" transform="translate(1673 451)" fill="#b2dbff" v-on:click="addOrRemoveTop(gender, 'genderButton')" ref="genderButton" style="cursor:pointer;"/>
                        <text id="Gender" transform="translate(1715.5 479)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500" v-on:click="addOrRemoveTop(gender, 'genderButton')" style="cursor:pointer;"><tspan x="0" y="0">Gender</tspan></text>
                    </g>
                    <g id="Gruppe_873" data-name="Gruppe 873" transform="translate(-1051.497 -476.778)">
                        <rect id="v6-button-3" width="125" height="42" rx="21" transform="translate(1664 505)" fill="#6c93ed" v-on:click="addOrRemoveTop(incomeHigh, 'incomeButton'); addOrRemoveTop(incomeMedium, 'incomeButton');" ref="incomeButton" style="cursor:pointer;"/>
                        <text id="Income" transform="translate(1706.5 533)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500" ><tspan x="0" y="0" v-on:click="addOrRemoveTop(incomeHigh, 'incomeButton'); addOrRemoveTop(incomeMedium, 'incomeButton');" style="cursor:pointer;">Income</tspan></text>
                    </g>
                    <g id="Gruppe_874" data-name="Gruppe 874" transform="translate(-886.497 -530.874)">
                        <rect id="v6-button-4" width="125" height="42" rx="21" transform="translate(1664 559)" fill="#4dd1f0" v-on:click="addOrRemoveTop(educationMedium, 'educationButton'); addOrRemoveTop(educationHigh, 'educationButton')" ref="educationButton" style="cursor:pointer;"/>
                        <text id="Education_" data-name="Education " transform="translate(1697 587)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveTop(educationMedium, 'educationButton'); addOrRemoveTop(educationHigh, 'educationButton')" style="cursor:pointer;">Education </tspan></text>
                    </g>
                    <g id="Gruppe_875" data-name="Gruppe 875" transform="translate(-694.497 -584.778)">
                        <rect id="Rechteck_334" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d"/>
                        <text id="Minority_City" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0">Minority/City</tspan></text>
                        <rect id="v6-button-5" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#39decd" v-on:click="addOrRemoveTop(ethnic, 'ethnicButton')" ref="ethnicButton" style="cursor:pointer;"/>
                        <text id="Ethnical_minority" data-name="Ethnical minority" transform="translate(1655.5 641)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveTop(ethnic, 'ethnicButton')" style="cursor:pointer;">Ethnical minority</tspan></text>
                    </g>
                    <g id="Gruppe_876" data-name="Gruppe 876" transform="translate(-384.497 -476.778)">
                        <path id="v6-button-7" d="M21,0h83a21,21,0,0,1,0,42H21A21,21,0,0,1,21,0Z" transform="translate(1664 505)" fill="#086dd3" v-on:click="addOrRemoveTop(exposure, 'exposureButton'); addOrRemoveTop(exposureFPublic, 'exposureButton'); addOrRemoveTop(exposureFPrivate, 'exposureButton'); addOrRemoveTop(exposureFandPublic, 'exposureButton'); addOrRemoveTop(exposureFandPrivate, 'exposureButton');" ref="exposureButton" style="cursor:pointer;"/>
                        <text id="Exposure" transform="translate(1706.5 533)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveTop(exposure, 'exposureButton'); addOrRemoveTop(exposureFPublic, 'exposureButton'); addOrRemoveTop(exposureFPrivate, 'exposureButton'); addOrRemoveTop(exposureFandPublic, 'exposureButton'); addOrRemoveTop(exposureFandPrivate, 'exposureButton');" style="cursor:pointer;">Exposure</tspan></text>
                    </g>
                    <g id="Gruppe_877" data-name="Gruppe 877" transform="translate(-529.497 -584.741)">
                        <rect id="Rechteck_334-2" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d" style="cursor:pointer;"/>
                        <text id="Minority_City-2" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Minority/City</tspan></text>
                        <rect id="v6-button-6" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#00a5c3" v-on:click="addOrRemoveTop(city, 'cityButton')" ref="cityButton" style="cursor:pointer;"/>
                        <text id="City" transform="translate(1693 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveTop(city, 'cityButton')" style="cursor:pointer;">City</tspan></text>
                    </g>
                </svg>
            </div>
                
            <ForestChart v-bind:attributes="attributes"></ForestChart>

            <svg xmlns="http://www.w3.org/2000/svg" width="34.645" height="34.645" viewBox="0 0 34.645 34.645" id="reload">
                <g id="v6-reset-button" transform="translate(-1734 -313)" v-on:click="deleteAttributes" style="cursor: pointer;">
                <g id="mülleimer" transform="translate(1734 313)">
                    <circle id="Ellipse_618" data-name="Ellipse 618" cx="17.322" cy="17.322" r="17.322" transform="translate(0 0)" fill="#e6e6e6"/>
                    <line id="Linie_461" data-name="Linie 461" y1="10.829" transform="translate(14.205 13.232)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                    <line id="Linie_462" data-name="Linie 462" y1="10.829" transform="translate(17.576 13.232)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                    <line id="Linie_463" data-name="Linie 463" y1="10.829" transform="translate(20.947 13.232)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                    <path id="Pfad_586" data-name="Pfad 586" d="M21.676,13.014c6.189.208,8.812,4.705,8.687,8.744s-3.092,8.738-8.687,8.616A8.739,8.739,0,0,1,15.4,15.654" transform="translate(-4.354 -4.343)" fill="none" stroke="#3c3c3c" stroke-linecap="round" stroke-width="3"/>
                    <path id="Pfad_587" data-name="Pfad 587" d="M0,3.118,3.118,0,6.236,3.118" transform="matrix(0.899, 0.438, -0.438, 0.899, 8.685, 8.67)" fill="none" stroke="#3c3c3c" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </g>
                </g>
            </svg>

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
                            <path id="v6-button-8" d="M21,0h83a21,21,0,0,1,0,42H21A21,21,0,0,1,21,0Z" transform="translate(1673 398)" fill="#cdf2d8" v-on:click="addOrRemoveBottom(convenience, 'convenienceButton')" ref="convenienceButton" style="cursor:pointer;"/>
                            <text id="Convenience" transform="translate(1701 426)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveBottom(convenience, 'convenienceButton')" style="cursor:pointer;">Convenience</tspan></text>
                            </g>
                            <g id="Gruppe_840" data-name="Gruppe 840" transform="translate(-936.746 478.744)">
                            <rect id="v6-button-9" width="125" height="42" rx="21" transform="translate(1673 451)" fill="#8ee5a9" v-on:click="addOrRemoveBottom(privacy, 'privacyButton')" ref="privacyButton" style="cursor:pointer;"/>
                            <text id="Privacy_Violation" data-name="Privacy Violation" transform="translate(1689 479)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveBottom(privacy, 'privacyButton')" style="cursor:pointer;">Privacy Violation</tspan></text>
                            </g>
                            <g id="Gruppe_841" data-name="Gruppe 841" transform="translate(-762.746 424.574)">
                            <rect id="v6-button-10" width="125" height="42" rx="21" transform="translate(1664 505)" fill="#8bffbc" v-on:click="addOrRemoveBottom(efficiency, 'efficiencyButton')" ref="efficiencyButton" style="cursor:pointer;"/>
                            <text id="Efficiency" transform="translate(1700.5 533)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveBottom(efficiency, 'efficiencyButton')" style="cursor:pointer;">Efficiency</tspan></text>
                            </g>
                            <g id="Gruppe_842" data-name="Gruppe 842" transform="translate(-599 370.576)">
                            <rect id="v6-button-11" width="125" height="42" rx="21" transform="translate(1664 559)" fill="#67eb68" v-on:click="addOrRemoveBottom(discrimination, 'discriminationButton')" ref="discriminationButton" style="cursor:pointer;"/>
                            <text id="Discrimination" transform="translate(1687 587)" fill="#3c3c3c" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveBottom(discrimination, 'discriminationButton')" style="cursor:pointer;">Discrimination</tspan></text>
                            </g>
                            <g id="Gruppe_843" data-name="Gruppe 843" transform="translate(-405 317.576)">
                            <rect id="Rechteck_334" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d" style="cursor:pointer;"/>
                            <text id="Minority_City" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Minority/City</tspan></text>
                            <rect id="v6-button-12" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#00881f" v-on:click="addOrRemoveBottom(security, 'securityButton')" ref="securityButton" style="cursor:pointer;"/>
                            <text id="Security" transform="translate(1681.5 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveBottom(security, 'securityButton')" style="cursor:pointer;">Security</tspan></text>
                            </g>
                            <g id="Gruppe_844" data-name="Gruppe 844" transform="translate(-240 316.576)">
                            <rect id="Rechteck_334-2" data-name="Rechteck 334" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#9d9d9d" style="cursor:pointer;"/>
                            <text id="Minority_City-2" data-name="Minority/City" transform="translate(1663 643)" fill="#222" font-size="24" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" style="cursor:pointer;">Minority/City</tspan></text>
                            <rect id="v6-button-13" width="125" height="42" rx="21" transform="translate(1641 613)" fill="#016228" v-on:click="addOrRemoveBottom(surveillance, 'surveillanceButton')" ref="surveillanceButton" style="cursor:pointer;"/>
                            <text id="Surveillance" transform="translate(1670 641.5)" fill="#f6f6f6" font-size="20" font-family="FuturaPTCond-Medium, Futura PT Cond" font-weight="500"><tspan x="0" y="0" v-on:click="addOrRemoveBottom(surveillance, 'surveillanceButton')" style="cursor:pointer;">Surveillance</tspan></text>
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
        attributes: [[{showInLegend:false,name: 'CN',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:0.99,color: '#EFF3FF', name: ''}, {x: 1,y: 1.24,color: '#B2DBFF', name: '**'}, {x: 2,y: 1.18,color: '#6C93ED', name: ''}, {x: 3,y: 1.47,color: '#6C93ED', name: '**'}, {x: 4,y:0.76,color: '#4DD1F0', name: ''}, {x: 5,y:0.71,color: '#4DD1F0', name: ''}, {x: 6,y:0.98,color: '#39DECD', name: ''}, {x: 7,y:0.85,color: '#00A5C3', name: ''}, {x: 8,y:1,color: '#086DD3', name: ''}, {x: 9,y:1.06,color: '#086DD3', name: ''}, {x: 10,y:1.18,color: '#086DD3', name: '***'}, {x: 11,y:0.99,color: '#086DD3', name: ''}, {x: 12,y:1.01,color: '#086DD3', name: ''},]}, 
                    {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],}, {type: 'errorbar',color: '#B2DBFF',data: [null, [1, 1.45]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, [0.85,1.6]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[1.1,1.95]],}, {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6,1.15]],}, {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.5,1.1]],}, {type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.5]],}, {type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.75,1.05]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.9,1.1]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.95,1.2]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [1.15,1.3]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],},],
                    [{showInLegend:false,name: 'GB',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#EFF3FF', name: ''}, {x: 1,y: 0.85,color: '#B2DBFF', name: ''}, {x: 2,y: 1.2,color: '#6C93ED', name: ''}, {x: 3,y: 1.07,color: '#6C93ED', name: ''}, {x: 4,y:0.89,color: '#4DD1F0', name: ''}, {x: 5,y:0.91,color: '#4DD1F0', name: ''}, {x: 6,y:0.8,color: '#39DECD', name: ''}, {x: 7,y:1.06,color: '#00A5C3', name: ''}, {x: 8,y:0.93,color: '#086DD3', name: ''}, {x: 9,y:0.97,color: '#086DD3', name: ''}, {x: 10,y:0.99,color: '#086DD3', name: ''}, {x: 11,y:1,color: '#086DD3', name: ''}, {x: 12,y:1.03,color: '#086DD3', name: ''},]}, 
                    {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],}, {type: 'errorbar',color: '#B2DBFF',data: [null, [0.7, 1.02]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, [0.9,1.7]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.7,1.5]],}, {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6,1.3]],}, {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.6,1.4]],}, {type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.05]],}, {type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,1.2]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.8,1.02]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.02]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.05]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],}, ],
                    [{showInLegend:false,name: 'US',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:1.01,color: '#EFF3FF', name: '*'}, {x: 1,y: 1.08,color: '#B2DBFF', name: ''}, {x: 2,y: 1.19,color: '#6C93ED', name: ''}, {x: 3,y: 1.17,color: '#6C93ED', name: ''}, {x: 4,y:0.82,color: '#4DD1F0', name: ''}, {x: 5,y:0.89,color: '#4DD1F0', name: ''}, {x: 6,y:1.01,color: '#39DECD', name: ''}, {x: 7,y:1.05,color: '#00A5C3', name: ''}, {x: 8,y:0.97,color: '#086DD3', name: ''}, {x: 9,y:0.96,color: '#086DD3', name: ''}, {x: 10,y:1.09,color: '#086DD3', name: '**'}, {x: 11,y:1,color: '#086DD3', name: ''}, {x: 12,y:1.01,color: '#086DD3', name: ''},]}, 
                    {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],}, {type: 'errorbar',color: '#B2DBFF',data: [null, [0.8, 1.3]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, [0.8, 1.5]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.8, 1.45]],}, {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6, 1.35]],}, {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.6,1.6]],}, {type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.85,1.25]],}, {type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,1.25]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.9,1.1]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.02]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [1,1.2]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],},],
                    [{showInLegend:false,name: 'DE',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:1,color: '#EFF3FF', name: ''}, {x: 1,y: 0.67,color: '#B2DBFF', name: '***'}, {x: 2,y: 0.86,color: '#6C93ED', name: ''}, {x: 3,y: 0.59,color: '#6C93ED', name: '***'}, {x: 4,y:2.93,color: '#4DD1F0', name: '***'}, {x: 5,y:2.63,color: '#4DD1F0', name: '***'}, {x: 6,y:0.91,color: '#39DECD', name: ''}, {x: 7,y:0.80,color: '#00A5C3', name: '**'}, {x: 8,y:1.21,color: '#086DD3', name: '***'}, {x: 9,y:0.92,color: '#086DD3', name: ''}, {x: 10,y:1.02,color: '#086DD3', name: ''}, {x: 11,y:0.97,color: '#086DD3', name: '**'}, {x: 12,y:1.01,color: '#086DD3', name: ''},]}, 
                    {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],}, {type: 'errorbar',color: '#B2DBFF',data: [null, [0.6, 0.7]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, [0.6, 1.3]],}, {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.5, 0.9]],}, {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [1.8, 4.7]],}, {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [1.6,4.5]],}, {type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.2]],}, {type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,0.95]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [1.1,1.3]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.95,1]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.98, 1.15]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],}, {type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],},],
                    [{showInLegend:false,name: 'CN',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:1.71,color: '#CDF2D8', name: '***'}, {x: 1,y: 0.58,color: '#8EE5A9', name: '***'}, {x: 2,y: 1.4,color: '#8BFFBC', name: '***'}, {x: 3,y: 0.56,color: '#67EB68', name: '**'}, {x: 4,y: 1.88,color: '#00881F', name: '***'}, {x: 5,y: 0.56,color: '#016228', name: '***'}]}, 
                    {type: 'errorbar',color: '#CDF2D8',data: [[1.3, 2.1]],}, {type: 'errorbar',color: '#8EE5A9',data: [null, [0.6, 0.8]],}, {type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.1,1.8]],}, {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.4,1.1]],}, {type: 'errorbar',color: '#00881F',data: [null, null, null, null,[1.5,2.4]],}, {type: 'errorbar',color: '#016228',data: [null, null, null, null, null,[0.5,0.8]],},],
                    [{showInLegend:false,name: 'GB',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:2.39,color: '#CDF2D8', name: '***'}, {x: 1,y: 0.43,color: '#8EE5A9', name: '***'}, {x: 2,y: 1.56,color: '#8BFFBC', name: '***'}, {x: 3,y: 0.62,color: '#67EB68', name: '**'}, {x: 4,y: 2.08,color: '#00881F', name: '***'}, {x: 5,y: 1.05,color: '#016228', name: ''}]}, 
                    {type: 'errorbar',color: '#CDF2D8',data: [[1.8, 3.2]],}, {type: 'errorbar',color: '#8EE5A9',data: [null, [0.5, 0.6]],}, {type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.3,2.1]],}, {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.5,0.85]],}, {type: 'errorbar',color: '#00881F',data: [null, null, null, null, [1.5,2.7]],}, {type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [0.8,1.35]],},],
                    [{showInLegend:false,name: 'US',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:1.51,color: '#CDF2D8', name: '***'}, {x: 1,y: 0.49,color: '#8EE5A9', name: '***'}, {x: 2,y: 1.97,color: '#8BFFBC', name: '***'}, {x: 3,y: 0.68,color: '#67EB68', name: '**'}, {x: 4,y: 2.3,color: '#00881F', name: '***'}, {x: 5,y: 1.09,color: '#016228', name: ''}]}, 
                    {type: 'errorbar',color: '#CDF2D8',data: [[1.2, 1.9]],}, {type: 'errorbar',color: '#8EE5A9',data: [null, [0.3, 0.7]],}, {type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.5,2.5]],}, {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.5,0.85]],}, {type: 'errorbar',color: '#00881F',data: [null, null, null, null, [1.7,3.9]],}, {type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [0.9,1.3]],},],
                    [{showInLegend:false,name: 'DE',dataLabels: {enabled: true,color: '#00FFFF',style: {textOutline: "0px",},align: 'left',position: 'top',formatter: function() {return this.point.name;}},data: [{x: 0,y:0.99,color: '#CDF2D8'}, {x: 1,y: 0.37,color: '#8EE5A9', name: '***'}, {x: 2,y: 1.56,color: '#8BFFBC', name: '***'}, {x: 3,y: 0.44,color: '#67EB68', name: '**'}, {x: 4,y: 3.09,color: '#00881F', name: '***'}, {x: 5,y: 1.29,color: '#016228', name: '**'}]}, 
                    {type: 'errorbar',color: '#CDF2D8',data: [[0.9, 1.2]],}, {type: 'errorbar',color: '#8EE5A9',data: [null, [0.35, 0.4]],}, {type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.2,2]],}, {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.4,0.5]],}, {type: 'errorbar',color: '#00881F',data: [null, null, null, null, [2.3,3.8]],}, {type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [1,1.6]],},]],
        age: [[{x: 0,y:0.99,color: '#EFF3FF', name: ''}, {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],},], [{x: 0,y:1,color: '#EFF3FF', name: ''},{type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],},], [{x: 0,y:1.01,color: '#EFF3FF', name: '*'},{type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],},], [{x: 0,y:1,color: '#EFF3FF', name: ''},{type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],},],],
        gender: [[{x: 1,y: 1.24,color: '#B2DBFF', name: '**'},{type: 'errorbar',color: '#B2DBFF',data: [null, [0, 1.45]],},],[{x: 1,y: 0.85,color: '#B2DBFF', name: ''},{type: 'errorbar',color: '#B2DBFF',data: [null, [0.7, 1.02]],},],[{x: 1,y: 1.08,color: '#B2DBFF', name: ''},{type: 'errorbar',color: '#B2DBFF',data: [null, [0.8, 1.3]],},],[{x: 1,y: 0.67,color: '#B2DBFF', name: '***'},{type: 'errorbar',color: '#B2DBFF',data: [null, [0.6, 0.7]],},]], 
        incomeMedium: [[{x: 2,y: 1.18,color: '#6C93ED', name: ''},{type: 'errorbar', color: '#6C93ED',data: [null, null, [0.85,1.6]],},],[{x: 2,y: 1.2,color: '#6C93ED', name: ''},{type: 'errorbar', color: '#6C93ED',data: [null, null, [0.9,1.7]],},],[{x: 2,y: 1.19,color: '#6C93ED', name: ''},{type: 'errorbar', color: '#6C93ED',data: [null, null, [0.8, 1.5]],},],[{x: 2,y: 0.86,color: '#6C93ED', name: ''},{type: 'errorbar', color: '#6C93ED',data: [null, null, [0.6, 1.3]],},]],
        incomeHigh:[[{x: 3,y: 1.47,color: '#6C93ED', name: '**'},{type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.1,1.95]],},],[{x: 3,y: 1.07,color: '#6C93ED', name: ''},{type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.7,1.5]],},],[{x: 3,y: 1.17,color: '#6C93ED', name: ''},{type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.8, 1.45]],},],[{x: 3,y: 0.59,color: '#6C93ED', name: '***'},{type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.5, 0.9]],},]],
        educationMedium: [[{x: 4,y:0.76,color: '#4DD1F0', name: ''},{type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6,1.15]],},],[{x: 4,y:0.89,color: '#4DD1F0', name: ''},{type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6,1.3]],},],[{x: 4,y:0.82,color: '#4DD1F0', name: ''},{type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6, 1.35]],},],[{x: 4,y:2.93,color: '#4DD1F0', name: '***'},{type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [1.8, 4.7]],},]],
        educationHigh: [[{x: 5,y:0.71,color: '#4DD1F0', name: ''},{type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.5,1.1]],},],[{x: 5,y:0.91,color: '#4DD1F0', name: ''},{type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.6,1.4]],},],[{x: 5,y:0.89,color: '#4DD1F0', name: ''},{type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.6,1.6]],},],[{x: 5,y:2.63,color: '#4DD1F0', name: '***'},{type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [1.6,4.5]],},]],
        ethnic: [[{x: 6,y:0.98,color: '#39DECD', name: ''},{type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.5]],},],[{x: 6,y:0.8,color: '#39DECD', name: ''},{type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.05]],},],[{x: 6,y:1.01,color: '#39DECD', name: ''},{type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.85,1.25]],},],[{x: 6,y:0.91,color: '#39DECD', name: ''},{type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.2]],},]],
        city: [[{x: 7,y:0.85,color: '#00A5C3', name: ''},{type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.75,0.05]],},],[{x: 7,y:1.06,color: '#00A5C3', name: ''},{type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,1.2]],},],[{x: 7,y:1.05,color: '#00A5C3', name: ''},{type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,1.25]],},],[{x: 7,y:0.80,color: '#00A5C3', name: '**'},{type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,0.95]],},]],
        exposure: [[{x: 8,y:1,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.9,0.1]],},],[{x: 8,y:0.93,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.8,1.02]],},],[{x: 8,y:0.97,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.9,1.1]],},],[{x: 8,y:1.21,color: '#086DD3', name: '***'},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [1.1,1.3]],},]],
        exposureFPublic: [[{x: 9,y:1.06,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.95,1.2]],},],[{x: 9,y:0.97,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.02]],},],[{x: 9,y:0.96,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.02]],},],[{x: 9,y:0.92,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.95,1]],},]],
        exposureFPrivate: [[{x: 10,y:1.18,color: '#086DD3', name: '***'},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [1.15,1.3]],},],[{x: 10,y:0.99,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.05]],},],[{x: 10,y:1.09,color: '#086DD3', name: '**'},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [1,1.2]],},],[{x: 10,y:1.02,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.98, 1.15]],},]],
        exposureFandPublic: [[{x: 11,y:0.99,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],},],[{x: 11,y:1,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],},],[{x: 11,y:1,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],},],[{x: 11,y:0.97,color: '#086DD3', name: '**'},{type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],},]],
        exposureFandPrivate: [[{x: 12,y:1.01,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],},],[{x: 12,y:1.03,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],},],[{x: 12,y:1.01,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],},],[{x: 12,y:1.01,color: '#086DD3', name: ''},{type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],},]],
        convenience: [[{x: 0,y:1.71,color: '#CDF2D8', name: '***'},{type: 'errorbar',color: '#CDF2D8',data: [[1.3, 2.1]],},], [{x: 0,y:2.39,color: '#CDF2D8', name: '***'},{type: 'errorbar',color: '#CDF2D8',data: [[1.8, 3.2]],},], [{x: 0,y:1.51,color: '#CDF2D8', name: '***'},{type: 'errorbar',color: '#CDF2D8',data: [[1.2, 1.9]],},], [{x: 0,y:0.99,color: '#CDF2D8'},{type: 'errorbar',color: '#CDF2D8',data: [[0.9, 1.2]],},],],
        privacy: [[{x: 1,y: 0.58,color: '#8EE5A9', name: '***'},{type: 'errorbar',color: '#8EE5A9',data: [null, [0.6, 0.8]],},],[{x: 1,y: 0.43,color: '#8EE5A9', name: '***'},{type: 'errorbar',color: '#8EE5A9',data: [null, [0.5, 0.6]],},],[{x: 1,y: 0.49,color: '#8EE5A9', name: '***'},{type: 'errorbar',color: '#8EE5A9',data: [null, [0.3, 0.7]],},],[{x: 1,y: 0.37,color: '#8EE5A9', name: '***'},{type: 'errorbar',color: '#8EE5A9',data: [null, [0.35, 0.4]],},]],
        efficiency: [[{x: 2,y: 1.4,color: '#8BFFBC', name: '***'},{type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.1,1.8]],},],[{x: 2,y: 1.56,color: '#8BFFBC', name: '***'},{type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.3,2.1]],},],[{x: 2,y: 1.97,color: '#8BFFBC', name: '***'},{type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.5,2.5]],},],[{x: 2,y: 1.56,color: '#8BFFBC', name: '***'},{type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.2,2]],},]],
        discrimination: [[{x: 3,y: 0.56,color: '#67EB68', name: '**'},{type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.4,1.1]],},],[{x: 3,y: 0.62,color: '#67EB68', name: '**'},{type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.5,0.85]],},],[{x: 3,y: 0.68,color: '#67EB68', name: '**'},{type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.5,0.85]],},],[{x: 3,y: 0.44,color: '#67EB68', name: '**'},{type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.4,0.5]],},]],
        security: [[{x: 4,y: 1.88,color: '#00881F', name: '***'},{type: 'errorbar',color: '#00881F',data: [null, null, null, null,[1.5,2.4]],},],[{x: 4,y: 2.08,color: '#00881F', name: '***'},{type: 'errorbar',color: '#00881F',data: [null, null, null, null, [1.5,2.7]],},],[{x: 4,y: 2.3,color: '#00881F', name: '***'},{type: 'errorbar',color: '#00881F',data: [null, null, null, null, [1.7,3.9]],},],[{x: 4,y: 3.09,color: '#00881F', name: '***'},{type: 'errorbar',color: '#00881F',data: [null, null, null, null, [2.3,3.8]],},]],
        surveillance: [[{x: 5,y: 0.56,color: '#016228', name: '***'},{type: 'errorbar',color: '#016228',data: [null, null, null, null, null,[0.5,0.8]],}],[{x: 5,y: 1.05,color: '#016228', name: ''},{type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [0.8,1.35]],}],[{x: 5,y: 1.09,color: '#016228', name: ''},{type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [0.9,1.3]],},],[{x: 5,y: 1.29,color: '#016228', name: '**'},{type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [1,1.6]],},]],
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
        this.attributes.forEach((attribute)=> {
            attribute.forEach((object, indexObject)=> {
                //object.data.splice(0, object.data.length)
                if (indexObject === 0) {
                    object.data.splice(0, object.data.length);
                }
            })
            attribute.splice(1, attribute.length);
        })
        for (let i = 1; i < 14; i++) {
            document.getElementById('v6-button-'+i).setAttribute('fill', '#9D9D9D');
            let refs = this.$refs;
            this.addOrRemoveColorCategory(true, Object.keys(refs)[i-1]);
        }
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
        width: 98%
    }

    #reload {
        position: absolute;
        top: 30%;
        right: 7.3%;
    }

    #reload:hover{
        border-radius: 50%;
        box-shadow: 0 0 10px rgb(0, 255, 255);
    }

    .bottom svg{
        display: block;
        width: 98%
    }
</style>
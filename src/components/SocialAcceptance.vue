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
            <LineChart v-bind:attributes="attributes"></LineChart>
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
import ch from '../assets/images/CH_circle_small.png';
import de from '../assets/images/DE_circle_small.png';
import gb from '../assets/images/GB_circle_small.png';
import us from '../assets/images/USA_circle_small.png';

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
            attribute:{name: 'Lower age', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'ageMiddle',
            imgActive:ageMiddleActive,
            img:ageMiddle,
            attribute:{name: 'Medium age', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'ageOld',
            imgActive:ageOldActive,
            img:ageOld,
            attribute:{name: 'Higher age', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        }
    ]},
    {gender:[
        {
            name:'genderMale',
            imgActive:genderMaleActive,
            img:genderMale,
            attribute:{name: 'Male', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'genderFemale',
            imgActive:genderFemaleActive,
            img:genderFemale,
            attribute:{name: 'Female', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        }
    ]},
    {race:[
        {
            name:'raceMinority',
            imgActive:raceMinorityActive,
            img:raceMinority,
            attribute:{name: 'Minority', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'raceMajority',
            imgActive:raceMajorityActive,
            img:raceMajority,
            attribute:{name: 'Majority', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        }
    ]},
    {life:[
        {
            name:'lifeRural',
            imgActive:lifeRuralActive,
            img:lifeRural,
            attribute:{name: 'Rural', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
        },
        {
            name: 'lifeCity',
            imgActive:lifeCityActive,
            img:lifeCity,
            attribute:{name: 'City', color: '#C7F700', data: [[0.15, 1.3], [1.15, 1.1], [2.15, 2.1], [3.15, 1.6]]}
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
        
    },
    changeImageSrc : function (src, add) {
        let modifiedSrc = '';
        const regex = /\/icon_(\w{1,10}-\w{1,8}|\w{1,10})/g;
        if(add) {
            modifiedSrc = src.match(regex)//eslint-disable-line
            console.log(modifiedSrc)
            modifiedSrc = `../assets/attributes${modifiedSrc[0]}-active.svg`
        } else {
            modifiedSrc = src.match(regex)//eslint-disable-line
            console.log(modifiedSrc)
            modifiedSrc = modifiedSrc.replace('-active', '')
            modifiedSrc = `../assets/attributes${modifiedSrc[0]}.svg`
        }
        return modifiedSrc
    },
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
        detail.display = 'grid';
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

    .overview {
        display: block;
    }

    .detail {
        display: none;
        grid-template-columns: 10% 60% 20%;
        grid-column-gap: 3.3%;
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
    }

    .countries img {
        height: 25vh;
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
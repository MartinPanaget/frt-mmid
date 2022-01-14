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
                <div class="income">
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_einkommen-low.svg">
                    </a>
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_einkommen-middle.svg">
                    </a>
                    <a href="#" v-on:click='addOrRemove(highIncome, $event)'>
                        <img src="../assets/attributes/icon_einkommen-high-active.svg">
                    </a>
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_einkommen-veryhigh.svg">
                    </a>
                </div>
                <div class="education">
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_bildung-low.svg">
                    </a>
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_bildung-middle.svg">
                    </a>
                    <a href="#" v-on:click='addOrRemove(highEducation, $event)'>
                        <img src="../assets/attributes/icon_bildung-high-active.svg">
                    </a>
                </div>
                <div class="age">
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_alter-low.svg">
                    </a>
                    <a href="#" v-on:click='addOrRemove(middleAge, $event)'>
                        <img src="../assets/attributes/icon_alter-middle.svg">
                    </a>
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_alter-high.svg">
                    </a>
                </div>
                <div class="gender">
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_weiblich.svg">
                    </a>
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_maennlich.svg">
                    </a>
                </div>
                <div class="minorityMajority">
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_minority.svg">
                    </a>
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_majority.svg">
                    </a>
                </div>
                <div class="ruralCity">
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_ansiedlung.svg">
                    </a>
                    <a href="#"> <!-- Methode einfügen -->
                        <img src="../assets/attributes/icon_city.svg">
                    </a>
                </div>
                <!-- <a href="#" @click='addOrRemove(highIncome)'>
                    <img src="../assets/attributes/icon_einkommen-high-active.svg" style="margin: 0 1rem; padding:1rem">
                    <p>Income</p>
                </a>
                <a href="#" @click='addOrRemove(highEducation)'>
                    <img src="../assets/attributes/icon_bildung-high-active.svg" style="margin: 0 1rem; padding:1rem">
                    <p>Education</p>
                </a> -->
            </div>
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
        china: china, 
        germany: germany, 
        unitedKingdom: unitedKingdom, 
        unitedStatesOfAmerica: unitedStatesOfAmerica,
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
        /*height: 20vh;*/
    }

    .countries img {
        height: 25vh;
        margin: 0 auto;
    }

    .countries-icon img {
        height: 7vh;
        margin: 45px 0 45px 80px;
    }

    .attributes div {
        margin: 20px 0;
    }

    .attributes div a img {
        height: 6vh;
        margin: 0 5px;
    }
</style>
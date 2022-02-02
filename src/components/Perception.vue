<template>
    <Wrapper id="section3">
            <h2>Perceived Benefits and Risks of Facial Recognition Technologies</h2>
            <div class="country-wrapper">
                <a href="#" class="c-ch" :class="[isActiveCH ? 'ch-active' : '']" @click="toggleCH">
                    <img src="../assets/icons/flagge-china-kontur.png">
                </a>
                <a href="#" class="c-gb" :class="[isActiveGB ? 'gb-active' : '']" @click="toggleGB">
                    <img src="../assets/icons/flagge-uk-kontur.png">
                </a>
                <a href="#" class="c-usa" :class="[isActiveUSA ? 'usa-active' : '']" @click="toggleUSA">
                    <img src="../assets/icons/flagge-usa-kontur.png">
                </a>
                <a href="#" class="c-de" :class="[isActiveDE ? 'de-active' : '']" @click="toggleDE">
                    <img src="../assets/icons/flagge-de-kontur.png">
                </a>
            </div>
            <div class="x-Axis">
                <div class="first"> 
                    <img :src='de' style="width:25px">
                    <img :src='uk' style="width:25px">
                    <img :src='usa' style="width:25px">
                    <img :src='ch' style="width:25px"> 
                </div>
                <div class="second"> 
                    <img :src='de' style="width:25px">
                    <img :src='uk' style="width:25px">
                    <img :src='usa' style="width:25px">
                    <img :src='ch' style="width:25px"> 
                </div>
                <div class="third"> 
                    <img :src='de' style="width:25px">
                    <img :src='uk' style="width:25px">
                    <img :src='usa' style="width:25px">
                    <img :src='ch' style="width:25px"> 
                </div>
            </div>
        <LollipopSeries></LollipopSeries>
    </Wrapper>
</template>

<script>
import de from '../assets/icons/flagge-de.png';
import uk from '../assets/icons/flagge-uk.png';
import usa from '../assets/icons/flagge-usa.png';
import ch from '../assets/icons/flagge-china.png';
import Wrapper from './Wrapper.vue';
import LollipopSeries from './charts/LollipopSeries.vue';

export default {
  name: 'Perception',
  components: {
    LollipopSeries,
    Wrapper
  },
  data(){
      return{
          de: de,
          uk:uk,
          usa:usa,
          ch:ch,
          isActiveCH: true,
          isActiveDE: true,
          isActiveUSA: false,
          isActiveGB: false,
          dataArray: Array,
      }
  },
  methods:{
      toggleCH: function() {
        var chart = document.getElementsByClassName('lollipop-chart');
        var i;
        if (!this.isActiveCH) {
            this.isActiveCH = true;
            this.dataArray = [65, -31,56,-3,62,-27];
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[0].setData([this.dataArray[i]]);
            }
        } else {
            this.isActiveCH = false;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[0].setData([0]);
            }
        }
      },
      toggleUSA: function() {
        var i;
        var chart = document.getElementsByClassName('lollipop-chart');
        if (!this.isActiveUSA) {
            this.isActiveUSA = true;
            this.dataArray = [33, -45,33,-17,67,-56];
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[2].setData([this.dataArray[i]]);
            }

        } else {
            this.isActiveUSA = false;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[2].setData([0]);
            }
        }
      },
      toggleGB: function() {
        var i;
        var chart = document.getElementsByClassName('lollipop-chart');
        if (!this.isActiveGB) {
            this.isActiveGB = true;
            this.dataArray = [21, -41,26,-17,64,-57];
           for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[1].setData([this.dataArray[i]]);
            }

        } else {
            this.isActiveGB = false;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[1].setData([0]);
            }
        }
      },
      toggleDE: function() {
        var i;
        var chart = document.getElementsByClassName('lollipop-chart');
        if (!this.isActiveDE) {
            this.isActiveDE = true;
            this.dataArray = [23, -49,21,-15,55,-63];
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[3].setData([this.dataArray[i]]);
            }

        } else {
            this.isActiveDE = false;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[3].setData([0]);
            }
        }
      },
  }
}


</script>

<style scoped>
    .first{
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 9%;
        left: 588px; 
        right: 0; 
        top: 549.5px;
        /* margin-left: auto; 
        margin-right: auto;  */
        z-index: 20;
    }
    .second{
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 9%;
        left: 939px; 
        right: 0; 
        top: 549.5px;
        /* margin-left: auto; 
        margin-right: auto;  */
        z-index: 20;
    }
    .third{
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 9%;
        left: 1289px; 
        right: 0; 
        top: 549.5px;
        /* margin-left: auto; 
        margin-right: auto;  */
        z-index: 20;
    }
    .country-wrapper{
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 30%;
        left: 0; 
        right: 0; 
        top: 120px;
        margin-left: auto; 
        margin-right: auto; 
        z-index: 20;
        /* padding-top: 100px; */
    }

    a img{
        width: 50px;
        /* border: 3px solid rgba(109, 215, 223, 0.877); */
        border: 7px solid transparent;
        border-radius: 50%;
        margin: 0 40px; 
        padding: 1rem;
        box-shadow: transparent 0px 0px 9px;
        /* padding:0.3rem; */
        /* transition-property: padding, border;
        transition-duration: .4s;
        transition-timing-function: linear; */
        transition-property: border, box-shadow;
        transition-duration: .4s;
        transition-timing-function: linear;
    }
    /* a img:hover{
        padding:1rem;
        border: 7px solid #C7F700;
        box-shadow: #C7F700 0px 0px 9px, inset #C7F700 0px 0px 9px;
    } */

    a.ch-active img{
        padding:1rem;
        border: 7px solid #C7F700;
        box-shadow: #C7F700 0px 0px 9px, inset #C7F700 0px 0px 9px;
    }
    a.de-active img{
        padding:1rem;
        border: 7px solid #23EFEF;
        box-shadow: #23EFEF 0px 0px 9px, inset #23EFEF 0px 0px 9px;
    }
    a.gb-active img{
        padding:1rem;
        border: 7px solid #70E6AB;
        box-shadow: #70E6AB 0px 0px 9px, inset #70E6AB 0px 0px 9px;
    }
    a.usa-active img{
        padding:1rem;
        border: 7px solid #0CBAF7;
        box-shadow: #0CBAF7 0px 0px 9px, inset #0CBAF7 0px 0px 9px;
    }
</style>
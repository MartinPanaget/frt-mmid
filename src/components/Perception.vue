<template>
    <Wrapper id="section3">
            <h2>Perceived Benefits<br/>and Risks of FRTS</h2>
            <!-- <button @click="test">DE ein</button>
            <button @click="testen">DE aus</button> -->
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
        <LollipopSeries></LollipopSeries>
    </Wrapper>
</template>

<script>
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
          isActiveCH: true,
          isActiveDE: true,
          isActiveUSA: false,
          isActiveGB: false,
      }
  },
  methods:{
      toggleCH: function() {
        var chart = document.getElementsByClassName('lollipop-chart');
        var i;
        if (!this.isActiveCH) {
            this.isActiveCH = true;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[0].show();
            }
        } else {
            this.isActiveCH = false;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[0].hide();
            }
        }
      },
      toggleUSA: function() {
        var i;
        var chart = document.getElementsByClassName('lollipop-chart');
        if (!this.isActiveUSA) {
            this.isActiveUSA = true;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[2].show();
            }

        } else {
            this.isActiveUSA = false;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[2].hide();
            }
        }
      },
      toggleGB: function() {
        var i;
        var chart = document.getElementsByClassName('lollipop-chart');
        if (!this.isActiveGB) {
            this.isActiveGB = true;
           for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[1].show();
            }

        } else {
            this.isActiveGB = false;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[1].hide();
            }
        }
      },
      toggleDE: function() {
        var i;
        var chart = document.getElementsByClassName('lollipop-chart');
        if (!this.isActiveDE) {
            this.isActiveDE = true;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[3].show();
            }

        } else {
            this.isActiveDE = false;
            for(i=0; i<6; i++){
                chart[i].__vue__.chart.series[3].hide();
            }
        }
      },
      test: function(){
                var chart = document.getElementsByClassName('lollipop-chart');
                console.log(chart);
                chart[0].__vue__.chart.series[0].data[0].visible = false;
                // console.log(chart[0].__vue__.chart.series[0].data[0].options);
                // console.log(chart[0].__vue__.chart.series[0].data[0].options.visible);
      },
      testen: function(){
                var chart = document.getElementsByClassName('lollipop-chart');
                console.log(chart);
                chart[0].__vue__.chart.series[0].show();
                // console.log(chart[0].__vue__.chart.series[0].data[0].options);
                // console.log(chart[0].__vue__.chart.series[0].data[0].options.visible);
      }
  }
}


</script>

<style scoped>
    .country-wrapper{
        width:50%; 
        position: absolute;
        top: 147px;
        margin-left: auto;
        margin-right: auto;
        left: 240px;
        right: 0;
        text-align: center;
    }

    a img{
        width: 75px;
        border: 7px solid rgba(0, 0, 0, 0);
        border-radius: 50%;
        margin: 0 40px; 
        padding:1rem
    }
    a.ch-active img{
        border: 7px solid #C7F700;
        border-radius: 50%;
        box-shadow: #C7F700 0px 0px 9px, inset #C7F700 0px 0px 9px;
    }
    a.de-active img{
        border: 7px solid #23EFEF;
        border-radius: 50%;
        box-shadow: #23EFEF 0px 0px 9px, inset #23EFEF 0px 0px 9px;
    }
    a.gb-active img{
        border: 7px solid #70E6AB;
        border-radius: 50%;
        box-shadow: #70E6AB 0px 0px 9px, inset #70E6AB 0px 0px 9px;
    }
    a.usa-active img{
        border: 7px solid #0CBAF7;
        border-radius: 50%;
        box-shadow: #0CBAF7 0px 0px 9px, inset #0CBAF7 0px 0px 9px;
    }
</style>
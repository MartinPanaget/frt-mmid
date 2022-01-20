<template>
    <Wrapper id="section3">
            <h2>Perceived Risks and Benefits of Facial Recognition Technologies</h2>
            <!-- <button @click="test">DE ein</button>
            <button @click="testen">DE aus</button> -->
            <div class="country-wrapper">
                <a href="#" :class="[isActiveCH ? 'ch' : '']" @click="toggleCH">
                    <img src="../assets/images/CH_circle_small.png" style="margin: 0 1rem; padding:1rem">
                </a>
                <a href="#" :class="[isActiveGB ? 'gb' : '']" @click="toggleGB">
                    <img src="../assets/images/GB_circle_small.png" style="margin: 0 1rem; padding:1rem">
                </a>
                <a href="#" :class="[isActiveUSA ? 'usa' : '']" @click="toggleUSA">
                    <img src="../assets/images/USA_circle_small.png" style="margin: 0 1rem; padding:1rem">
                </a>
                <a href="#" :class="[isActiveDE ? 'de' : '']" @click="toggleDE">
                    <img src="../assets/images/DE_circle_small.png" style="margin: 0 1rem; padding:1rem">
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
        margin:auto;
        text-align: center;
    }
    a.ch img{
        border: 7px solid #C7F700;
        border-radius: 50%;
        box-shadow: #C7F700 0px 0px 9px, inset #C7F700 0px 0px 9px;
    }
    a.de img{
        border: 7px solid #23EFEF;
        border-radius: 50%;
        box-shadow: #23EFEF 0px 0px 9px, inset #23EFEF 0px 0px 9px;
    }
    a.gb img{
        border: 7px solid #70E6AB;
        border-radius: 50%;
        box-shadow: #70E6AB 0px 0px 9px, inset #70E6AB 0px 0px 9px;
    }
    a.usa img{
        border: 7px solid #0CBAF7;
        border-radius: 50%;
        box-shadow: #0CBAF7 0px 0px 9px, inset #0CBAF7 0px 0px 9px;
    }
</style>
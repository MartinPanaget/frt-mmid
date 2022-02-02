<template>
    <Wrapper id="section4">
            <div class="general">
                <h2>Perceived Occurrences of Facial Recognition Technologies</h2>            
                
                <div class="round-dots">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.04 105.03">
                    <!-- <defs>
                        <style>.cls-1{fill:#e6e6e6;}.cls-2{fill:none;stroke:#e6e6e6;stroke-width:3px;}</style>
                    </defs> -->
                    <g id="Ebene_2" data-name="Ebene 2">
                        <g id="Ebene_1-2" data-name="Ebene 1">
                            <polyline class="cls-2" points="574.22 15.31 506.22 52.31 88.22 52.31 13.22 74.31"/>
                            <g id="Gruppe_514" data-name="Gruppe 514">
                                    <circle fill="#e6e6e6" id="Ellipse_555" data-name="Ellipse 546" class="cls-1 op" cx="160.04" cy="53" r="10"/>
                                    <circle fill="#e6e6e6" id="Ellipse_519" data-name="Ellipse 519" class="cls-1 op" cx="14.5" cy="75.11" r="14.5"/>
                                    <circle fill="#e6e6e6" id="Ellipse_518" data-name="Ellipse 518" class="cls-1 op" cx="572.54" cy="14.5" r="14.5"/>
                                    <circle fill="#e6e6e6" id="Ellipse_444" data-name="Ellipse 520" class="cls-1 op" cx="438.04" cy="53" r="10"/>
                                    <circle fill="#e6e6e6" id="Ellipse_548" data-name="Ellipse 548" class="cls-1 op" cx="297.04" cy="53" r="10"/>


                                    <circle @click="all" id="c-all" :class="{bactive:allActive}" data-name="Ellipse 545" class="cls-1" cx="90.06" cy="53.03" r="42"/>
                                    <text x="90.06" y="53.03" text-anchor="middle" stroke="#222222" stroke-width="1px" alignment-baseline="middle">ALL</text>

                                    <circle @click="min" id="c-min" :class="{bactive:minActive}" data-name="Ellipse 545" class="cls-1" cx="228.05" cy="53.03" r="42"/>
                                    <text x="228.05" y="53.03" text-anchor="middle" stroke="#222222" stroke-width="1px" alignment-baseline="middle">MIN.</text>

                                    <circle @click="max" id="c-max" :class="{bactive:maxActive}" data-name="Ellipse 547" class="cls-1" cx="366.05" cy="53.03" r="42"/>
                                    <text x="366.05" y="53.03" text-anchor="middle" stroke="#222222" stroke-width="1px" alignment-baseline="middle">MAX.</text>

                                    <circle @click="avrg" id="c-avrg" :class="{bactive:avrgActive}" data-name="Ellipse 517" class="cls-1" cx="504.04" cy="53.03" r="42"/>
                                    <text x="504.04" y="53.03" text-anchor="middle" stroke="#222222" stroke-width="1px" alignment-baseline="middle">AVRG</text>
                            </g>
                        </g>
                    </g>
                </svg>




                    <!-- <div class="dot">
                        <a href="#" @click="min">MIN</a>
                    </div>
                    <div class="dot">
                        <a href="#" @click="max">MAX</a>
                    </div>
                    <div class="dot">
                        <a href="#" @click="avg">AVG</a>
                    </div>
                    <div class="dot">
                        <a href="#" @click="all">ALL</a>
                    </div> -->
                </div>
            </div>
            <PackedBubbles></PackedBubbles>
            <img id="reset" :src='reset' @click="resetBtn">
    </Wrapper>
</template>

<script>
import Wrapper from './Wrapper.vue';
import PackedBubbles from './charts/PackedBubbles.vue';
import reset from '../assets/icons/v4-reset.svg';

export default {
  name: 'Awareness',
  components: {
    PackedBubbles,
    Wrapper
  },
  data() {
    return {
        maxActive:false,
        minActive:false,
        avrgActive:false,
        allActive: true,
        reset: reset
    }
  },
  methods:{
      min:function(){
        var i;
        var k;
        var chart = document.getElementsByClassName('bubble-chart');
        for(i=0; i<10; i++){
            chart[i].__vue__.chart.series[0].show();
        }
        for(i=0; i<10; i++){
            for(k=1; k<5; k++){
                chart[i].__vue__.chart.series[k].hide();
            }
        }
        this.maxActive = false;
        this.avrgActive = false;
        this.allActive = false;
        this.minActive = true; 
       
      },
      max:function(){
        var i;
        var k;
        var chart = document.getElementsByClassName('bubble-chart');

        for(i=0; i<10; i++){
            chart[i].__vue__.chart.series[3].show();
        }
        for(i=0; i<10; i++){
            chart[i].__vue__.chart.series[4].hide();
            for(k=0; k<3; k++){
                chart[i].__vue__.chart.series[k].hide();
            }
        }
        this.minActive = false;
        this.avrgActive = false;
        this.allActive = false;
        this.maxActive = true;
      },
      avrg:function(){
        var i;
        var k;
        var chart = document.getElementsByClassName('bubble-chart');

        for(i=0; i<10; i++){
            for(k=0; k<4; k++){
                chart[i].__vue__.chart.series[k].hide();
                }
        }
        for(i=0; i<10; i++){
            chart[i].__vue__.chart.series[4].show();
        }

        this.maxActive = false;
        this.minActive = false;
        this.allActive = false;
        this.avrgActive = true;
      },
      all:function(){
        var i;
        var k;
        var chart = document.getElementsByClassName('bubble-chart');

        for(i=0; i<10; i++){
            chart[i].__vue__.chart.series[4].hide();
            for(k=0; k<4; k++){
                chart[i].__vue__.chart.series[k].show();
            }
        }
        this.maxActive = false;
        this.avrgActive = false;
        this.minActive = false;
        this.allActive = true;
      },
      resetBtn:function(){
          switch (document.getElementsByClassName('bactive')[0].id){
                case "c-all": 
                    this.all();
                    break;
                case "c-min":
                    this.min();
                    break;
                case "c-max":
                    this.max();
                    break;
                case "c-avrg":
                    this.avrg();
                    break;
          }
      }
  }
}

var maxButton = document.getElementById('c-max');
// var minButton = document.getElementById('c-min');
// var avrgButton = document.getElementById('c-avrg');
// var allButton = document.getElementById('c-all');

console.log(maxButton);


</script>

<style scoped>

.cls-1{
    fill:#e6e6e6;
    cursor: pointer;
    }
.cls-1.bactive{
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
    font-family: 'futura-pt-condensed', sans-serif;
    font-size: 32px;
    pointer-events: none;
}

.dot {
    margin: 0 1rem;
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

#reset{
    position: absolute;
    /* right: 50px; */
    bottom: 20px;
     left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    border: 0px solid transparent;
    border-radius: 50%;
}

#reset:hover{
    /* border: 5px solid rgb(0, 255, 255); */
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(0, 255, 255);
}
</style>
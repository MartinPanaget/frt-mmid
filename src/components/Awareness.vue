<template>
    <Wrapper id="section4">
            <div class="general">
                <h2>Perceived use of Facial Recognition Technologies</h2>            
                
                <div class="round-dots">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.04 95.03">
                    <!-- <defs>
                        <style>.cls-1{fill:#e6e6e6;}.cls-2{fill:none;stroke:#e6e6e6;stroke-width:3px;}</style>
                    </defs> -->
                    <g id="Ebene_2" data-name="Ebene 2">
                        <g id="Ebene_1-2" data-name="Ebene 1">
                            <polyline class="cls-2" points="574.22 15.31 506.22 52.31 88.22 52.31 13.22 74.31"/>
                            <g id="Gruppe_514" data-name="Gruppe 514">
                                    <circle fill="#e6e6e6" id="Ellipse_555" data-name="Ellipse 546" class="cls-1" cx="160.04" cy="53" r="10"/>
                                    <circle fill="#e6e6e6" id="Ellipse_519" data-name="Ellipse 519" class="cls-1" cx="14.5" cy="75.11" r="14.5"/>
                                    <circle fill="#e6e6e6" id="Ellipse_518" data-name="Ellipse 518" class="cls-1" cx="572.54" cy="14.5" r="14.5"/>
                                    <circle fill="#e6e6e6" id="Ellipse_444" data-name="Ellipse 520" class="cls-1" cx="438.04" cy="53" r="10"/>
                                    <circle fill="#e6e6e6" id="Ellipse_548" data-name="Ellipse 548" class="cls-1" cx="297.04" cy="53" r="10"/>

                                    <circle id="c-max" data-name="Ellipse 545" class="cls-1" cx="228.05" cy="53.03" r="42"/>
                                    <circle @click="min" id="c-min" data-name="Ellipse 545" class="cls-1 active" cx="90.06" cy="53.03" r="42"/>
                                    <circle id="c-avrg" data-name="Ellipse 547" class="cls-1" cx="366.05" cy="53.03" r="42"/>
                                    <circle id="c-all" data-name="Ellipse 517" class="cls-1" cx="504.04" cy="53.03" r="42"/>
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
    </Wrapper>
</template>

<script>
import Wrapper from './Wrapper.vue';
import PackedBubbles from './charts/PackedBubbles.vue';

export default {
  name: 'Awareness',
  components: {
    PackedBubbles,
    Wrapper
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
            for(k=1; k<4; k++){
                chart[i].__vue__.chart.series[k].hide();
            }
        }
          
      },
      max:function(){
        var i;
        var k;
        var chart = document.getElementsByClassName('bubble-chart');

        for(i=0; i<10; i++){
            chart[i].__vue__.chart.series[3].show();
        }
        for(i=0; i<10; i++){
            for(k=0; k<3; k++){
                chart[i].__vue__.chart.series[k].hide();
            }
        }
      },
      avg:function(){
        alert('avg');
      },
      all:function(){
        var i;
        var k;
        var chart = document.getElementsByClassName('bubble-chart');

        for(i=0; i<10; i++){
            for(k=0; k<4; k++){
                chart[i].__vue__.chart.series[k].show();
            }
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

.cls-1{fill:#e6e6e6;}
.cls-1.active{fill:red}
.cls-2{fill:none;stroke:#e6e6e6;stroke-width:3px;}


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
</style>
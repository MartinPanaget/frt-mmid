<template>
    <Wrapper>
            <div class="general">
                <h2>Perceived use of Facial Recognition Technologies</h2>
                <div class="round-dots">
                    <div class="dot">
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
                    </div>
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
</script>

<style scoped>
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
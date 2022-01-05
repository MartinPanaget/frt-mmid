<template>
    <div class="BubbleChart" @click="expose">
        <highcharts class="bubble-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    props: {
        series: Array,
        title: String
    },
    methods:{
        expose: function(){
            console.log(this.$children[0]);
            
            // var chart = document.getElementsByClassName('bubble-chart');
            // console.log(chart[0].__vue__);
            var i;
            for(i=0; i<4; i++){
                this.$children[0].chart.series[i].show();
            }
            // chart[0].__vue__.chart.series[0].hide();
            
            // chart[0].__vue__.chart.series[1].options.layoutAlgorithm.bubblePadding = 5
            // chart[0].__vue__.chart.series.data[0].visible = true;
            // chart[0].__vue__.chart.series.data[2].visible = true;
            // chart[0].__vue__.chart.series.data[3].visible = true;
            // chart[0].__vue__.chart.series.options.layoutAlgorithm.bubblePadding = 5
            // console.log(chart);
            // console.log(chart[0].__vue__.chart.series);
            // alert('test');
            // this.series.data[0].visible = true;  
            // this.series.data[2].visible = true; 
            // this.series.data[3].visible = true; 
            // this.series.options.layoutAlgorithm.bubblePadding = 5;
        }
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'packedbubble',
                    width: '250',
                    height: '300',
                    backgroundColor: '#5F5E5E',
                    style:{
                        fontFamily: 'Avenir, Helvetica, sans-serif'
                    }
                },
                plotOptions: {
                    packedbubble: {
                        minSize: 20,
                        maxSize: 80,
                        marker:{
                            fillOpacity:1
                        },
                        layoutAlgorithm:{
                            bubblePadding: 5
                        },
                        // point:{
                        //     events:{
                        //         // mouseOver: function(){
                        //         //     this.series.data[0].visible = true;  
                        //         //     this.series.data[2].visible = true; 
                        //         //     this.series.data[3].visible = true; 
                        //         //     this.series.options.layoutAlgorithm.bubblePadding = 5;
                        //         // },
                        //         // mouseOut: function(){
                        //         //     this.series.data[0].visible = false;  
                        //         //     this.series.data[2].visible = false; 
                        //         //     this.series.data[3].visible = false;  
                        //         //     this.series.options.layoutAlgorithm.bubblePadding = -100;
                        //         // },
                        //         cursor: 'pointer',
                        //         click: function(){
                        //             // console.log(typeof this);
                        //             this.series.data[0].visible = true;  
                        //             this.series.data[1].visible = true; 
                        //             this.series.data[2].visible = true; 
                        //             this.series.data[3].visible = true; 
                        //             // console.log(this.series.options.layoutAlgorithm.bubblePadding);
                        //             this.series.options.layoutAlgorithm.bubblePadding = 5;
                        //         }
                        //     }
                        // }
                    },
                },
                title: {
                    text: this.title,
                    style:{
                        color:'white',
                    },
                },
                tooltip: {
                    valueSuffix: '%'
                },
                credits: {
                    enabled: false
                },
                series: this.series
            }
        }
    }
}
</script>


<template>
    <div class="BubbleChart" @click="expose">
        <highcharts class="bubble-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    props: {
        series: Array,
        title: String,
        minSize: Number,
        maxSize: Number
    },
    methods:{
        expose: function(){
            var i;
            for(i=0; i<4; i++){
                this.$children[0].chart.series[i].show();
            }
        }
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'packedbubble',
                    width: '250',
                    height: '300',
                    // backgroundColor: '#5F5E5E',
                    backgroundColor: '#3C3C3C',
                    style:{
                        fontFamily: 'Montserrat, sans-serif'
                    }
                },
                plotOptions: {
                    packedbubble: {
                        minSize: this.minSize,
                        maxSize: this.maxSize,
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
                        fontSize:'18px'
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


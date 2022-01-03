<template>
    <div class="BubbleChart">
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    props: {
        series: Array,
        title: String
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
                            bubblePadding: -100
                        },
                        point:{
                            events:{
                                // mouseOver: function(){
                                //     this.series.data[0].visible = true;  
                                //     this.series.data[2].visible = true; 
                                //     this.series.data[3].visible = true; 
                                //     this.series.options.layoutAlgorithm.bubblePadding = 5;
                                // },
                                // mouseOut: function(){
                                //     this.series.data[0].visible = false;  
                                //     this.series.data[2].visible = false; 
                                //     this.series.data[3].visible = false;  
                                //     this.series.options.layoutAlgorithm.bubblePadding = -100;
                                // },
                                cursor: 'pointer',
                                click: function(){
                                    // console.log(typeof this);
                                    this.series.data[0].visible = true;  
                                    this.series.data[1].visible = true; 
                                    this.series.data[2].visible = true; 
                                    this.series.data[3].visible = true; 
                                    // console.log(this.series.options.layoutAlgorithm.bubblePadding);
                                    this.series.options.layoutAlgorithm.bubblePadding = 5;
                                }
                            }
                        }
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


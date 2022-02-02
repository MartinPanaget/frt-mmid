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
        minSize: String,
        maxSize: String,
        height: String
    },
    methods:{
        expose: function(){
            var i;
            this.$children[0].chart.series[4].hide();
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
                    width: '300',
                    height: this.height,
                    // backgroundColor: '#5F5E5E',
                    margin: [10,0],
                    backgroundColor: '#3C3C3C',
                    style:{
                        fontFamily: 'futura-pt-condensed, sans-serif',
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
                        dataLabels:{
                            enabled: true,
                            style: {
                                color: '#222222',
                                textOutline: 'none',
                                fontWeight: 'normal',
                                fontSize: '18px'
                            },
                            formatter:function(){
                                if(this.series.name != 'Average'){
                                    var name = this.series.name.slice(-3); 
                                    return "<strong>"+name +"<br>"+ this.y+"%"+"</strong>"
                                }else{
                                    return "<strong>"+"&#8709; "+ this.y+"%"+"</strong>"
                                }
                            }
                        }
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
                        color:'#F6F6F6',
                        fontSize:'28px',
                    },
                },
                tooltip: {
                    enabled: false,
                    valueSuffix: '%',
                    style:{
                        fontSize: '18px'
                    },
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


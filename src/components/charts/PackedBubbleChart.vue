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


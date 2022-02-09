<template>
    <div class="LollipopChart">
        <highcharts class="lollipop-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default{
   props: {
        series: Array,
        titleAlign: String,
        title:String,
        backgroundColor: String,
        min: String,
        max: String,
    },
    data() {
        return { 
            chartOptions:{
                chart: {
                    plotBackgroundColor: this.backgroundColor,
                    backgroundColor: '#3C3C3C',
                    type: 'lollipop',
                    inverted: false,
                    width: 300,
                    height: 300,
                    opacity: '50%',
                    style:{
                        fontFamily: 'futura-pt-condensed, sans-serif'
                    }
                },
                title: {
                    style:{
                        color:'#00FFFF',
                        fontSize:'28px',
                        fontWeight: 'bolder'
                    },
                    text: this.title,
                    verticalAlign: this.titleAlign,
                },

                tooltip: {
                    enabled:true,
                    shared: false,
                    backgroundColor: 'rgba(95, 94, 94, 0.9)',
                    formatter: function(){
                        if(this.y < 0 || this.y > 0){
                            return '<strong>'+this.series.name+'</strong>'+': '+Math.abs(this.y)+'%'
                        }else{
                            return 'inactive'
                        }
                    },
                    style:{
                        fontSize: '18px',
                        color: '#F6F6F6',
                    },
                },
                yAxis:{
                    gridLineColor: '#3C3C3C',
                    visible: true,
                    min: this.min,
                    max: this.max,
                    labels:{
                        enabled: false
                    },
                    title:{
                       text: ''
                   } 
                },
                xAxis: {
                    visible: false,
                    min:-0.25,
                    max:3.25
                },
                plotOptions:{
                    lollipop:{
                        zones: [{
                            value: -1, // Values up to 10 (not including) ...
                            color: this.color // ... have the color blue.
                        },
                        {
                            value: 1,
                            color: 'transparent'

                        },
                        {
                            color: this.color // Values from 10 (including) and up have the color red
                        }
                        ],
                        dataLabels:{
                            enabled: true,
                            inside: false,
                            padding: 10,
                            style: {
                                color: '#f6f6f6',
                                textOutline: 'none',
                                fontWeight: 'normal',
                                fontSize: '18px'
                            },
                            formatter:function(){
                                if (Math.abs(this.y) > 0){
                                    return Math.abs(this.y);
                                }
                            }
                        }
                    }
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

<style scoped>
    .LollipopChart {
        padding-bottom: 0.25rem;
    }
</style>

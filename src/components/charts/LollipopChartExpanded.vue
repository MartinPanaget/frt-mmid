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
        backgroundColor: String
    },
    data() {
        return {
            chartOptions:{
                chart: {
                    plotBackgroundColor: this.backgroundColor,
                    backgroundColor: '#5F5E5E',
                    type: 'lollipop',
                    inverted: false,
                    width: 350,
                    height: 300,
                    opacity: '50%',
                    style:{
                        fontFamily: 'Avenir, Helvetica, sans-serif'
                    }
                },
                title: {
                    style:{
                        color:'white',
                        fontSize:'18px'
                    },
                    text: this.title,
                    verticalAlign: this.titleAlign,
                },

                tooltip: {
                    shared: true
                },
                yAxis:{
                    labels:{
                        enabled: true,
                        style:{
                            color:'white',
                    },
                    },
                    title:{
                       text: ''
                   } 
                },
                xAxis: {
                    visible: false,
                    type: 'category',
                    labels:{
                        // y:-85,
                        enabled: true,
                        useHTML: true,
                        allowOverlap: true,
                        formatter: function(){
                            return '<img src="../../assets/images/USA_circle_small.png">';
                        }
                    }
                },
                plotOptions:{
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

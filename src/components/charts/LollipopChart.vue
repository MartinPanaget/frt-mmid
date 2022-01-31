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
                    backgroundColor: '#3C3C3C',
                    type: 'lollipop',
                    inverted: false,
                    width: 350,
                    height: 340,
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
                    shared: false
                },
                yAxis:{
                    visible: true,
                    labels:{
                        enabled: false
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
                            return '<img src="../../assets/icons/flagge-usa.png" style="width:10px">';
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

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
        color: String
    },
    data() {
        return {
            chartOptions:{
                chart: {
                    plotBackgroundColor: this.backgroundColor,
                    backgroundColor: '#3C3C3C',
                    type: 'lollipop',
                    inverted: false,
                    width: 450,
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
                    shared: false,
                    formatter: function(){
                        if(this.y < 0 || this.y > 0){
                            return '<strong>'+this.series.name+'</strong>'+': '+Math.abs(this.y)+'%'
                        }else{
                            return 'inactive'
                        }
                    },
                    style:{
                        fontSize: '18px'
                    },
                },
                yAxis:{
                    lineWidth: 2,
                    lineColor: '#F6F6F6',
                    gridLineColor: '#3C3C3C',
                    offset: 50,
                    min: this.min,
                    max: this.max,
                    labels:{
                        enabled: true,
                        formatter: function() { 
                            if(Math.abs(this.value) == 80){
                                return Math.abs(this.value)+"%";
                            }else{
                                return Math.abs(this.value);
                            }   
                                                    
                        },
                        style:{
                            color:'white',
                            fontSize:'24px',
                            fontWeight: 'bolder'
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
                            return '<img src="../../assets/icons/flagge-usa.png" style="width:10px">';
                        }
                    }
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
                        ]
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

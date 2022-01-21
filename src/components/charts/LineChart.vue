<template>
    <div class="LineChart">
        <highcharts class="line-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>

export default{
   name: 'LineChart',
   props: {
        attributes: Array
    },
    data() {
        return { 
            countryCode: ['China', 'Germany', 'United Kingdom', 'United States of America'],
            chartOptions:{
                chart: {
                    type: 'line',
                    inverted: true,
                    plotBackgroundColor: '#999999',
                    backgroundColor: '#3C3C3C',
                    width: 900,
                    height: '700'
                },
                title: {
                    text: undefined
                },
                xAxis: {
                    min: 0,
                    max: 4,
                    reversed: true,
                    title: {
                        enabled: false,
                    },
                    labels: {
                        enabled: false
                    },
                    lineWidth: 0,
                    gridLineColor: '#3C3C3C',
                    gridLineWidth: 2,
                    tickColor: undefined,
                    endOnTick: false,
                    /*plotLines: [{
                        color: '#FF0000',
                        width: 2,
                        value: 1
                    }]*/
                },
                yAxis: {
                    min: 0,
                    max: 3.0,
                    tickInterval: 1,
                    title: {
                        enabled: false
                    },
                    labels: {
                        style: {
                            color: '#F6F6F6',
                            fontSize: '20px'
                        },
                        format: '{value}.0'
                    },
                    lineWidth: 0,
                    gridLineColor: '#3C3C3C',
                    gridLineWidth: 2,
                    endOnTick: false,
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br/>',
                    pointFormat: '{point.x}: {point.y}'
                },
                plotOptions: {
                        line: {
                            marker: {
                                symbol: 'circle',
                            radius: 15
                        }
                    },
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                    }
                },
                credits: {
                    enabled: false
                },
                series: this.attributes
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
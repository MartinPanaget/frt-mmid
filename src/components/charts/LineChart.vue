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
                    backgroundColor: '#F6F6F6',
                    //backgroundColor: '#5F5E5E'
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
                    gridLineColor: '#5F5E5E',
                    gridLineWidth: 1.5,
                    tickColor: undefined
                },
                yAxis: {
                    min: 0,
                    max: 3.0,
                    tickInterval: 1,
                    title: {
                        enabled: false
                    },
                    labels: {
                        format: '{value}.0'
                    },
                    lineWidth: 0,
                    gridLineColor: '#5F5E5E',
                    gridLineWidth: 1.5,
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
                            radius: 10
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
                /*series: [{
                    name: 'Income',
                    color: '#C7F700',
                    data: [[0.5, 1.3], [1.5, 1.1], [2.5, 2.1], [3.5, 1.6]]
                }, {
                        name: 'Education',
                    color: '#70E6AB',
                    data: [[0.5, 1.7], [1.5, 2.0], [2.5, 2.5], [3.5, 1.8]]
                }]*/
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
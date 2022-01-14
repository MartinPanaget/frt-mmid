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
                    //backgroundColor: '#F6F6F6',
                    backgroundColor: '#5F5E5E',
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
                    gridLineColor: '#5F5E5E',
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
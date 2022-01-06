<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
export default {
    props: {
        series: Array,
        color: Array
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'bar',
                    width: 200,
                    height: '300',
                    backgroundColor: '#5F5E5E'
                },
                title: {
                    text: undefined
                },
                xAxis: {
                    lineColor: '#222222',
                    labels: {
                        enabled: false
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        enabled: false
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineColor: 'transparent',
                },
                tooltip: {
                    valueSuffix: '%'
                },
                plotOptions: {
                    bar: {
                        series: {
                            groupPadding: 0
                        },
                        dataLabels: {
                            enabled: true
                        },
                        borderColor: 'transparent', 
                        colorByPoint: true,
                        colors: this.color
                    }
                },
                credits: {
                    enabled: false
                },
                series: this.series
            },
        }
    }
}
</script>

<style>
    .ptwCharts {
        height: 30vh;
    }
</style>
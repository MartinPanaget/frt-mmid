<template>
    <div class="chart">
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'TestChart'
                },
                xAxis: {
                    categories: ['Strongly agree', 'Somewhat agree', 'Neither agree nor oppose', 'Somewhat oppose', 'Strongly oppose'],
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Acceptance in percent',
                        align: 'middle'
                    },
                    labels: {
                        overflow: 'justify',
                        enabled: false
                    },
                    gridLineColor: 'transparent',
                },
                tooltip: {
                    valueSuffix: '%'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    showInLegend: false,
                    name: 'USA',
                    data: [18, 49, 25, 7, 1]
                }]
            },
        }
    }
}
</script>

<style scoped>
    .chart {
        width: 20%;
    }
</style>
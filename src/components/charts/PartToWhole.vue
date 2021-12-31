<template>
    <div class="chart">
        <highcharts :options="chartOptions"></highcharts>
        <TemplateBarChart v-bind:series="series.DE"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.UK"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.US"></TemplateBarChart>
    </div>
</template>

<script>
import TemplateBarChart from './TemplateBarChart.vue';

export default {
    name: 'PartToWhole',
    components: {
        TemplateBarChart
    },
    data() {
        return {
            series: {
                DE : [{
                    showInLegend: false,
                    name: 'DE',
                    data: [8, 30, 31, 18, 14]
                }],
                UK : [{
                    showInLegend: false,
                    name: 'UK',
                    data: [15, 35, 28, 14, 9]
                }],
                US : [{
                    showInLegend: false,
                    name: 'US',
                    data: [16, 31, 28, 17, 8]
                }],
            },
            chartOptions: {
                chart: {
                    type: 'bar',
                    width: '300'
                },
                title: {
                    text: undefined
                },
                xAxis: {
                    categories: ['Strongly agree', 'Somewhat agree', 'Neither agree nor oppose', 'Somewhat oppose', 'Strongly oppose'],
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Acceptance in percent',
                        align: 'low'
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
                    name: 'China',
                    data: [18, 49, 25, 7, 1]
                }]
            },
        }
    }
}
</script>

<style scoped>
    .chart {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }
</style>
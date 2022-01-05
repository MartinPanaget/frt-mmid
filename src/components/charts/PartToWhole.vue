<template>
    <div class="chart">
        <highcharts :options="chartOptions"></highcharts>
        <TemplateBarChart v-bind:series="series.DE" v-bind:color="DeColor"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.UK" v-bind:color="UkColor"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.US" v-bind:color="UsColor"></TemplateBarChart>
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
            DeColor: ['#23EFEF'],
            UkColor: ['#70E6AB'],
            UsColor: ['#0CBAF7'],
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
                    width: 200,
                    backgroundColor: '#5F5E5E'
                },
                title: {
                    text: undefined
                },
                xAxis: {
                    lineColor: '#222222',
                    categories: ['Strongly agree', 'Somewhat agree', 'Neither agree nor oppose', 'Somewhat oppose', 'Strongly oppose'],
                    labels: {
                        style: {
                            color: '#F6F6F6'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Acceptance in percent',
                        align: 'low',
                        style: {
                            color: '#F6F6F6'
                        }
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
                        },
                        borderColor: 'transparent', 
                        colorByPoint: true,
                        colors: ['#C7F700']
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
        display: grid;
        grid-template-columns: repeat(4, 20%);
        grid-column-gap: 6.7%;
        height: 30vh;
        margin-left: auto;
        margin-right: auto;
    }
</style>
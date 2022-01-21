<template>
    <div class="chart">
        <highcharts class="china" :options="chartOptions"></highcharts>
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
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'DE',
                    data: [8, 30, 31, 18, 14]
                }],
                UK : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'UK',
                    data: [15, 35, 28, 14, 9]
                }],
                US : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'US',
                    data: [16, 31, 28, 17, 8]
                }],
            },
            chartOptions: {
                chart: {
                    type: 'bar',
                    width: 300,
                    height: '300',
                    backgroundColor: '#3C3C3C'
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
                        enabled: false,
                        //text: 'Acceptance in percent',
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
                        series: {
                            groupPadding: 0
                        },
                        dataLabels: {
                            enabled: true,
                            style: {
                                'border-style' : 0
                            }
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
        grid-template-columns: 25% repeat(3, 21%);
        grid-column-gap: 4%;
        /*height: 40vh;*/
        margin-left: auto;
        margin-right: auto;
    }

    .china {
        width: 100%;
    }
</style>
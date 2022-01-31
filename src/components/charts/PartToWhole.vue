<template>
    <div class="chart">
        <div class="labels">
            <p>Strongly agree</p>
            <p>Somewhat agree</p>
            <p>Neither agree nor oppose</p>
            <p>Somewhat oppose</p>
            <p>Strongly oppose</p>
        </div>
        <!--<highcharts class="china" :options="chartOptions"></highcharts>-->
        <TemplateBarChart v-bind:series="series.CH" v-bind:color="ChColor"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.UK" v-bind:color="UkColor"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.US" v-bind:color="UsColor"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.DE" v-bind:color="DeColor"></TemplateBarChart>
    </div>
</template>

<script>
import TemplateBarChart from './TemplateBarChart.vue';
//import { EventBus } from '../../others/eventBus';

export default {
    name: 'PartToWhole',
    components: {
        TemplateBarChart
    },
    data() {
        return {
            ChColor: ['#C7F700'],
            DeColor: ['#23EFEF'],
            UkColor: ['#70E6AB'],
            UsColor: ['#0CBAF7'],
            series: {
                CH : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'CH',
                    data: [18, 49, 25, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 7}, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 1}]
                }],
                UK : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'UK',
                    data: [15, 35, 28, 14, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 9}]
                }],
                US : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'US',
                    data: [16, 31, 28, 17, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 8}]
                }],
                DE : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'DE',
                    data: [{dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 8}, {y:30}, {y:31}, {y:18}, {y:14}]
                }],
            },
            /*chartOptions: {
                chart: {
                    type: 'bar',
                    width: 300,
                    height: '300',
                    backgroundColor: '#3C3C3C',
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
                        },
                        enabled: false
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
                            inside: true,
                            style: {
                                'border-style' : 0,
                                color: '#222222',
                                textOutline: "0px",
                            },
                            format: '{y}%'
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
                    data: [18, 49, 25, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 7}, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 1}]
                }]
            },*/
        }
    },
    /*created() {
        EventBus.$on('sectionChange', value => {
            if(value.destination === 'fifthPage') {
                this.chartOptions.series = [{
                    showInLegend: false,
                    name: 'China',
                    data: [18, 49, 25, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 7}, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 1}]
                }]
            }else if(value.origin === 'fifthPage') {
                const x = this
                setTimeout(function(){ 
                    x.chartOptions.series = []
                }, 700);
            }
        })
    }*/
}
</script>

<style scoped>
    .chart {
        display: grid;
        grid-template-columns: 10% repeat(4, 20%);
        grid-column-gap: 2%;
        /*height: 40vh;*/
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }

    .labels {
        padding-top: 10px;
        text-align: right;
    }

    .labels p{
        margin: 20px auto 30px;
    }

    .china {
        width: 100%;
        padding-left: 0 auto 0;
    }
</style>
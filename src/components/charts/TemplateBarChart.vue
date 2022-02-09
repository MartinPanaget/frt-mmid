<template>
    <highcharts :options="chartOptions" ref="highcharts"></highcharts>
</template>

<script>
import { EventBus } from '../../others/eventBus';

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
                    width: 300,
                    height: '350',
                    backgroundColor: '#3C3C3C',
                    style: {
                        fontFamily: 'futura-pt-condensed'
                    }
                },
                title: {
                    text: undefined
                },
                xAxis: {
                    lineColor: '#222222',
                    labels: {
                        enabled: false
                    },
                    tickColor: undefined
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
                    valueSuffix: '%',
                    shared: true,
                    useHTML: true,
                    backgroundColor: 'rgba(95, 94, 94, 0.9)',
                    style: {
                        color: '#F6F6F6',
                    },
                    formatter: function() {
                        let categories = ['Strongly agree', 'Somewhat agree', 'Neither agree nor oppose', 'Somewhat oppose', 'Strongly oppose'];
                        let points = this.points;
                        let result = '<span style="font-size:17px">' + categories[points[0].key] + '</span><table>';

                        points.forEach(p => {
                            result += '<tr><td style="padding:0;font-size:17px">' + p.series.name + ': </td>' +
                            '<td style="padding:0;font-size:17px"><b>' + p.y + '%</b></td></tr>';
                        });

                        result += '</table>';

                        return result;
                    }
                },
                plotOptions: {
                    bar: {
                        series: {
                            groupPadding: 0,
                        },
                        dataLabels: {
                            enabled: true,
                            inside: true,
                            style: {
                                'border-style' : 0,
                                color: '#222222',
                                textOutline: "0px",
                                fontSize: '17px',
                                fontStyle: 'medium'
                            },
                            format: '{y}%'
                        },
                        borderWidth: 0,
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
    },
    created() {
        EventBus.$on('sectionChange', value => {
            if(value.destination === 'fifthPage') {
                this.chartOptions.series = this.series;
            }else if(value.origin === 'fifthPage') {
                const x = this
                setTimeout(function(){ 
                    x.chartOptions.series = []
                }, 700);
            }
        })
    }
}
</script>

<style>
    .ptwCharts {
        height: 30vh;
    }
</style>
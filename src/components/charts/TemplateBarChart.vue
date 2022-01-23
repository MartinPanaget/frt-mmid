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
                    backgroundColor: '#3C3C3C',
                    events: {
                        load: function() {
                            const chart = this,
                            points = chart.series[0].data,
                            options = {
                                dataLabels: {
                                inside: false,
                                style: {
                                    color: '#E6E6E6'
                                }
                                }
                            };

                            points.forEach(function(point) {
                            if (point.shapeArgs.height < 50) {
                                point.update(options, false);
                            }
                            });

                            chart.redraw();
                        }
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
                                color: '#222222'
                            }
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
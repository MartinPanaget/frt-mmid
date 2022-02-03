<template>
    <div class="TemplateForestChart">
        <highcharts class="template-forest-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>

export default{
    name: 'TemplateForestChart',
    props: {
        attributesTop: Array,
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'scatter',
                    //width: 320,
                    //height: '380',
                    width: 300,
                    height: '390',
                    marginBottom: 27,
                    inverted: true,
                    plotBackgroundColor: '#676767',
                    backgroundColor: '#3C3C3C',
                    zoomType: 'xy',
                    events: {
                    drilldown: function(e) {
                        this.addSingleSeriesAsDrilldown(e.point, e.seriesOptions);
                        this.addSingleSeriesAsDrilldown(e.point, this.options.series[e.seriesOptions.index+1]);
                        this.applyDrilldown();
                    }
                    },
                    style: {
                        fontFamily: 'futura-pt-condensed'
                    }
                },
                title: {
                    text: undefined
                },
                subtitle: {
                    text: undefined
                },
                xAxis: {
                    min: 0,
                    max: 12,
                    categories: ['Age', 'Gender', 'Income Medium', 'Income High', 'Education medium', 'Education high', 'Ethnical minority', 'City', 'Exposure', 'Exposure frequency public', 'Exposure frequency private', 'Exposure & frequency public', 'Exposure & frequency private'],
                    title: {
                        enabled: false,
                    },
                    tickColor: undefined,
                    lineWidth: 0,
                    showLastLabel: true,
                    labels: {
                        enabled: false,
                    },
                    plotLines: [
                    {color: 'white',width: 1,value: 0},
                    {color: 'white',width: 1,value: 1},
                    {color: 'white',width: 1,value: 2},
                    {color: 'white',width: 1,value: 3},
                    {color: 'white',width: 1,value: 4},
                    {color: 'white',width: 1,value: 5},
                    {color: 'white',width: 1,value: 6},
                    {color: 'white',width: 1,value: 7},
                    {color: 'white',width: 1,value: 8},
                    {color: 'white',width: 1,value: 9},
                    {color: 'white',width: 1,value: 10},
                    {color: 'white',width: 1,value: 11},
                    {color: 'white',width: 1,value: 12}
                    ]
                },
                yAxis: {
                    min: 0,
                    max: 5,
                    title: {
                    text: undefined
                    },
                    tickColor: 'white',
                    tickWidth:2,
                    tickLength: 8,
                    tickInterval: 1,
                    lineWidth: 0,
                    gridLineColor: '',
                    plotLines: [
                    {color: 'white',width: 2,value: 1},
                    ],
                    labels: {
                        style: {
                            color: '#F6F6F6',
                            fontSize: '20px'
                        },
                    },
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 8,
                            states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                            }
                        },
                        states: {
                            hover: {
                            marker: {
                                enabled: false
                            }
                            }
                        },
                        tooltip: {
                            headerFormat: '<b>{series.name}</b><br>',
                            pointFormat: '<strong>{point.name}</strong> <br>{point.x} Match <br>{point.y} CSAT'
                        }
                    },
                    errorbar: {
                        stemWidth: 3, 
                        whiskerLength: 0,
                        tooltip: {
                            enabled: false
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: this.attributesTop
            }
        }
    },
    methods: {
        addErrorbars: function () {
            let series = [{name: this.attributesTop[0].name, colorByPoint: true, showInLegend: false, data: this.attributesTop[0].data,}];
            this.attributesTop.forEach((element, index) => {
                if (index !== 0) {
                    let errorbar = {type: 'errorbar', stemWidth: 3, whiskerLength: 0};
                    errorbar["color"] = element.color;
                    errorbar["data"] = element.data;
                    series.push(errorbar);
                }
            })
            return series;
        }
    }
}

</script>

<style scoped>
</style>
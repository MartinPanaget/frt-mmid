<template>
    <div>
        <div class="chart-top">
            <!--<div class="categories-top">
                <p>Age</p>
                <p>Gender</p>
                <p>Income Medium</p>
                <p>Income High</p>
                <p>Education medium</p>
                <p>Education high</p>
                <p>Ethnical minority</p>
                <p>City</p>
                <p>Exposure</p>
                <p>Exposure frequency public</p>
                <p>Exposure frequency private</p>
                <p>Exposure & frequency public</p>
                <p>Exposure & frequency private</p>
            </div>-->
            <highcharts :options="chartOptionsTop"></highcharts>
            <TemplateForestChart v-bind:attributesTop="attributes[1]"></TemplateForestChart>
            <TemplateForestChart v-bind:attributesTop="attributes[2]"></TemplateForestChart>
            <TemplateForestChart v-bind:attributesTop="attributes[3]"></TemplateForestChart>
        </div>
        <div class="chart-bottom">
            <!--<div class="categories-bottom">
                <p>Convenience</p>
                <p>Privacy violations</p>
                <p>Efficiency</p>
                <p>Discrimination</p>
                <p>Security</p>
                <p>Surveillance</p>
            </div>-->
            <highcharts :options="chartOptionsBottom"></highcharts>
            <TemplateForestChartBottom v-bind:attributesBottom="attributes[5]"></TemplateForestChartBottom>
            <TemplateForestChartBottom v-bind:attributesBottom="attributes[6]"></TemplateForestChartBottom>
            <TemplateForestChartBottom v-bind:attributesBottom="attributes[7]"></TemplateForestChartBottom>
        </div>
    </div>
</template>

<script>
import TemplateForestChart from './TemplateForestChart.vue';
import TemplateForestChartBottom from './TemplateForestChartBottom.vue';

export default {
    name: 'ForestChart',
    components: {
        TemplateForestChart,
        TemplateForestChartBottom
    },
    props: {
        attributes: Array,
    },
    data() {
        return {
            chartOptionsTop: {
                chart: {
                    type: 'scatter',
                    width: 400,
                    height: '400',
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
                    /*min: 0,
                    max: 12,*/
                    categories: ['Age', 'Gender', 'Income Medium', 'Income High', 'Education medium', 'Education high', 'Ethnical minority', 'City', 'Exposure', 'Exposure frequency public', 'Exposure frequency private', 'Exposure & frequency public', 'Exposure & frequency private'],
                    title: {
                        enabled: false,
                    },
                    startOnTick: true,
                    endOnTick: true,
                    tickmarkPlacement: 'on',
                    tickColor: 'white',
                    tickWidth: 1,
                    tickInterval: 1,
                    lineWidth: 0,
                    showLastLabel: true,
                    labels: {
                        enabled: true,
                        reserveSpace: true,
                        style: {
                            color: '#F6F6F6',
                            fontSize: '17px',
                        }
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
                series: this.attributes[0]
            },
            chartOptionsBottom: {
                chart: {
                    type: 'scatter',
                    width: 400,
                    height: '200',
                    inverted: true,
                    plotBackgroundColor: '#999999',
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
                    /*min: 0,
                    max: 5,*/
                    categories: ['Convenience', 'Privacy violations', 'Efficiency', 'Discrimination', 'Security', 'Surveillance',],
                    title: {
                    enabled: false,
                    },
                    startOnTick: true,
                    endOnTick: true,
                    tickmarkPlacement: 'on',
                    tickColor: 'white',
                    tickWidth: 1,
                    tickInterval: 1,
                    lineWidth: 0,
                    showLastLabel: true,
                    labels: {
                        enabled: true,
                        reserveSpace: true,
                        style: {
                            color: '#F6F6F6',
                            fontSize: '17px',
                        }
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
                    opposite: true,
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
                        enabled: false
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
                series: this.attributes[4]
            }
        }
    },
    methods: {
        addErrorbars: function (index) {
            let series = [{name: this.attributes[index][0].name, colorByPoint: true, showInLegend: false, data: this.attributes[index][0].data,}];
            for (let i = 1; i < this.attributes[index].length; i++) {
                let errorbar = {type: 'errorbar', stemWidth: 3, whiskerLength: 0};
                errorbar["color"] = this.attributes[index][i].color;
                errorbar["data"] = this.attributes[index][i].data;
                series.push(errorbar);
            }
            return series;
        }
    }
}
</script>

<style scoped>
    .chart-top {
        display: grid;
        grid-template-columns: 24.5% repeat(3, 21.5%);
    }

    .categories-top {
        padding-top: 8px;
        text-align: right;
    }

    .categories-top p {
        font-size: 17px;
        margin: 5.7px auto 5.7px;
    }

    .chart-bottom {
        display: grid;
        grid-template-columns: 24.5% repeat(3, 21.5%);
    }

    .categories-bottom {
        padding-top: 12px;
        text-align: right;
    }

    .categories-bottom p {
        font-size: 17px;
        margin: 6.2px auto 6.2px;
    }
</style>
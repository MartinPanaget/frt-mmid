<template>
    <div>
        <div class="chart-top">
            <div class="categories-top">
                <p class="age">Age</p>
                <p class="gender">Gender</p>
                <p class="income">Income Medium</p>
                <p class="income">Income High</p>
                <p class="education">Education medium</p>
                <p class="education">Education high</p>
                <p class="ethnic">Ethnical minority</p>
                <p class="city">City</p>
                <p class="exposure">Exposure</p>
                <p class="exposure">Exposure frequency public</p>
                <p class="exposure">Exposure frequency private</p>
                <p class="exposure">Exposure & frequency public</p>
                <p class="exposure">Exposure & frequency private</p>
            </div>
            <highcharts :options="chartOptionsTop"></highcharts>
            <TemplateForestChart v-bind:attributesTop="attributes[1]"></TemplateForestChart>
            <TemplateForestChart v-bind:attributesTop="attributes[2]"></TemplateForestChart>
            <TemplateForestChart v-bind:attributesTop="attributes[3]"></TemplateForestChart>
        </div>
        <div class="chart-bottom">
            <div class="categories-bottom">
                <p class="convenience">Convenience</p>
                <p class="privacy">Privacy violations</p>
                <p class="efficiency">Efficiency</p>
                <p class="discrimination">Discrimination</p>
                <p class="security">Security</p>
                <p class="surveillance">Surveillance</p>
            </div>
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
                    //width: 440,
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
                    startOnTick: true,
                    endOnTick: true,
                    tickmarkPlacement: 'on',
                    tickColor: 'white',
                    tickWidth: 1,
                    tickInterval: 1,
                    lineWidth: 0,
                    showLastLabel: true,
                    labels: {
                        /*useHTML:true,
                        style:{
                            width:'146px',
                            whiteSpace:'normal',
                            color: '#F6F6F6',
                            fontSize: '17px',
                        },
                        step: 1,
                        formatter: function () {
                            return '<div align="center" style="word-wrap: break-word;word-break: break-all;width:146px;text-align:right">' + this.value + '</div>';
                        },*/
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
                            headerFormat: '<strong>{series.name}</strong><br>',
                            pointFormat: '<br>Wert: {point.y}{point.name}'
                        }
                    },
                    errorbar: {
                        stemWidth: 3, 
                        whiskerLength: 0,
                        enableMouseTracking: false
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
                    //width: 440,
                    //height: '210',
                    width: 300,
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
                    min: 0,
                    max: 5,
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
                        enabled: false,
                        /*useHTML:true,
                        style:{
                            width:'145px',
                            whiteSpace:'normal',
                            color: '#F6F6F6',
                            fontSize: '17px',
                        },
                        step: 1,
                        formatter: function () {
                            return '<div align="center" style="word-wrap: break-word;word-break: break-all;width:145px;text-align:right">' + this.value + '</div>';
                        },*/
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
                            headerFormat: '<strong>{series.name}</strong><br>',
                            pointFormat: '<br>Wert: {point.y}{point.name}'
                        }
                    },
                    errorbar: {
                        stemWidth: 3, 
                        whiskerLength: 0,
                        enableMouseTracking: false
                    }
                },
                credits: {
                    enabled: false
                },
                series: this.attributes[4]
            }
        }
    },
}
</script>

<style scoped>
    .chart-top {
        display: grid;
        /*grid-template-columns: 30% repeat(3, 21.5%);*/
        grid-template-columns: 10% repeat(4, 21%);
    }

    .categories-top {
        padding-top: 7.5px;
        text-align: right;
    }

    .categories-top p {
        font-size: 17px;
        margin: 5.3px auto 5.3px;
    }

    .chart-bottom {
        display: grid;
        /*grid-template-columns: 30% repeat(3, 21.5%);*/
        grid-template-columns: 10% repeat(4, 21%);
    }

    .categories-bottom {
        padding-top: 13.5px;
        text-align: right;
    }

    .categories-bottom p {
        font-size: 17px;
        margin: 7.3px auto 7.3px;
    }
</style>
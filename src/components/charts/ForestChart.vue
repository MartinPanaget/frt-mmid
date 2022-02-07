<template>
    <div>
        <div class="chart-top">
            <div class="categories-top">
                <p class="age"><img :src='info' title="18 - 65 years"/>Age</p>
                <p class="gender"><img :src='info' title="female and male"/>Gender</p>
                <p class="income"><img :src='info' title="UK, US, GER: 1001 - 2501 local currency  / month, CHN: 2101 - 4201 CNY"/>Income Medium</p>
                <p class="income"><img :src='info' title="UK, US, GER: 1001 - 2501 local currency  / month, CHN: 2101 - 4201 CNY"/>Income High</p>
                <p class="education"><img :src='info' title="High school diploma or equivalent, vocational training"/>Education medium</p>
                <p class="education"><img :src='info' title="Bachelor's degree, Master's or Doctorate's degree"/>Education high</p>
                <p class="ethnic"><img :src='info' title=""/>Ethnical minority</p>
                <p class="city"><img :src='info' title="Living area"/>City</p>
                <p class="exposure"><img :src='info' title="Perceived FRTs exposure occasions"/>Exposure</p>
                <p class="exposure"><img :src='info' title="Frequency to which citizens perceived to be exposed to FRTs in public"/>Exposure frequency public</p>
                <p class="exposure"><img :src='info' title="Frequency on which citizens used FRTs in private"/>Exposure frequency private</p>
                <p class="exposure"><img :src='info' title="Interkorrelation of perceived exposure occasions and frequency of FRTs in public"/>Exposure & frequency public</p>
                <p class="exposure"><img :src='info' title="Interkorrelation of occasions and frequency of FRTs in private use"/>Exposure & frequency private</p>
            </div>
            <highcharts :options="chartOptionsTop"></highcharts>
            <TemplateForestChart v-bind:attributes="attributes" v-bind:attributesTop="attributes[1]" v-bind:img="countries[0]"></TemplateForestChart>
            <TemplateForestChart v-bind:attributes="attributes" v-bind:attributesTop="attributes[2]" v-bind:img="countries[1]"></TemplateForestChart>
            <TemplateForestChart v-bind:attributes="attributes" v-bind:attributesTop="attributes[3]" v-bind:img="countries[2]"></TemplateForestChart>
        </div>
        <div class="chart-bottom">
            <div class="categories-bottom">
                <p class="convenience"><img :src='info' title="Convenience as a possible benefit of FRTs"/>Convenience</p>
                <p class="privacy"><img :src='info' title="Privacy violation as a possible risk of FRTs"/>Privacy violations</p>
                <p class="efficiency"><img :src='info' title="Efficiency as a possible benefit of FRTs"/>Efficiency</p>
                <p class="discrimination"><img :src='info' title="Discrimination as a possible risk of FRTs"/>Discrimination</p>
                <p class="security"><img :src='info' title="Security as a possible benefit of FRTs"/>Security</p>
                <p class="surveillance"><img :src='info' title="Surveillance as a possible risk of FRTs"/>Surveillance</p>
            </div>
            <highcharts :options="chartOptionsBottom"></highcharts>
            <TemplateForestChartBottom v-bind:attributes="attributes" v-bind:attributesBottom="attributes[5]"></TemplateForestChartBottom>
            <TemplateForestChartBottom v-bind:attributes="attributes" v-bind:attributesBottom="attributes[6]"></TemplateForestChartBottom>
            <TemplateForestChartBottom v-bind:attributes="attributes" v-bind:attributesBottom="attributes[7]"></TemplateForestChartBottom>
        </div>
    </div>
</template>

<script>
import TemplateForestChart from './TemplateForestChart.vue';
import TemplateForestChartBottom from './TemplateForestChartBottom.vue';
import info from '../../assets/icons/v6-info.png';

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
        const component = this;
        return {
            info: info,
            countries: ['<img src="/flagge-uk-kontur.png" style="width: 30px;"/>', '<img src="/flagge-usa-kontur.png" style="width: 30px;"/>', '<img src="/flagge-de-kontur.png" style="width: 30px;"/>'],
            chartOptionsTop: {
                chart: {
                    type: 'scatter',
                    width: 300,
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
                    text: '<img src="/flagge-china-kontur.png" style="width: 30px;"/>',
                    align: 'center',
                    useHTML: true,
                    rotation: 0,
                    floating: true,
                    x: 0,
                    y: 7
                },
                subtitle: {
                    text: undefined
                },
                xAxis: {
                    min: -1,
                    max: 12,
                    categories: ['Age', 'Gender', 'Income Medium', 'Income High', 'Education medium', 'Education high', 'Ethnical minority', 'City', 'Exposure', 'Exposure frequency public', 'Exposure frequency private', 'Exposure & frequency public', 'Exposure & frequency private'],
                    title: {
                        enabled: false,
                    },
                    tickPositions: [0,1,2,3,4,5,6,7,8,9,10,11,12],
                    tickmarkPlacement: 'on',
                    tickColor: '#999999',
                    tickWidth: 1,
                    tickInterval: 1,
                    lineWidth: 0,
                    showLastLabel: true,
                    labels: {
                        enabled: false,
                    },
                    plotLines: [
                    {color: '#999999',width: 1,value: 0},
                    {color: '#999999',width: 1,value: 1},
                    {color: '#999999',width: 1,value: 2},
                    {color: '#999999',width: 1,value: 3},
                    {color: '#999999',width: 1,value: 4},
                    {color: '#999999',width: 1,value: 5},
                    {color: '#999999',width: 1,value: 6},
                    {color: '#999999',width: 1,value: 7},
                    {color: '#999999',width: 1,value: 8},
                    {color: '#999999',width: 1,value: 9},
                    {color: '#999999',width: 1,value: 10},
                    {color: '#999999',width: 1,value: 11},
                    {color: '#999999',width: 1,value: 12}
                    ]
                },
                yAxis: {
                    min: 0,
                    max: 5,
                    title: {
                    text: undefined
                    },
                    tickColor: '#F6F6F6',
                    tickWidth:2,
                    tickLength: 8,
                    tickInterval: 1,
                    lineWidth: 0,
                    gridLineColor: '',
                    plotLines: [
                    {color: '#F6F6F6',width: 2,value: 1},
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
                    },
                    errorbar: {
                        stemWidth: 3, 
                        whiskerLength: 0,
                        enableMouseTracking: false
                    }
                },
                tooltip: {
                    formatter: function() {
                        let tooltip = '<strong>Odds Ratio</strong><br>'
                        tooltip += '<hr>'
                        tooltip += '<b>'+ this.series.name+ ': ' + this.y
                        tooltip += this.point.name !== undefined ? this.point.name : '' 
                        tooltip += '</b><br/>'
                        for(let i = 0; i < 4; i++) {
                            if (this.series.name !== component.attributes[i][0].name) {
                                tooltip += '<em>'+component.attributes[i][0].name + ': ' + component.attributes[i][0].data[this.point.x].y 
                                tooltip +=  component.attributes[i][0].data[this.point.x].name !== undefined ? component.attributes[i][0].data[this.point.x].name : ''
                                tooltip += '</em><br/>'
                            }
                        }
                        return tooltip
                    },
                },
                credits: {
                    enabled: false
                },
                series: this.attributes[0]
            },
            chartOptionsBottom: {
                chart: {
                    type: 'scatter',
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
                    min: -0.2,
                    max: 5,
                    categories: ['Convenience', 'Privacy violations', 'Efficiency', 'Discrimination', 'Security', 'Surveillance',],
                    title: {
                    enabled: false,
                    },
                    tickPositions: [0,1,2,3,4,5],
                    tickmarkPlacement: 'on',
                    tickColor: '#F6F6F6',
                    tickWidth: 1,
                    tickInterval: 1,
                    lineWidth: 0,
                    showLastLabel: true,
                    labels: {
                        enabled: false,
                    },
                    plotLines: [
                    {color: '#F6F6F6',width: 1,value: 0},
                    {color: '#F6F6F6',width: 1,value: 1},
                    {color: '#F6F6F6',width: 1,value: 2},
                    {color: '#F6F6F6',width: 1,value: 3},
                    {color: '#F6F6F6',width: 1,value: 4},
                    {color: '#F6F6F6',width: 1,value: 5},
                    {color: '#F6F6F6',width: 1,value: 6},
                    {color: '#F6F6F6',width: 1,value: 7},
                    {color: '#F6F6F6',width: 1,value: 8},
                    {color: '#F6F6F6',width: 1,value: 9},
                    {color: '#F6F6F6',width: 1,value: 10},
                    {color: '#F6F6F6',width: 1,value: 11},
                    {color: '#F6F6F6',width: 1,value: 12}
                    ]
                },
                yAxis: {
                    opposite: true,
                    min: 0,
                    max: 5,
                    title: {
                    text: undefined
                    },
                    tickColor: '#F6F6F6',
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
                tooltip: {
                    formatter: function() {
                        let tooltip = '<strong>Odds Ratio</strong><br>'
                        tooltip += '<hr>'
                        tooltip += '<b>'+ this.series.name+ ': ' + this.y
                        tooltip += this.point.name !== undefined ? this.point.name : '' 
                        tooltip += '</b><br/>'
                        for(let i = 4; i < 8; i++) {
                            if (this.series.name !== component.attributes[i][0].name) {
                                tooltip += '<em>'+component.attributes[i][0].name + ': ' + component.attributes[i][0].data[this.point.x].y 
                                tooltip +=  component.attributes[i][0].data[this.point.x].name !== undefined ? component.attributes[i][0].data[this.point.x].name : ''
                                tooltip += '</em><br/>'
                            }
                        }
                        return tooltip
                    },
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
        grid-template-columns: 11% repeat(4, 21%);
    }

    .categories-top {
        padding-top: 33px;
        text-align: right;
    }

    .categories-top p {
        font-size: 17px;
        margin: 4px auto 4px;
    }

    .categories-top p img{
        margin-right: 3px;
        height: 14px;
    }

    .chart-bottom {
        display: grid;
        /*grid-template-columns: 30% repeat(3, 21.5%);*/
        grid-template-columns: 11% repeat(4, 21%);
    }

    .categories-bottom {
        padding-top: 20px;
        text-align: right;
    }

    .categories-bottom p {
        font-size: 17px;
        margin: 5px auto 5px;
    }

    .categories-bottom p img{
        margin-right: 3px;
        height: 14px;
    }
</style>
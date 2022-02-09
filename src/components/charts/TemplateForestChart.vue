<template>
    <div class="TemplateForestChart">
        <highcharts class="template-forest-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>

export default{
    name: 'TemplateForestChart',
    props: {
        attributes: Array,
        attributesTop: Array,
        img: String
    },
    data() {
        const component = this;
        return {
            chartOptions: {
                chart: {
                    type: 'scatter',
                    width: 300,
                    height: '400',
                    marginBottom: 27,
                    inverted: true,
                    plotBackgroundColor: '#515151',
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
                    text: this.img,
                    align: 'center',
                    useHTML: true,
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
                    tickColor: undefined,
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
                            radius: 6,
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
                        }
                    },
                    errorbar: {
                        stemWidth: 3, 
                        whiskerLength: 0,
                        enableMouseTracking: false
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(95, 94, 94, 0.9)',
                    style: {
                        color: '#F6F6F6',
                    },
                    formatter: function() {
                        let tooltip = '<span style="font-size:17px;font-style:regular"><strong>Odds Ratio</strong></span><br>'
                        tooltip += '<span style="font-size:17px;font-style:regular"><b>'+ this.series.name+ ': ' + this.y
                        tooltip += this.point.name !== undefined ? this.point.name : '' 
                        tooltip += '</b></span><br/>'
                        for(let i = 0; i < 4; i++) {
                            if (component.attributes[i][0].data !== undefined || component.attributes[i][0].data.length !== 0) {
                                if (this.series.name !== component.attributes[i][0].name) {
                                    tooltip += '<span style="font-size:17px;font-style:regular"><em>'+component.attributes[i][0].name + ': ' + component.attributes[i][0].data[this.point.x].y 
                                    tooltip +=  component.attributes[i][0].data[this.point.x].name !== undefined ? component.attributes[i][0].data[this.point.x].name : ''
                                    tooltip += '</em></span><br/>'
                                }
                            }
                        }
                        return tooltip
                    },
                },
                credits: {
                    enabled: false
                },
                series: this.attributesTop
            }
        }
    }
}

</script>

<style scoped>
</style>
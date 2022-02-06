<template>
    <div class="TemplateForestChartBottom">
        <highcharts class="template-forest-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>

export default{
    name: 'TemplateForestChartBottom',
    props: {
        attributes: Array,
        attributesBottom: Array,
    },
    data() {
        const component = this;
        return {
            chartOptions: {
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
                    min: 0,
                    max: 5,
                    categories: ['Convenience', 'Privacy violations', 'Efficiency', 'Discrimination', 'Security', 'Surveillance',],
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
                    {color: '#F6F6F6',width: 2,value: 1},
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
                                if (component.attributes[i][0].data !== undefined || component.attributes[i][0].data.length !== 0) {
                                    if (this.series.name !== component.attributes[i][0].name) {
                                        tooltip += '<em>'+component.attributes[i][0].name + ': ' + component.attributes[i][0].data[this.point.x].y 
                                        tooltip +=  component.attributes[i][0].data[this.point.x].name !== undefined ? component.attributes[i][0].data[this.point.x].name : ''
                                        tooltip += '</em><br/>'
                                    }
                                }
                            }
                            return tooltip
                    },
                },
                credits: {
                    enabled: false
                },
                series: this.attributesBottom
            }
        }
    }
}

</script>

<style scoped>
</style>
<template>
    <div class="LineChart">
        <highcharts class="line-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>

export default{
   name: 'LineChart',
   props: {
        attributes: Array,
    },
    data() {
        return { 
            chartOptions:{
                chart: {
                    type: 'line',
                    inverted: true,
                    //plotBackgroundColor: '#999999',
                    backgroundColor: '#3C3C3C',
                    width: 900,
                    height: '700'
                },
                title: {
                    text: undefined
                },
                xAxis: {
                    min: 0,
                    max: 4,
                    reversed: true,
                    title: {
                        enabled: false,
                    },
                    labels: {
                        enabled: false
                    },
                    lineWidth: 0,
                    gridLineColor: '#3C3C3C',
                    gridLineWidth: 2,
                    tickColor: undefined,
                    endOnTick: false,
                    plotLines: [
                        {color: '#3C3C3C',width: 2,value: 0.0},
                        {color: '#3C3C3C',width: 1,value: 0.14},{color: '#3C3C3C',width: 1,value: 0.28},{color: '#3C3C3C',width: 1,value: 0.42},{color: '#3C3C3C',width: 1,value: 0.56},{color: '#3C3C3C',width: 1,value: 0.7},{color: '#3C3C3C',width: 1,value: 0.84},
                        {color: '#3C3C3C',width: 2,value: 1.0},
                        {color: '#3C3C3C',width: 1,value: 1.14},{color: '#3C3C3C',width: 1,value: 1.28},{color: '#3C3C3C',width: 1,value: 1.42},{color: '#3C3C3C',width: 1,value: 1.56},{color: '#3C3C3C',width: 1,value: 1.7},{color: '#3C3C3C',width: 1,value: 1.84},
                        {color: '#3C3C3C',width: 2,value: 2.0, },
                        {color: '#3C3C3C',width: 1,value: 2.14},{color: '#3C3C3C',width: 1,value: 2.28},{color: '#3C3C3C',width: 1,value: 2.42},{color: '#3C3C3C',width: 1,value: 2.56},{color: '#3C3C3C',width: 1,value: 2.7},{color: '#3C3C3C',width: 1,value: 2.84},
                        {color: '#3C3C3C',width: 2,value: 3.0},
                        {color: '#3C3C3C',width: 1,value: 3.14},{color: '#3C3C3C',width: 1,value: 3.28},{color: '#3C3C3C',width: 1,value: 3.42},{color: '#3C3C3C',width: 1,value: 3.56},{color: '#3C3C3C',width: 1,value: 3.7},{color: '#3C3C3C',width: 1,value: 3.84},
                    ],
                    plotBands: [{
                        from: 0.0,
                        to: 1.0,
                        color: '#676767',
                        zIndex: -1,
                        }, {
                        from: 1.0,
                        to: 2.0,
                        color: '#999999',
                        zIndex: -1,
                        }, {
                        from: 2.0,
                        to: 3.0,
                        color: '#676767',
                        zIndex: -1,
                        }, {
                        from: 3.0,
                        to: 4.0,
                        color: '#999999',
                        zIndex: -1,
                        }
                    ]
                },
                yAxis: {
                    min: 0,
                    max: 3.0,
                    tickInterval: 1,
                    title: {
                        enabled: false
                    },
                    labels: {
                        style: {
                            color: '#F6F6F6',
                            fontSize: '20px'
                        },
                        format: '{value}.0'
                    },
                    lineWidth: 0,
                    gridLineColor: '',
                    endOnTick: false,
                    plotLines: [
                        {color: '#3C3C3C',width: 2,value: 0.0},
                        {color: '#00FFFF',width: 2,value: 1.0},
                        {color: '#3C3C3C',width: 2,value: 2.0},
                        {color: '#3C3C3C',width: 2,value: 3.0}
                    ]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    formatter: function() {
                        let countries = ['China', 'Germany', 'United Kingdom', 'United States of America'];
                        let points = this.points;
                        let result = '<span style="font-size:10px">' + countries[Math.floor(points[0].key)] + '</span><table>';

                        points.forEach(p => {
                            result += '<tr><td style="padding:0">' + p.series.name + ': </td>' +
                            '<td style="padding:0"><b>' + p.y + '</b></td></tr>';
                        });

                        result += '</table>';

                        return result;
                    }
                },
                plotOptions: {
                        line: {
                            marker: {
                                symbol: 'circle',
                            radius: 15
                        }
                    },
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                    }
                },
                credits: {
                    enabled: false
                },
                series: this.attributes
            }
        }
    }
} 

</script>

<style scoped>
    .LollipopChart {
        padding-bottom: 0.25rem;
    }
</style>
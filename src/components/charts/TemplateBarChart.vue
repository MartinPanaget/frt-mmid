<template>
    <div class="ptwCharts">
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    props: {
        series: Array
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'bar',
                    width: '200',
                },
                title: {
                    text: undefined
                },
                xAxis: {
                    labels: {
                        enabled: false
                    }
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
                        dataLabels: {
                            enabled: true
                        }
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
        width: 300px;
        /*margin-left: 100px;*/
    }
</style>
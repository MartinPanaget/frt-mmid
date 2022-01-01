<template>
    <div class="BubbleChart">
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    props: {
        series: Array,
        title: String
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'packedbubble',
                    width: '250'
                },
                plotOptions: {
                    packedbubble: {
                        minSize: 20,
                        maxSize: 80
                    }
                },
                title: {
                    text: this.title
                },
                tooltip: {
                    valueSuffix: '%'
                },
                credits: {
                    enabled: false
                },
                series: this.series
            }
        }
    }
}
</script>


<template>
    <div class="chart">
        <div class="labels">
            <p>Strongly agree</p>
            <p>Somewhat agree</p>
            <p>Neither agree nor oppose</p>
            <p>Somewhat oppose</p>
            <p>Strongly oppose</p>
        </div>
        <TemplateBarChart v-bind:series="series.CN" v-bind:color="ChColor"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.GB" v-bind:color="UkColor"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.US" v-bind:color="UsColor"></TemplateBarChart>
        <TemplateBarChart v-bind:series="series.DE" v-bind:color="DeColor"></TemplateBarChart>
    </div>
</template>

<script>
import TemplateBarChart from './TemplateBarChart.vue';

export default {
    name: 'PartToWhole',
    components: {
        TemplateBarChart
    },
    data() {
        return {
            ChColor: ['#C7F700'],
            DeColor: ['#23EFEF'],
            UkColor: ['#70E6AB'],
            UsColor: ['#0CBAF7'],
            series: {
                CN : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'CN',
                    data: [18, 49, 25, 7, {dataLabels: {inside: false,style: {color: '#E6E6E6'}}, y: 1}]
                }],
                GB : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'GB',
                    data: [15, 35, 28, 14, 9]
                }],
                US : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'US',
                    data: [16, 31, 28, 17, 8]
                }],
                DE : [{
                    borderColor: '#5F5E5E',
                    showInLegend: false,
                    name: 'DE',
                    data: [8, 30, 31, 18, 14]
                }],
            },
        }
    },
}
</script>

<style scoped>
    .chart {
        display: grid;
        grid-template-columns: 10% repeat(4, 20%);
        grid-column-gap: 2%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }

    .labels {
        text-align: right;
    }

    .labels p{
        margin: 36px auto 36px;
        font-size: 20px;
    }
</style>
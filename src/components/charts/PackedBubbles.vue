<template>
    <div>
        <div class="BubbleCharts">
            <PackedBubbleChart v-bind:series="series.Phone" title="Smartphone-Verwendung"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.PersonCheck" title="Personenkontrolle"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.SmartDevice" title="Smarte Geräte"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.IdCheck" title="Identitätskontrolle für finanzielle Belange"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Transport" title="Öffentliche Verkehrsmittel"></PackedBubbleChart>
        </div>
        <div class="BubbleCharts">
            <PackedBubbleChart v-bind:series="series.Phone" title="Einkaufszentren"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.PersonCheck" title="Öffentliche Straßen"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.SmartDevice" title="Schulen/Universitäten"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.IdCheck" title="Private Haushalte"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Transport" title="Touristische Attraktionen"></PackedBubbleChart>
        </div>
    </div>
</template>

<script>
import PackedBubbleChart from './PackedBubbleChart.vue';

export default {
    name: 'PackedBubbles',
    components:{
        PackedBubbleChart
    },
    data() {
        return {
            series:{
                Phone:[{
                    showInLegend: false,
                    name: 'Phone',
                    data: [{
                        value: 12,
                        color: 'red'
                    },
                    {
                     value: 60,
                        color: 'green'
                    },
                    {
                     value: 33,
                    },
                    {
                     value: 35,
                        color: 'blue'
                    }]
                }],
                PersonCheck:[{
                    showInLegend: false,
                    name: 'PersonCheck',
                    data: [{
                        value: 15,
                        color: 'red'
                    },
                    {
                     value: 30,
                        color: 'green'
                    },
                    {
                     value: 30,
                    },
                    {
                     value: 25,
                        color: 'blue'
                    }]
                }],
                SmartDevice:[{
                    showInLegend: false,
                    name: 'SmartDevice',
                    data: [{
                        value: 25,
                        color: 'red'
                    },
                    {
                     value: 60,
                        color: 'green'
                    },
                    {
                     value: 15,
                    },
                    {
                     value: 5,
                        color: 'blue'
                    }]
                }],
                IdCheck:[{
                    showInLegend: false,
                    name: 'IdCheck',
                    data: [{
                        value: 80,
                        color: 'red'
                    },
                    {
                     value: 60,
                        color: 'green'
                    },
                    {
                     value: 15,
                    },
                    {
                     value: 17,
                        color: 'blue'
                    }]
                }],
                Transport:[{
                    showInLegend: false,
                    name: 'Transport',
                    data: [{
                        value: 55,
                        color: 'red'
                    },
                    {
                     value: 14,
                        color: 'green'
                    },
                    {
                     value: 26,
                    },
                    {
                     value: 45,
                        color: 'blue'
                    }]
                }],
            },
        }
    }
}
</script>

<style scoped>
    .BubbleCharts {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }
</style>


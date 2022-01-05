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
            <PackedBubbleChart v-bind:series="series.Mall" title="Einkaufszentren"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Street" title="Öffentliche Straßen"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.School" title="Schulen/Universitäten"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Private" title="Private Haushalte"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Tourism" title="Touristische Attraktionen"></PackedBubbleChart>
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
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[30],
                    }
                ],
                PersonCheck:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[50],
                    }
                ],
                SmartDevice:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[30],
                    }
                ],
                IdCheck:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[30],
                    }
                ],
                Transport:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[30],
                    }
                ],
                Mall:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[30],
                    }
                ],
                Street:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[30],
                    }
                ],
                School:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[30],
                    }
                ],
                Private:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[30],
                    }
                ],
                Tourism:[{
                    showInLegend: false,
                    visible: false,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[80],
                    }
                ],
                
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


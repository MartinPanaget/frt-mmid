<template>
    <div>
        <div class="BubbleCharts">
            <PackedBubbleChart v-bind:series="series.Phone" title="Smartphone Usage" minSize="74" maxSize="108"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.PersonCheck" title="People Control" minSize="57" maxSize="78"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.SmartDevice" title="Smart Devices" minSize="48" maxSize="77"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.IdCheck" title="Identity verification for financial matters" minSize="49" maxSize="63"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Transport" title="Railway, Subway Stations" minSize="43" maxSize="75"></PackedBubbleChart>
        </div>
        <div class="BubbleCharts">
            <PackedBubbleChart v-bind:series="series.Mall" title="Shopping Malls" minSize="74" maxSize="108"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Street" title="Public Street" minSize="74" maxSize="108"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.School" title="School Or Universities" minSize="74" maxSize="108"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Private" title="Tourist Acttractions" minSize="74" maxSize="108"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Tourism" title="Private Household" minSize="74" maxSize="108"></PackedBubbleChart>
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
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone USA',
                    color: '#0CBAF7',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[50],
                    }
                ],
                PersonCheck:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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
                    visible: true,
                    name: 'Phone DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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
                    visible: true,
                    name: 'Phone CH',
                    color: '#C7F700',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Phone GB',
                    color: '#70E6AB',
                    data:[20],
                    },
                    {
                    showInLegend: false,
                    visible: true,
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


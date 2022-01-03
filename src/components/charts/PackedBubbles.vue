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
                    name: 'Phone',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF',
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                PersonCheck:[{
                    showInLegend: false,
                    name: 'PersonCheck',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF'
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                SmartDevice:[{
                    showInLegend: false,
                    name: 'SmartDevice',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF'
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                IdCheck:[{
                    showInLegend: false,
                    name: 'IdCheck',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF'
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                Transport:[{
                    showInLegend: false,
                    name: 'Transport',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF'
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                Mall:[{
                    showInLegend: false,
                    name: 'Phone',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF',
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                Street:[{
                    showInLegend: false,
                    name: 'PersonCheck',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF'
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                School:[{
                    showInLegend: false,
                    name: 'SmartDevice',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF'
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                Private:[{
                    showInLegend: false,
                    name: 'IdCheck',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 12,
                        color: '#23EFEF'
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
                    }]
                }],
                Tourism:[{
                    showInLegend: false,
                    name: 'Transport',
                    data: [{
                        visible: false,
                        name: 'DE',
                        value: 50,
                        color: '#23EFEF'
                    },
                    {
                        name: 'USA',
                        value: 60,
                        color: '#0CBAF7'
                    },
                    {
                        visible: false,
                        name: 'GB',
                        value: 33,
                        color:'#70E6AB',
                    },
                    {
                        visible: false,
                        name: 'CH',
                        value: 35,
                        color: '#C7F700',
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


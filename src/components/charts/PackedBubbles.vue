<template>
    <div>
        <div class="BubbleCharts">
            <PackedBubbleChart v-bind:series="series.Phone" height="350" title="Smartphone Usage" minSize="90" maxSize="124"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.PersonCheck" height="350" title="Custom Control, security checks at airport" minSize="70" maxSize="89"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.SmartDevice" height="350" title="Smart devices and gadgets" minSize="61" maxSize="91"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.IdCheck" height="350" title="Identity verification for financial matters" minSize="62" maxSize="72"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Transport" height="350" title="Railway, Subway Stations" minSize="53" maxSize="90"></PackedBubbleChart>
        </div>
        <div class="BubbleCharts">
            <PackedBubbleChart v-bind:series="series.Mall" height="250" title="Shopping Malls" minSize="58" maxSize="74"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Street" height="250" title="Public Street" minSize="53" maxSize="68"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.School" height="250" title="School Or Universities" minSize="49" maxSize="65"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Private" height="250" title="Tourist Acttractions" minSize="50" maxSize="55"></PackedBubbleChart>
            <PackedBubbleChart v-bind:series="series.Tourism" height="250" title="Private Household" minSize="54" maxSize="86"></PackedBubbleChart>
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
                    name: 'Smartphone GB',
                    color: '#70E6AB',
                    data:[44],
                    }, 
                    //Gruppenname
                    { //start Datagroup
                    showInLegend: false,
                    visible: true,
                    name: 'Smartphone DE', //Tooltip
                    color: '#23EFEF', //Landfarbe
                    data:[45],// Datensatz mit kleinestem Wert in der Gruppe Phone
                    },//Ende Datagroup
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Smartphone USA',
                    color: '#0CBAF7',
                    data:[59],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Smartphone CH',
                    color: '#C7F700',
                    data:[78],// Datensatz mit größtem Wert in der Gruppe Phone
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[57],
                    }
                ], // Ende erste Gruppe 
                PersonCheck:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Customs Control, Security Checks at Airport USA',
                    color: '#0CBAF7',
                    data:[29],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Customs Control, Security Checks at Airport GB',
                    color: '#70E6AB',
                    data:[39],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Customs Control, Security Checks at Airport CH',
                    color: '#C7F700',
                    data:[42],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Customs Control, Security Checks at Airport DE',
                    color: '#23EFEF',
                    data:[48],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[38],
                    }
                ],
                SmartDevice:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Smart Devices and Gadgets DE',
                    color: '#23EFEF',
                    data:[18],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'mart Devices and Gadgets GB',
                    color: '#70E6AB',
                    data:[36],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'mart Devices and Gadgets USA',
                    color: '#0CBAF7',
                    data:[47],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'mart Devices and Gadgets CH',
                    color: '#C7F700',
                    data:[47],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[37],
                    }
                ],
                IdCheck:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Identification Verification for Financial Matters GB',
                    color: '#70E6AB',
                    data:[19],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Identification Verification for Financial Matters USA',
                    color: '#0CBAF7',
                    data:[23],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Identification Verification for Financial Matters DE',
                    color: '#23EFEF',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Identification Verification for Financial Matters CH',
                    color: '#C7F700',
                    data:[33],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[25],
                    }
                ],
                Transport:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Railway Subway Situations USA',
                    color: '#0CBAF7',
                    data:[10],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Railway Subway Situations GB',
                    color: '#70E6AB',
                    data:[13],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Railway Subway Situations DE',
                    color: '#23EFEF',
                    data:[25],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Railway Subway Situations CH',
                    color: '#C7F700',
                    data:[45],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[24],
                    }
                ],
                Mall:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Shopping Malls USA',
                    color: '#0CBAF7',
                    data:[14],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Shopping Malls DE',
                    color: '#23EFEF',
                    data:[17],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Shopping Malls GB',
                    color: '#70E6AB',
                    data:[17],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Shopping Malls CH',
                    color: '#C7F700',
                    data:[30],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[20],
                    }
                ],
                Street:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Public Street CH',
                    color: '#C7F700',
                    data:[10],
                    },  
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Public Street USA',
                    color: '#0CBAF7',
                    data:[14],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Public Street GB',
                    color: '#70E6AB',
                    data:[18],
                    },  
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Public Street DE',
                    color: '#23EFEF',
                    data:[23],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[16],
                    }
                ],
                School:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Schools or Universities DE',
                    color: '#23EFEF',
                    data:[6],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Schools or Universities GB',
                    color: '#70E6AB',
                    data:[9],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Schools or Universities USA',
                    color: '#0CBAF7',
                    data:[13],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Schools or Universities CH',
                    color: '#C7F700',
                    data:[21],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[13],
                    }
                ],
                Private:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Private Households GB',
                    color: '#70E6AB',
                    data:[7],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Private Households DE',
                    color: '#23EFEF',
                    data:[7],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Private Households CH',
                    color: '#C7F700',
                    data:[8],
                    },  
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Private Households USA',
                    color: '#0CBAF7',
                    data:[11],
                    }, 
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[8],
                    }
                ],
                Tourism:[{
                    showInLegend: false,
                    visible: true,
                    name: 'Tourist Attractions USA',
                    color: '#0CBAF7',
                    data:[11],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Tourist Attractions DE',
                    color: '#23EFEF',
                    data:[12],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Tourist Attractions CH',
                    color: '#C7F700',
                    data:[15],
                    },
                    {
                    showInLegend: false,
                    visible: true,
                    name: 'Tourist Attractions GB',
                    color: '#70E6AB',
                    data:[41],
                    },
                    {
                    showInLegend: false,
                    visible: false,
                    name: 'Average',
                    color: '#E6E6E6',
                    data:[12],
                    }
                ]
                
            }
        }
    }
}

</script>

<style scoped>
    .BubbleCharts {
        display: flex;
        justify-content: space-between;
        /* width: 85%; */
        margin-left: auto;
        margin-right: auto;
    }
</style>


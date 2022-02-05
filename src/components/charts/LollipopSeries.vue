<template>
    <div>
        <div class="LollipopSeries">
            <div class="lollipop-pair">
                <LollipopChartExpanded style="margin-bottom:7px" v-bind:series="series.Convinience" min="0" max ="80" title="Convenience" backgroundColor="rgba(246,246,246,0.5)"></LollipopChartExpanded>
                <LollipopChartExpanded v-bind:series="series.PrivacyViolation" min="-80" max ="0" title="Privacy Violation" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChartExpanded>
            </div>
            <div class="lollipop-pair">
                <LollipopChart style="margin-bottom:7px" v-bind:series="series.Efficiency" min="0" max ="80" title="Efficiency" backgroundColor="rgba(246,246,246,0.5)" ></LollipopChart>
                <LollipopChart v-bind:series="series.Discrimination " min="-80" max ="0" title="Discrimination" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChart>
            </div>
            <div class="lollipop-pair">
                <LollipopChart style="margin-bottom:7px" v-bind:series="series.Security" min="0" max ="80" title="Security" backgroundColor="rgba(246,246,246,0.5)" ></LollipopChart>
                <LollipopChart v-bind:series="series.Surveillance" min="-80" max ="0" title="Surveillance" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChart>
            </div>
        </div>
        <div class="glow-div">
        </div>
    </div>
</template>

<script>
import LollipopChart from './LollipopChart.vue';
import LollipopChartExpanded from './LollipopChartExpanded.vue';
export default {
    name: 'DumbbellSeries',
    components:{
        LollipopChart,
        LollipopChartExpanded
    },
    data(){
        return{
            series:{
                Convinience:[//start Gruppe
                    {//start Datagroup
                    showInLegend:false,
                    visible: true, //wenn per default sichtbar, dann auf true setzen
                    name:'CH', //erscheint im Tooltip
                    color: '#23EFEF', //Farbe der Kugel
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[
                        {
                        x:0,
                        y:65
                        }
                        ], //erscheint im Tooltip
                    marker: {
                        symbol: 'circle',
                        radius: 12, //Radius der Kugel in mm
                    }
                    }, //ende Datagroup
                    {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:1,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:2,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:3,
                        y:23
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }
                ],//ende Gruppe
                Efficiency:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:0,
                        y:56
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:1,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:2,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:3,
                        y:21
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }
                ],
                Security:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:0,
                        y:62
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:1,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:2,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:3,
                        y:55
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }
                ],
                PrivacyViolation:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:0,
                        y:-31
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:1,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:2,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:3,
                        y:-49
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }
                ],
                Discrimination:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:0,
                        y:-3
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:1,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:2,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:3,
                        y:-15
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }
                ],
                Surveillance:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:0,
                        y:-27
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:1,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:2,
                        y:0
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[{
                        x:3,
                        y:-63
                        }],
                    marker: {
                        symbol: 'circle',
                        radius: 12
                    }
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
    .LollipopSeries {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 55%;
        left: 32px; 
        right: 0; 
        top: 133px;
        margin-left: auto; 
        margin-right: auto; 
        padding-top: 100px;
    }
</style>



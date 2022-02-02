<template>
    <div>
        <div class="LollipopSeries">
            <div class="lollipop-pair">
                <LollipopChartExpanded v-bind:series="series.Convinience" min="0" max ="80" title="Convenience" backgroundColor="rgba(246,246,246,0.5)"></LollipopChartExpanded>
                <LollipopChartExpanded v-bind:series="series.PrivacyViolation" min="-80" max ="0" title="Privacy Violation" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChartExpanded>
            </div>
            <div class="lollipop-pair">
                <LollipopChart v-bind:series="series.Efficiency" min="0" max ="80" title="Efficiency" backgroundColor="rgba(246,246,246,0.5)" ></LollipopChart>
                <LollipopChart v-bind:series="series.Discrimination " min="-80" max ="0" title="Discrimination" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChart>
            </div>
            <div class="lollipop-pair">
                <LollipopChart v-bind:series="series.Security" min="0" max ="80" title="Security" backgroundColor="rgba(246,246,246,0.5)" ></LollipopChart>
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
                    color: '#C7F700', //Farbe der Kugel
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[65], //erscheint im Tooltip
                    marker: {
                        symbol: 'circle',
                        radius: 10, //Radius der Kugel in mm
                    }
                    }, //ende Datagroup
                    {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[23],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],//ende Gruppe
                Efficiency:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[56],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[21],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                Security:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[62],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[55],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                PrivacyViolation:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[-31],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[-49],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                Discrimination:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[-3],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[-15],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                Surveillance:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[-27],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'GB',
                    color: '#70E6AB',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: true,
                    name:'USA',
                    color: '#0CBAF7',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    connectorColor: '#F6F6F6',
                    connectorWidth: 2,
                    data:[-63],
                    marker: {
                        symbol: 'circle',
                        radius: 10
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
        width: 50%;
        left: -160px; 
        right: 0; 
        top: 125px;
        margin-left: auto; 
        margin-right: auto; 
        padding-top: 100px;
    }
    .glow-div {
        pointer-events: none;
        background-image: url('../../assets/data/v3/v3-glow-ecken-mit-schrift.svg');
        background-repeat: no-repeat;
        position: absolute;
        left: 146px; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        top: 209px;
        /* bottom: 113px; */
        /* left: 354px; */
        height: 850px;
        width: 1451px;
    }

    /* .st1{font-family:'futura-pt-condensed',sans-serif;} */
</style>



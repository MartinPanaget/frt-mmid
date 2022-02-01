<template>
    <div>
        <div class="LollipopSeries">
            <div class="lollipop-pair">
                <LollipopChartExpanded v-bind:series="series.Data1" min="0" max ="80" title="Convenience" backgroundColor="rgba(246,246,246,0.5)"></LollipopChartExpanded>
                <LollipopChartExpanded v-bind:series="series.Data2" min="-80" max ="0" title="Privacy Violation" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChartExpanded>
            </div>
            <div class="lollipop-pair">
                <LollipopChart v-bind:series="series.Data3" min="0" max ="80" title="Efficiency" backgroundColor="rgba(246,246,246,0.5)" ></LollipopChart>
                <LollipopChart v-bind:series="series.Data4" min="-80" max ="0" title="Discrimination" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChart>
            </div>
            <div class="lollipop-pair">
                <LollipopChart v-bind:series="series.Data5" min="0" max ="80" title="Security" backgroundColor="rgba(246,246,246,0.5)" ></LollipopChart>
                <LollipopChart v-bind:series="series.Data6" min="-80" max ="0" title="Surveillance" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChart>
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
                Data1:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'GB',
                    color: '#70E6AB',
                    data:[0],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'USA',
                    color: '#0CBAF7',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                Data2:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'GB',
                    color: '#70E6AB',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'USA',
                    color: '#0CBAF7',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                Data3:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'GB',
                    color: '#70E6AB',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'USA',
                    color: '#0CBAF7',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                Data4:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'GB',
                    color: '#70E6AB',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'USA',
                    color: '#0CBAF7',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                Data5:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'GB',
                    color: '#70E6AB',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'USA',
                    color: '#0CBAF7',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    data:[20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }
                ],
                Data6:[{
                    showInLegend:false,
                    visible: true,
                    name:'CH',
                    color: '#C7F700',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'GB',
                    color: '#70E6AB',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    }, {
                    showInLegend:false,
                    visible: false,
                    name:'USA',
                    color: '#0CBAF7',
                    data:[-20],
                    marker: {
                        symbol: 'circle',
                        radius: 10
                    }
                    },{
                    showInLegend:false,
                    visible: true,
                    name:'DE',
                    color: '#23EFEF',
                    data:[-20],
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
        left: 0; 
        right: 0; 
        top: 199px;
        margin-left: auto; 
        margin-right: auto; 
        padding-top: 100px;
    }
    .glow-div {
         pointer-events: none;
        background-image: url('../../assets/v3-glow-ecken.svg');
        background-repeat: no-repeat;
        position: absolute;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        top: 268px;
        /* bottom: 113px; */
        /* left: 354px; */
        height: 850px;
        width: 1465px;
    }
</style>



<template>
    <div>
        <div class="LollipopSeries frame">
            <div class="lollipop-pair">
                <LollipopChartExpanded v-bind:series="series.Data1" title="Convenience" backgroundColor="rgba(246,246,246,0.5)"></LollipopChartExpanded>
                <LollipopChartExpanded v-bind:series="series.Data2" title="Privacy Violation" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChartExpanded>
            </div>
            <div class="lollipop-pair">
                <LollipopChart v-bind:series="series.Data3" title="Efficiency" backgroundColor="rgba(246,246,246,0.5)" ></LollipopChart>
                <LollipopChart v-bind:series="series.Data4" title="Discrimination" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChart>
            </div>
            <div class="lollipop-pair">
                <LollipopChart v-bind:series="series.Data5" title="Security" backgroundColor="rgba(246,246,246,0.5)" ></LollipopChart>
                <LollipopChart v-bind:series="series.Data6" title="Surveillance" titleAlign="bottom" backgroundColor="rgba(203,203,203,0.3)"></LollipopChart>
            </div>
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
        display: flex;
        justify-content: space-between;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
</style>



import Vue from 'vue'
import App from './App.vue'
import Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more'
import HighchartsVue from 'highcharts-vue'
import loadMap from 'highcharts/modules/map.js';
import loadDumbbell from 'highcharts/modules/dumbbell.js';
import loadLollipop from 'highcharts/modules/lollipop.js';
import VueFullPage from 'vue-fullpage.js'

More(Highcharts)
Vue.use(HighchartsVue)
Vue.use(VueFullPage)
loadMap(Highcharts);
loadDumbbell(Highcharts);
loadLollipop(Highcharts);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

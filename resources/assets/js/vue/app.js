window.Vue = require('vue');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Chart from './components/Chart.vue'
import List from './components/List.vue'
import Job from './components/Job.vue'
import Stats from './components/Stats.vue'
import Config from './components/Config.vue'
import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
import VuetablePaginationBootstrap from './components/VuetablePaginationBootstrap.vue'
import VueHighcharts from 'vue-highcharts';

Vue.component('chart', Chart);
Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination-bootstrap', VuetablePaginationBootstrap);
Vue.component('job', Job);
Vue.component('list', List);
Vue.component('stats', Stats);
Vue.component('config', Config);

Vue.use(VueHighcharts);


const app = new Vue({
    el: '#app',
});

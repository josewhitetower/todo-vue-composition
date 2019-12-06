import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCompositionApi from '@vue/composition-api';

library.add(faPen, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCompositionApi);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

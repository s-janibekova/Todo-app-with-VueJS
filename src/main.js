import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import { state, actions, mutations, getters } from './store.js'

Vue.use(Vuex)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false;
// import "uikit/dist/css/uikit.min.css";


const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
})

new Vue({
	render: h => h(App),
	store
}).$mount('#app');

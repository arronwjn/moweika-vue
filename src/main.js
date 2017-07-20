// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {routerMode} from '../config/env'
import utils from './util'
import VueResource from 'vue-resource'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
//
// import { Popup } from 'mint-ui';
//
// Vue.component(Popup.name, Popup);
// Vue.use(MintUI);

Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

Vue.config.productionTip = false
Vue.prototype.util = utils


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

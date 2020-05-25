import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles'
import App from './App.vue';
import {fetch} from "./utils/axiosPro.js";

Vue.prototype.$fetch = fetch;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueParticles)
new Vue({
  render: (h) => h(App),
}).$mount('#app');

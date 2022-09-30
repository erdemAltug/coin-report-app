import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

global.vm = app;

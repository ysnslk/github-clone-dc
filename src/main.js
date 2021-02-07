import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import icons from "v-svg-icons";

Vue.config.productionTip = false;
Vue.component("icon", icons);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

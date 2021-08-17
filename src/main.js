import Vue from "vue";
import App from "./App.vue";
import "./style/vue-simple-drawer.scss";
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false;
Vue.use(VueLazyload);
new Vue({
  render: (h) => h(App),
}).$mount("#app");

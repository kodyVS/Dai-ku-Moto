import Vue from "vue";
import App from "./App.vue";
import "./style/vue-simple-drawer.scss";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: {
    id: "G-F4NV4Q7D7Y",
  },
});
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");

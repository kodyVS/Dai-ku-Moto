import Vue from "vue";
import App from "./App.vue";
import "./style/vue-simple-drawer.scss";
import VueLazyload from "vue-lazyload";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: {
    id: "UA-205231614-1",
  },
});
Vue.config.productionTip = false;
Vue.use(VueLazyload);
new Vue({
  render: (h) => h(App),
}).$mount("#app");

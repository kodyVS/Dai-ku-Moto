import Vue from "vue";
import App from "./App.vue";

// STYLESHEET IMPORTS
import "./style/vue-simple-drawer.scss";
import "./style/global-style-sheet.scss";

//GLOBAL COMPONENT IMPORTS
import VueGtag from "vue-gtag";
// Setting up VueGtag with a MEASUREMENT ID
Vue.use(VueGtag, {
  config: {
    id: "G-F4NV4Q7D7Y",
  },
});
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");

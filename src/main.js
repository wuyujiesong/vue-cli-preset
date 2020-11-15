import "./assets/css/index.css";
// 引入Vue对象
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.prototype.$http = axios;

// 创建vue根实例
new Vue({
  el: "#app",
  components: {
    App,
  },
  template: "<App />",
});

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import SemanticUI from "semantic-ui-vue";
import 'semantic-ui-css/semantic.min.css';
import ServerOverview from "@/ServerOverview/ServerOverview";
import ServerOverviewStart from "@/ServerOverview/ServerOverviewStart";
import ServerOverviewLogs from "@/ServerOverview/ServerOverviewLogs";
import ServerOverviewSystem from "@/ServerOverview/ServerOverviewSystem";
import ServerOverviewGraphs from "@/ServerOverview/ServerOverviewGraphs";
import ServerOverviewUpdate from "@/ServerOverview/ServerOverviewUpdate";
import ServerOverviewSettings from "@/ServerOverview/ServerOverviewSettings";

Vue.config.productionTip = false

Vue.use(SemanticUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: ServerOverview,
      children: [
        {
          path: '',
          component: ServerOverviewStart,
          name: "server-overview",
        },
        {
          path: 'server/logs/',
          component: ServerOverviewLogs,
          name: "server-logs",
        },
        {
          path: 'server/system/',
          component: ServerOverviewSystem,
          name: "server-system",
        },
        {
          path: 'server/graphs/',
          component: ServerOverviewGraphs,
          name: "server-graphs",
        },
        {
          path: 'server/update/',
          component: ServerOverviewUpdate,
          name: "server-update",
        },
        {
          path: 'server/settings/',
          component: ServerOverviewSettings,
          name: "server-settings",
        },
      ]
    },
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

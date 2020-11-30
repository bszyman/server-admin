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
import Afp from "@/Modules/AFP/Afp";
import ApplicationServer from "@/Modules/ApplicationServer/ApplicationServer";
import Dhcp from "@/Modules/DHCP/Dhcp";
import Dns from "@/Modules/DNS/Dns";
import AfpOverview from "@/Modules/AFP/AfpOverview";
import ApplicationServerOverview from "@/Modules/ApplicationServer/ApplicationServerOverview";
import DhcpOverview from "@/Modules/DHCP/DhcpOverview";
import DnsOverview from "@/Modules/DNS/DnsOverview";
import Firewall from "@/Modules/Firewall/Firewall";
import FirewallOverview from "@/Modules/Firewall/FirewallOverview";
import Ftp from "@/Modules/FTP/Ftp";
import FtpOverview from "@/Modules/FTP/FtpOverview";
import Mail from "@/Modules/Mail/Mail";
import MailOverview from "@/Modules/Mail/MailOverview";
import Nat from "@/Modules/NAT/Nat";
import NatOverview from "@/Modules/NAT/NatOverview";
import Netboot from "@/Modules/NetBoot/Netboot";
import NetbootOverview from "@/Modules/NetBoot/NetbootOverview";
import Nfs from "@/Modules/NFS/Nfs";
import NfsOverview from "@/Modules/NFS/NfsOverview";
import OpenDirectory from "@/Modules/OpenDirectory/OpenDirectory";
import Print from "@/Modules/Print/Print";
import PrintOverview from "@/Modules/Print/PrintOverview";
import Qtss from "@/Modules/QTSS/Qtss";
import QtssOverview from "@/Modules/QTSS/QtssOverview";
import Vpn from "@/Modules/VPN/Vpn";
import VpnOverview from "@/Modules/VPN/VpnOverview";
import Web from "@/Modules/Web/Web";
import WebOverview from "@/Modules/Web/WebOverview";
import Windows from "@/Modules/Windows/Windows";
import WindowsOverview from "@/Modules/Windows/WindowsOverview";
import OpenDirectoryOverview from "@/Modules/OpenDirectory/OpenDirectoryOverview";

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
    {
      path: '/afp',
      component: Afp,
      children: [
        {
          path: '',
          component: AfpOverview,
          name: "afp-overview",
        },
      ]
    },
    {
      path: '/application-server',
      component: ApplicationServer,
      children: [
        {
          path: '',
          component: ApplicationServerOverview,
          name: "as-overview",
        },
      ]
    },
    {
      path: '/dhcp',
      component: Dhcp,
      children: [
        {
          path: '',
          component: DhcpOverview,
          name: "dhcp-overview",
        },
      ]
    },
    {
      path: '/dns',
      component: Dns,
      children: [
        {
          path: '',
          component: DnsOverview,
          name: "dns-overview",
        },
      ]
    },
    {
      path: '/firewall',
      component: Firewall,
      children: [
        {
          path: '',
          component: FirewallOverview,
          name: "fw-overview",
        },
      ]
    },
    {
      path: '/ftp',
      component: Ftp,
      children: [
        {
          path: '',
          component: FtpOverview,
          name: "ftp-overview",
        },
      ]
    },
    {
      path: '/mail',
      component: Mail,
      children: [
        {
          path: '',
          component: MailOverview,
          name: "mail-overview",
        },
      ]
    },
    {
      path: '/nat',
      component: Nat,
      children: [
        {
          path: '',
          component: NatOverview,
          name: "nat-overview",
        },
      ]
    },
    {
      path: '/netboot',
      component: Netboot,
      children: [
        {
          path: '',
          component: NetbootOverview,
          name: "nb-overview",
        },
      ]
    },
    {
      path: '/nfs',
      component: Nfs,
      children: [
        {
          path: '',
          component: NfsOverview,
          name: "nfs-overview",
        },
      ]
    },
    {
      path: '/open-directory',
      component: OpenDirectory,
      children: [
        {
          path: '',
          component: OpenDirectoryOverview,
          name: "od-overview",
        },
      ]
    },
    {
      path: '/print',
      component: Print,
      children: [
        {
          path: '',
          component: PrintOverview,
          name: "print-overview",
        },
      ]
    },
    {
      path: '/quicktime-streaming',
      component: Qtss,
      children: [
        {
          path: '',
          component: QtssOverview,
          name: "qtss-overview",
        },
      ]
    },
    {
      path: '/vpn',
      component: Vpn,
      children: [
        {
          path: '',
          component: VpnOverview,
          name: "vpn-overview",
        },
      ]
    },
    {
      path: '/web',
      component: Web,
      children: [
        {
          path: '',
          component: WebOverview,
          name: "web-overview",
        },
      ]
    },
    {
      path: '/windows',
      component: Windows,
      children: [
        {
          path: '',
          component: WindowsOverview,
          name: "win-overview",
        },
      ]
    },
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

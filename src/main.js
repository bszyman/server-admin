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
import AfpLogs from "@/Modules/AFP/AfpLogs";
import AfpConnections from "@/Modules/AFP/AfpConnections";
import AfpGraphs from "@/Modules/AFP/AfpGraphs";
import AfpSettings from "@/Modules/AFP/AfpSettings";
import ApplicationServerLogs from "@/Modules/ApplicationServer/ApplicationServerLogs";
import ApplicationServerConnections from "@/Modules/ApplicationServer/ApplicationServerConnections";
import ApplicationServerSettings from "@/Modules/ApplicationServer/ApplicationServerSettings";
import DhcpLogs from "@/Modules/DHCP/DhcpLogs";
import DhcpClients from "@/Modules/DHCP/DhcpClients";
import DhcpSettings from "@/Modules/DHCP/DhcpSettings";
import DnsLog from "@/Modules/DNS/DnsLog";
import DnsActivity from "@/Modules/DNS/DnsActivity";
import DnsSettings from "@/Modules/DNS/DnsSettings";
import FirewallLog from "@/Modules/Firewall/FirewallLog";
import FirewallSettings from "@/Modules/Firewall/FirewallSettings";
import FtpLog from "@/Modules/FTP/FtpLog";
import FtpConnections from "@/Modules/FTP/FtpConnections";
import FtpGraph from "@/Modules/FTP/FtpGraph";
import FtpSettings from "@/Modules/FTP/FtpSettings";
import MailLogs from "@/Modules/Mail/MailLogs";
import MailConnections from "@/Modules/Mail/MailConnections";
import MailAccounts from "@/Modules/Mail/MailAccounts";
import MailSettings from "@/Modules/Mail/MailSettings";
import NatSettings from "@/Modules/NAT/NatSettings";
import NetbootLogs from "@/Modules/NetBoot/NetbootLogs";
import NetbootClients from "@/Modules/NetBoot/NetbootClients";
import NetbootSettings from "@/Modules/NetBoot/NetbootSettings";
import NfsSettings from "@/Modules/NFS/NfsSettings";
import OpenDirectoryLog from "@/Modules/OpenDirectory/OpenDirectoryLog";
import OpenDirectorySettings from "@/Modules/OpenDirectory/OpenDirectorySettings";
import PrintLogs from "@/Modules/Print/PrintLogs";
import PrintQueues from "@/Modules/Print/PrintQueues";
import PrintJobs from "@/Modules/Print/PrintJobs";
import PrintSettings from "@/Modules/Print/PrintSettings";
import QtssLogs from "@/Modules/QTSS/QtssLogs";
import QtssConnections from "@/Modules/QTSS/QtssConnections";
import QtssGraphs from "@/Modules/QTSS/QtssGraphs";
import QtssSettings from "@/Modules/QTSS/QtssSettings";
import VpnLog from "@/Modules/VPN/VpnLog";
import VpnConnections from "@/Modules/VPN/VpnConnections";
import VpnSettings from "@/Modules/VPN/VpnSettings";
import WebLog from "@/Modules/Web/WebLog";
import WebGraphs from "@/Modules/Web/WebGraphs";
import WebSettings from "@/Modules/Web/WebSettings";
import WindowsLogs from "@/Modules/Windows/WindowsLogs";
import WindowsConnections from "@/Modules/Windows/WindowsConnections";
import WindowsGraphs from "@/Modules/Windows/WindowsGraphs";
import WindowsSettings from "@/Modules/Windows/WindowsSettings";
import FirewallActiveRules from "@/Modules/Firewall/FirewallActiveRules";

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
        {
          path: 'logs',
          component: AfpLogs,
          name: "afp-logs",
        },
        {
          path: 'connections',
          component: AfpConnections,
          name: "afp-connections",
        },
        {
          path: 'graphs',
          component: AfpGraphs,
          name: "afp-graphs",
        },
        {
          path: 'settings',
          component: AfpSettings,
          name: "afp-settings",
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
        {
          path: 'logs',
          component: ApplicationServerLogs,
          name: "as-logs",
        },
        {
          path: 'connections',
          component: ApplicationServerConnections,
          name: "as-connections",
        },
        {
          path: 'settings',
          component: ApplicationServerSettings,
          name: "as-settings",
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
        {
          path: 'logs',
          component: DhcpLogs,
          name: "dhcp-logs",
        },
        {
          path: 'clients',
          component: DhcpClients,
          name: "dhcp-clients",
        },
        {
          path: 'settings',
          component: DhcpSettings,
          name: "dhcp-settings",
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
        {
          path: 'log',
          component: DnsLog,
          name: "dns-log",
        },
        {
          path: 'activity',
          component: DnsActivity,
          name: "dns-activity",
        },
        {
          path: 'settings',
          component: DnsSettings,
          name: "dns-settings",
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
        {
          path: 'log',
          component: FirewallLog,
          name: "fw-log",
        },
        {
          path: 'active-rules',
          component: FirewallActiveRules,
          name: "fw-active-rules",
        },
        {
          path: 'settings',
          component: FirewallSettings,
          name: "fw-settings",
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
        {
          path: 'log',
          component: FtpLog,
          name: "ftp-log",
        },
        {
          path: 'connections',
          component: FtpConnections,
          name: "ftp-connections",
        },
        {
          path: 'graph',
          component: FtpGraph,
          name: "ftp-graph",
        },
        {
          path: 'settings',
          component: FtpSettings,
          name: "ftp-settings",
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
        {
          path: 'logs',
          component: MailLogs,
          name: "mail-logs",
        },
        {
          path: 'connections',
          component: MailConnections,
          name: "mail-connections",
        },
        {
          path: 'accounts',
          component: MailAccounts,
          name: "mail-accounts",
        },
        {
          path: 'settings',
          component: MailSettings,
          name: "mail-settings",
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
        {
          path: 'settings',
          component: NatSettings,
          name: "nat-settings",
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
        {
          path: 'logs',
          component: NetbootLogs,
          name: "nb-logs",
        },
        {
          path: 'clients',
          component: NetbootClients,
          name: "nb-clients",
        },
        {
          path: 'settings',
          component: NetbootSettings,
          name: "nb-settings",
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
        {
          path: 'settings',
          component: NfsSettings,
          name: "nfs-settings",
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
        {
          path: 'log',
          component: OpenDirectoryLog,
          name: "od-log",
        },
        {
          path: 'settings',
          component: OpenDirectorySettings,
          name: "od-settings",
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
        {
          path: 'logs',
          component: PrintLogs,
          name: "print-logs",
        },
        {
          path: 'queues',
          component: PrintQueues,
          name: "print-queues",
        },
        {
          path: 'jobs',
          component: PrintJobs,
          name: "print-jobs",
        },
        {
          path: 'settings',
          component: PrintSettings,
          name: "print-settings",
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
        {
          path: 'logs',
          component: QtssLogs,
          name: "qtss-logs",
        },
        {
          path: 'connections',
          component: QtssConnections,
          name: "qtss-connections",
        },
        {
          path: 'graphs',
          component: QtssGraphs,
          name: "qtss-graphs",
        },
        {
          path: 'settings',
          component: QtssSettings,
          name: "qtss-settings",
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
        {
          path: 'log',
          component: VpnLog,
          name: "vpn-log",
        },
        {
          path: 'connections',
          component: VpnConnections,
          name: "vpn-connections",
        },
        {
          path: 'settings',
          component: VpnSettings,
          name: "vpn-settings",
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
        {
          path: 'log',
          component: WebLog,
          name: "web-log",
        },
        {
          path: 'graphs',
          component: WebGraphs,
          name: "web-graphs",
        },
        {
          path: 'settings',
          component: WebSettings,
          name: "web-settings",
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
        {
          path: 'logs',
          component: WindowsLogs,
          name: "win-logs",
        },
        {
          path: 'connections',
          component: WindowsConnections,
          name: "win-connections",
        },
        {
          path: 'graphs',
          component: WindowsGraphs,
          name: "win-graphs",
        },
        {
          path: 'settings',
          component: WindowsSettings,
          name: "win-settings",
        },
      ]
    },
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

<template>
  <sui-menu fluid vertical tabular>
    <router-link
        v-for="item in services"
        :key="item.id"
        is="sui-menu-item"
        :content="item.name"
        v-bind:active="serviceIsSelected(item.name)"
        :to="{ name: item.pathName }"
    />
  </sui-menu>
</template>

<script>
export default {
  name: 'ServiceNavigator',
  props: ["selectedService"],
  data() {
    return {
      services : [
        {
          name: "Server",
          path: "/",
          pathName: "server-overview",
          id: 1,
          enabled: true
        },
        {
          name: "AFP",
          path: "/afp",
          pathName: "afp-overview",
          id: 2,
          enabled: true
        },
        {
          name: "Application Server",
          path: "/application-server",
          pathName: "as-overview",
          id: 3,
          enabled: false
        },
        {
          name: "iChat",
          path: "/chat",
          pathName: "chat-overview",
          id: 4,
          enabled: false
        },
        {
          name: "DHCP",
          path: "/dhcp",
          pathName: "dhcp-overview",
          id: 5,
          enabled: false
        },
        {
          name: "DNS",
          path: "/dns",
          pathName: "dns-overview",
          id: 6,
          enabled: false
        },
        {
          name: "Firewall",
          path: "/firewall",
          pathName: "fw-overview",
          id: 7,
          enabled: true
        },
        {
          name: "FTP",
          path: "/ftp",
          pathName: "ftp-overview",
          id: 8,
          enabled: true
        },
        {
          name: "Mail",
          path: "/mail",
          pathName: "mail-overview",
          id: 9,
          enabled: true
        },
        {
          name: "NAT",
          path: "/nat",
          pathName: "nat-overview",
          id: 10,
          enabled: false
        },
        {
          name: "NetBoot",
          path: "/netboot",
          pathName: "nb-overview",
          id: 11,
          enabled: false
        },
        {
          name: "NFS",
          path: "/nfs",
          pathName: "nfs-overview",
          id: 12,
          enabled: true
        },
        {
          name: "Open Directory",
          path: "/open-directory",
          pathName: "od-overview",
          id: 13,
          enabled: false
        },
        {
          name: "Print",
          path: "/print",
          pathName: "print-overview",
          id: 14,
          enabled: false
        },
        {
          name: "QuickTime Streaming",
          path: "/qtss",
          pathName: "qtss-overview",
          id: 15,
          enabled: true
        },
        {
          name: "Software Update",
          path: "/software-update",
          pathName: "su-overview",
          id: 16,
          enabled: true
        },
        {
          name: "VPN",
          path: "/vpn",
          pathName: "vpn-overview",
          id: 17,
          enabled: false
        },
        {
          name: "Web",
          path: "/web",
          pathName: "web-overview",
          id: 18,
          enabled: true
        },
        {
          name: "Web Objects",
          path: "/web-objects",
          pathName: "wo-overview",
          id: 19,
          enabled: false
        },
        {
          name: "Windows",
          path: "/windows",
          pathName: "win-overview",
          id: 20,
          enabled: true
        },
        {
          name: "Xgrid",
          path: "/xgrid",
          pathName: "xg-overview",
          id: 21,
          enabled: true
        },
      ]
    }
  },
  methods: {
    serviceIsSelected: function(itemName) {
      return this.selectedService === itemName;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

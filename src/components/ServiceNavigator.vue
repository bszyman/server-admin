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
          id: 1
        },
        {
          name: "AFP",
          path: "/afp",
          pathName: "afp-overview",
          id: 2
        },
        {
          name: "Application Server",
          path: "/application-server",
          pathName: "as-overview",
          id: 3
        },
        {
          name: "DHCP",
          path: "/dhcp",
          pathName: "dhcp-overview",
          id: 4
        },
        {
          name: "DNS",
          path: "/dns",
          pathName: "dns-overview",
          id: 5
        },
        {
          name: "Firewall",
          path: "/firewall",
          pathName: "fw-overview",
          id: 6
        },
        {
          name: "FTP",
          path: "/ftp",
          pathName: "ftp-overview",
          id: 7
        },
        {
          name: "Mail",
          path: "/mail",
          pathName: "mail-overview",
          id: 8
        },
        {
          name: "NAT",
          path: "/nat",
          pathName: "nat-overview",
          id: 9
        },
        {
          name: "NetBoot",
          path: "/netboot",
          pathName: "nb-overview",
          id: 10
        },
        {
          name: "NFS",
          path: "/nfs",
          pathName: "nfs-overview",
          id: 11
        },
        {
          name: "Open Directory",
          path: "/open-directory",
          pathName: "od-overview",
          id: 12
        },
        {
          name: "Print",
          path: "/print",
          pathName: "print-overview",
          id: 13
        },
        {
          name: "QuickTime Streaming",
          path: "/qtss",
          pathName: "qtss-overview",
          id: 14
        },
        {
          name: "VPN",
          path: "/vpn",
          pathName: "vpn-overview",
          id: 15
        },
        {
          name: "Web",
          path: "/web",
          pathName: "web-overview",
          id: 16
        },
        {
          name: "Windows",
          path: "/windows",
          pathName: "win-overview",
          id: 17
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

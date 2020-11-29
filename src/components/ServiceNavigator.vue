<template>
  <sui-menu fluid vertical tabular>
    <a
        v-for="item in services"
        :key="item.id"
        is="sui-menu-item"
        :content="item.name"
        v-bind:active="serviceIsSelected(item.name)"
        :href="item.path"
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
          id: 1
        },
        {
          name: "AFP",
          path: "/afp",
          id: 2
        },
        {
          name: "Application Server",
          path: "/application-server",
          id: 3
        },
        {
          name: "DHCP",
          path: "/dhcp",
          id: 4
        },
        {
          name: "DNS",
          path: "/dns",
          id: 5
        },
        {
          name: "Firewall",
          path: "/firewall",
          id: 6
        },
        {
          name: "FTP",
          path: "/ftp",
          id: 7
        },
        {
          name: "Mail",
          path: "/mail",
          id: 8
        },
        {
          name: "NAT",
          path: "/nat",
          id: 9
        },
        {
          name: "NetBoot",
          path: "/netboot",
          id: 10
        },
        {
          name: "NFS",
          path: "/nfs",
          id: 11
        },
        {
          name: "Open Directory",
          path: "/open-directory",
          id: 12
        },
        {
          name: "Print",
          path: "/print",
          id: 13
        },
        {
          name: "QuickTime Streaming",
          path: "/qtss",
          id: 14
        },
        {
          name: "VPN",
          path: "/vpn",
          id: 15
        },
        {
          name: "Web",
          path: "/web",
          id: 16
        },
        {
          name: "Windows",
          path: "/windows",
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

<template>
  <sui-menu :widths="this.sections.length">
    <router-link
        v-for="item in sections"
        :key="item.id"
        is="sui-menu-item"
        :content="item.name"
        v-bind:active="sectionIsSelected(item.name)"
        :to="{ name: item.pathName }"
    />
  </sui-menu>
</template>

<script>
export default {
  name: 'FtpMenu',
  props: ["selectedSection"],
  data() {
    return {
      sections : [
        {
          name: "Overview",
          pathName: "ftp-overview",
          id: 1
        },
        {
          name: "Log",
          pathName: "ftp-log",
          id: 2
        },
        {
          name: "Connections",
          pathName: "ftp-connections",
          id: 3
        },
        {
          name: "Graph",
          pathName: "ftp-graph",
          id: 4
        },
        {
          name: "Settings",
          pathName: "ftp-settings",
          id: 5
        },
      ]
    }
  },
  methods: {
    sectionIsSelected: function(itemName) {
      return this.selectedSection === itemName;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

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
  name: 'ServerOverviewMenu',
  props: ["selectedSection"],
  data() {
    return {
      sections : [
        {
          name: "Overview",
          pathName: "server-overview",
          id: 1
        },
        {
          name: "Logs",
          pathName: "server-logs",
          id: 2
        },
        {
          name: "System",
          pathName: "server-system",
          id: 3
        },
        {
          name: "Graphs",
          pathName: "server-graphs",
          id: 4
        },
        {
          name: "Update",
          pathName: "server-update",
          id: 5
        },
        {
          name: "Settings",
          pathName: "server-settings",
          id: 6
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

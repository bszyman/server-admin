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
  name: 'QtssMenu',
  props: ["selectedSection"],
  data() {
    return {
      sections : [
        {
          name: "Overview",
          pathName: "qtss-overview",
          id: 1
        },
        {
          name: "Logs",
          pathName: "qtss-logs",
          id: 2
        },
        {
          name: "Connections",
          pathName: "qtss-connections",
          id: 3
        },
        {
          name: "Graphs",
          pathName: "qtss-graphs",
          id: 4
        },
        {
          name: "Settings",
          pathName: "qtss-settings",
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

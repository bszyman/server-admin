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
  name: 'NetbootMenu',
  props: ["selectedSection"],
  data() {
    return {
      sections : [
        {
          name: "Overview",
          pathName: "nb-overview",
          id: 1
        },
        {
          name: "Logs",
          pathName: "nb-logs",
          id: 2
        },{
          name: "Clients",
          pathName: "nb-clients",
          id: 3
        },
        {
          name: "Settings",
          pathName: "nb-settings",
          id: 4
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

<template>
  <sui-menu>
    <router-link
        v-for="item in sections"
        :key="item.id"
        is="sui-menu-item"
        :content="item.name"
        v-bind:active="sectionIsSelected(item.name)"
        :to="{ name: item.pathName }"
    />
    <sui-menu-menu position="right">
      <sui-dropdown item icon="cog" simple right>
        <sui-dropdown-menu>
          <sui-dropdown-item>Start Service</sui-dropdown-item>
          <sui-dropdown-item>Stop Service</sui-dropdown-item>
          <sui-dropdown-divider />
          <sui-dropdown-item>Refresh</sui-dropdown-item>
        </sui-dropdown-menu>
      </sui-dropdown>
    </sui-menu-menu>
  </sui-menu>
</template>

<script>
export default {
  name: 'WebMenu',
  props: ["selectedSection"],
  data() {
    return {
      sections : [
        {
          name: "Overview",
          pathName: "web-overview",
          id: 1
        },
        {
          name: "Log",
          pathName: "web-log",
          id: 2
        },
        {
          name: "Graphs",
          pathName: "web-graphs",
          id: 3
        },
        {
          name: "Settings",
          pathName: "web-settings",
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

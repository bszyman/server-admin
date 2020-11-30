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
  name: 'DnsMenu',
  props: ["selectedSection"],
  data() {
    return {
      sections : [
        {
          name: "Overview",
          pathName: "dns-overview",
          id: 1
        },
        {
          name: "Log",
          pathName: "dns-log",
          id: 2
        },
        {
          name: "Activity",
          pathName: "dns-activity",
          id: 3
        },
        {
          name: "Settings",
          pathName: "dns-settings",
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

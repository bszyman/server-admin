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
  name: 'MailMenu',
  props: ["selectedSection"],
  data() {
    return {
      sections : [
        {
          name: "Overview",
          pathName: "mail-overview",
          id: 1
        },
        {
          name: "Logs",
          pathName: "mail-logs",
          id: 2
        },
        {
          name: "Connections",
          pathName: "mail-connections",
          id: 3
        },
        {
          name: "Accounts",
          pathName: "mail-accounts",
          id: 4
        },
        {
          name: "Settings",
          pathName: "mail-settings",
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

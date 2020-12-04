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
  </sui-menu>
</template>

<script>
export default {
  name: 'PrintMenu',
  props: ["selectedSection"],
  data() {
    return {
      sections : [
        {
          name: "Overview",
          pathName: "print-overview",
          id: 1
        },
        {
          name: "Logs",
          pathName: "print-logs",
          id: 2
        },
        {
          name: "Queues",
          pathName: "print-queues",
          id: 3
        },
        {
          name: "Jobs",
          pathName: "print-jobs",
          id: 4
        },
        {
          name: "Settings",
          pathName: "print-settings",
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

<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <QtssMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div style="text-align: right;">
          <sui-dropdown
              placeholder="Graph Type"
              selection
              :options="connectionCategories"
              v-model="selectedConnectionCategory"
          />
        </div>
        <sui-segment></sui-segment>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import QtssMenu from "@/Modules/QTSS/Components/QtssMenu";
export default {
  name: "QtssConnections",
  components: {QtssMenu},
  data() {
    let connectionCategories = [
      { text: "Connected Users", value: 1 },
      { text: "Active Relays", value: 2}
    ];

    return {
      connectionCategories: connectionCategories,
      selectedConnectionCategory: 1
    }
  }
}
</script>

<style scoped>

</style>
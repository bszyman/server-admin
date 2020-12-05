<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <QtssMenu selected-section="Graphs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div style="text-align: right;">
          <sui-dropdown
              placeholder="Graph Type"
              selection
              :options="graphTypes"
              v-model="selectedGraphType"
          />
        </div>
        <sui-segment></sui-segment>
        <div style="text-align: center;">
          <span style="margin: 0 10px;">Hours</span>
          <input type="range" max="5" value="2" />
          <span style="margin: 0 10px;">Days</span>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import QtssMenu from "@/Modules/QTSS/Components/QtssMenu";
export default {
  name: "QtssGraphs",
  components: {QtssMenu},
  data() {
    let graphTypes = [
      { text: "Average Connected Users", value: 1 },
      { text: "Throughput", value: 2}
    ];

    return {
      graphTypes: graphTypes,
      selectedGraphType: 1
    }
  }
}
</script>

<style scoped>

</style>
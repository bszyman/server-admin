<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebMenu selected-section="Graphs" />
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
import WebMenu from "@/Modules/Web/Components/WebMenu";
export default {
  name: "WebGraphs",
  components: {WebMenu},
  data() {
    let graphTypes = [
      { text: "Requests", value: 1 },
      { text: "Throughput", value: 2},
      { text: "Requests w/Cache", value: 3},
      { text: "Throughput w/Cache", value: 4}
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
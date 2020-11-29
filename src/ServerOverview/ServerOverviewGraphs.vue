<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-menu :widths="6">
          <sui-menu-item><router-link :to="{ name: 'server-overview', params: {}}">Overview</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-logs', params: {}}">Logs</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-system', params: {}}">System</router-link></sui-menu-item>
          <sui-menu-item active>Graphs</sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-update', params: {}}">Update</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-settings', params: {}}">Settings</router-link></sui-menu-item>
        </sui-menu>
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
export default {
  name: "ServerOverviewStart",
  data() {
    let graphTypes = [
      { text: "CPU Usage", value: 1 },
      { text: "Network Traffic", value: 2}
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
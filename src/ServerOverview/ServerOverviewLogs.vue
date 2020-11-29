<template>
  <sui-form>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column :width="16">
          <sui-menu :widths="6">
            <sui-menu-item><router-link :to="{ name: 'server-overview', params: {}}">Overview</router-link></sui-menu-item>
            <sui-menu-item active>Logs</sui-menu-item>
            <sui-menu-item><router-link :to="{ name: 'server-system', params: {}}">System</router-link></sui-menu-item>
            <sui-menu-item><router-link :to="{ name: 'server-graphs', params: {}}">Graphs</router-link></sui-menu-item>
            <sui-menu-item><router-link :to="{ name: 'server-update', params: {}}">Update</router-link></sui-menu-item>
            <sui-menu-item><router-link :to="{ name: 'server-settings', params: {}}">Settings</router-link></sui-menu-item>
          </sui-menu>
        </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column :width="16">
          <sui-form-field>
            <textarea rows="21" readonly></textarea>
          </sui-form-field>
          <div class="controlBar">
            <div>
              <sui-form-field inline>
                <label>Show:</label>
                <sui-dropdown
                    placeholder="Closest City"
                    selection
                    :options="logTypeOptions"
                    v-model="selectedLogType"
                />
              </sui-form-field>
            </div>
            <div>
              <sui-form-field inline>
                <label for="filter-field">Filter:</label>
                <input type="text" id="filter-field" placeholder="Filter">
              </sui-form-field>
            </div>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-form>
</template>

<script>
export default {
  name: "ServerOverviewStart",
  data() {
    const logTypeOptions = [
      {
        key: 1,
        text: "System Log",
        value: 1
      },
      {
        key: 2,
        text: "Watchdog Event Log",
        value: 2
      },
      {
        key: 3,
        text: "Software Update Log",
        value: 3
      },
      {
        key: 4,
        text: "Server Settings Event Log",
        value: 4
      },
      {
        key: 5,
        text: "Server Settings Error Log",
        value: 5
      },
    ];

    return {
      logTypeOptions: logTypeOptions,
      selectedLogType: 1
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-menu :widths="6">
          <sui-menu-item><router-link :to="{ name: 'server-overview', params: {}}">Overview</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-logs', params: {}}">Logs</router-link></sui-menu-item>
          <sui-menu-item active>System</sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-graphs', params: {}}">Graphs</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-update', params: {}}">Update</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-settings', params: {}}">Settings</router-link></sui-menu-item>
        </sui-menu>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="Hardware">
            <p style="text-align: center;">CPU Usage: 7.15%</p>
            <p style="text-align: center;">Network Traffic: 0.0 B/second</p>
            <sui-segment>
            </sui-segment>
            <p style="text-align: left;">List of interfaces is refreshed every minute.</p>
            <sui-divider hidden />
            <p style="text-align: center;">Volumes Information</p>
            <sui-segment>
            </sui-segment>
          </sui-tab-pane>
          <sui-tab-pane title="Quotas">
            <sui-form>
              <sui-form-field>
                <textarea rows="21" readonly>No users and groups quotas</textarea>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: "ServerOverviewStart"
}
</script>

<style scoped>

</style>
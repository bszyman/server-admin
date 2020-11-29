<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-menu :widths="6">
          <sui-menu-item><router-link :to="{ name: 'server-overview', params: {}}">Overview</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-logs', params: {}}">Logs</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-system', params: {}}">System</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-graphs', params: {}}">Graphs</router-link></sui-menu-item>
          <sui-menu-item active>Update</sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-settings', params: {}}">Settings</router-link></sui-menu-item>
        </sui-menu>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <p>Select the software you want to install and click on Install:</p>
        <sui-segment></sui-segment>
        <p>Click on Check Now to check for available updates</p>
        <div class="controlBar">
          <div>
            <sui-button>Check Now</sui-button>
          </div>
          <div>
            <sui-button>Reboot...</sui-button>
            <sui-button>Install</sui-button>
          </div>
        </div>
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
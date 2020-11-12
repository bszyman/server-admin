<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-menu>
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
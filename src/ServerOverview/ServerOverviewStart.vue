<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-menu :widths="6">
          <sui-menu-item active>Overview</sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-logs', params: {}}">Logs</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-system', params: {}}">System</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-graphs', params: {}}">Graphs</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-update', params: {}}">Update</router-link></sui-menu-item>
          <sui-menu-item><router-link :to="{ name: 'server-settings', params: {}}">Settings</router-link></sui-menu-item>
        </sui-menu>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-table compact basic="very">
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>System Version:</sui-table-cell>
              <sui-table-cell>Mac OS X 10.3.4 (Build 7H63)</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Server Version:</sui-table-cell>
              <sui-table-cell>Mac OS X Server 10.3.4 (Build 7H63)</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Computer Name:</sui-table-cell>
              <sui-table-cell>Cocos</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Rendezvous Name:</sui-table-cell>
              <sui-table-cell>Cocos.local</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>Default AppleTalk Zone:</sui-table-cell>
              <sui-table-cell>Unspecified</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>License Type:</sui-table-cell>
              <sui-table-cell>Unlimited-client license</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
        <sui-divider />
        <p style="text-align: center;">
          System Start Time: Sunday, September 1, 2019 11:40:48 AM America/New_York
        </p>
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
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <VpnMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div class="table-container" style="margin-top: 20px;">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>User Name</sui-table-header-cell>
                <sui-table-header-cell>Remote IP Address</sui-table-header-cell>
                <sui-table-header-cell>Internal IP Address</sui-table-header-cell>
                <sui-table-header-cell>Protocol</sui-table-header-cell>
                <sui-table-header-cell>Connected For</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="c in connections" :key="c.id">
                <sui-table-cell>{{ c.username }}</sui-table-cell>
                <sui-table-cell>{{ c.remoteIPAddress }}</sui-table-cell>
                <sui-table-cell>{{ c.internalIPAddress }}</sui-table-cell>
                <sui-table-cell>{{ c.protocol }}</sui-table-cell>
                <sui-table-cell>{{ c.connectedFor }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-table basic="very">
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell text-align="center">
                <p>L2TP Connections: 0</p>
              </sui-table-cell>
              <sui-table-cell text-align="center">
                <p>PTPP Connections: 0</p>
              </sui-table-cell>
              <sui-table-cell text-align="center">
                <p>Total Connections: 0</p>
              </sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import VpnMenu from "@/Modules/VPN/Components/VpnMenu";
export default {
  name: "VpnConnections",
  components: {VpnMenu},
  data() {
    return {
      connections: []
    }
  }
}
</script>

<style scoped>

</style>
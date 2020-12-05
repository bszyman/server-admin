<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <VpnMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-segment></sui-segment>
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
  components: {VpnMenu}
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <VpnMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          VPN Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Current Connections:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">L2TP:</sui-table-cell>
                <sui-table-cell :width="8">Disabled</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Authentication:</sui-table-cell>
                <sui-table-cell :width="8">MS-CHAPv2</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">PPTP:</sui-table-cell>
                <sui-table-cell :width="8">Disabled</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Authentication:</sui-table-cell>
                <sui-table-cell :width="8">MS-CHAPv2</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Encryption:</sui-table-cell>
                <sui-table-cell :width="8">128-bit MPPE</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-divider />
        <p style="text-align: center;">
          Start Time: Not available - Service is not running
        </p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import VpnMenu from "@/Modules/VPN/Components/VpnMenu";
export default {
  name: "VpnOverview",
  components: {VpnMenu}
}
</script>

<style scoped>

</style>
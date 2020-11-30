<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DhcpMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          DHCP Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Last Client Database Update:</sui-table-cell>
                <sui-table-cell :width="8">Not available</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Current DHCP Clients:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
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
import DhcpMenu from "@/Modules/DHCP/Components/DhcpMenu";
export default {
  name: "DhcpOverview",
  components: {DhcpMenu}
}
</script>

<style scoped>

</style>
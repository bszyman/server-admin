<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FirewallMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Firewall Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Number of Static Rules:</sui-table-cell>
                <sui-table-cell :width="8">1</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Number of Dynamic Rules:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Number of Matching Packets:</sui-table-cell>
                <sui-table-cell :width="8">2873</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Bytes in Matching Packets:</sui-table-cell>
                <sui-table-cell :width="8">272.56 KB</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-divider />
        <p style="text-align: center;">
          Last Updated: Monday, January 2, 2006 9:25:05 PM America/New_York
        </p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FirewallMenu from "@/Modules/Firewall/Components/FirewallMenu";
export default {
  name: "FirewallOverview",
  components: {FirewallMenu}
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DnsMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          DNS Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Zones Allocated:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Query Logging is:</sui-table-cell>
                <sui-table-cell :width="8">Off</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">DNS Version:</sui-table-cell>
                <sui-table-cell :width="8"></sui-table-cell>
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
import DnsMenu from "@/Modules/DNS/Components/DnsMenu";
export default {
  name: "DnsOverview",
  components: {DnsMenu}
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Web Service is: Running
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Requests/second:</sui-table-cell>
                <sui-table-cell :width="8">0.0</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Cache Requests/second:</sui-table-cell>
                <sui-table-cell :width="8">0.0</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Throughput (MB/second):</sui-table-cell>
                <sui-table-cell :width="8">0.000000</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Cache Throughput (MB/second):</sui-table-cell>
                <sui-table-cell :width="8">0.000000</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-divider />
        <p style="text-align: center;">
          Start Time: Wednesday, October 2, 2019 10:10:55 PM America/New_York
        </p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WebMenu from "@/Modules/Web/Components/WebMenu";
export default {
  name: "WebOverview",
  components: {WebMenu}
}
</script>

<style scoped>

</style>
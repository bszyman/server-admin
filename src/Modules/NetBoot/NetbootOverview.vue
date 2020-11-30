<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NetbootMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          NetBoot Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">DHCP:</sui-table-cell>
                <sui-table-cell :width="8">Stopped</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">NFS:</sui-table-cell>
                <sui-table-cell :width="8">Stopped</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">AFP:</sui-table-cell>
                <sui-table-cell :width="8">Running</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-divider />
        <p style="text-align: center;">
          Last client database update: Sunday, September 29, 2019 10:54:16 AM America/New_York
        </p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import NetbootMenu from "@/Modules/NetBoot/Components/NetbootMenu";
export default {
  name: "NetbootOverview",
  components: {NetbootMenu}
}
</script>

<style scoped>

</style>
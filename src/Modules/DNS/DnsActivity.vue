<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DnsMenu selected-section="Activity" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center;">Server Reloaded: Date and time not available</p>

        <sui-table compact basic="very">
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell :width="8" text-align="right">SOA Queries in Progress:</sui-table-cell>
              <sui-table-cell :width="8">0</sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell :width="8" text-align="right">Zone Transfers Running:</sui-table-cell>
              <sui-table-cell :width="8">Off</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>

        <p>Current Queries</p>
        <sui-segment></sui-segment>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import DnsMenu from "@/Modules/DNS/Components/DnsMenu";
export default {
  name: "DnsActivity",
  components: {DnsMenu}
}
</script>

<style scoped>

</style>
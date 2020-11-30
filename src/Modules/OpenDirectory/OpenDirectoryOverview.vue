<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <OpenDirectoryMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Open Directory Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Lookup Server (lookupd) is:</sui-table-cell>
                <sui-table-cell :width="8">Running</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">NetInfo Server (netinfod) is:</sui-table-cell>
                <sui-table-cell :width="8">Running</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">LDAP Server (slapd) is:</sui-table-cell>
                <sui-table-cell :width="8">Stopped</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Password Server is:</sui-table-cell>
                <sui-table-cell :width="8">Running</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">KDC is:</sui-table-cell>
                <sui-table-cell :width="8">Stopped</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-divider />
        <p style="text-align: center;"></p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import OpenDirectoryMenu from "@/Modules/OpenDirectory/Components/OpenDirectoryMenu";
export default {
  name: "OpenDirectoryOverview",
  components: {OpenDirectoryMenu}
}
</script>

<style scoped>

</style>
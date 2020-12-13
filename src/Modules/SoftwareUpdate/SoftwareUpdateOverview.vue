<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <SoftwareUpdateMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Software Update Service is: Running
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Lack Check for Updates:</sui-table-cell>
                <sui-table-cell :width="8">12/12/05 17:29:09</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Updates Mirrored:</sui-table-cell>
                <sui-table-cell :width="8">185</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Updates Enabled:</sui-table-cell>
                <sui-table-cell :width="8">185</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Auto-Mirror:</sui-table-cell>
                <sui-table-cell :width="8">On</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Auto-Enable:</sui-table-cell>
                <sui-table-cell :width="8">On</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-divider />
        <p style="text-align: center;">
          Start Time: Monday, December 12, 2005 2:30:41 PM America/New_York
        </p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import SoftwareUpdateMenu from "@/Modules/SoftwareUpdate/Components/SoftwareUpdateMenu";
export default {
  name: "SoftwareUpdateOverview",
  components: {SoftwareUpdateMenu}
}
</script>

<style scoped>

</style>
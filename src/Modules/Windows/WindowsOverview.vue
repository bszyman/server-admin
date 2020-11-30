<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WindowsMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Windows Service is: Running
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
                <sui-table-cell :width="8" text-align="right">Guest Access:</sui-table-cell>
                <sui-table-cell :width="8">Off</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Logging:</sui-table-cell>
                <sui-table-cell :width="8">Off</sui-table-cell>
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
import WindowsMenu from "@/Modules/Windows/Components/WindowsMenu";
export default {
  name: "WindowsOverview",
  components: {WindowsMenu}
}
</script>

<style scoped>

</style>
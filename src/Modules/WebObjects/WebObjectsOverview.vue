<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebObjectsMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          WebObjects Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Monitor is:</sui-table-cell>
                <sui-table-cell :width="8">Stopped</sui-table-cell>
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
import WebObjectsMenu from "@/Modules/WebObjects/Components/WebObjectsMenu";
export default {
  name: "NatOverview",
  components: {WebObjectsMenu}
}
</script>

<style scoped>

</style>
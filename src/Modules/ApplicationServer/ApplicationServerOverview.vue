<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ApplicationServerMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Application Server is: Not available
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Configuration type:</sui-table-cell>
                <sui-table-cell :width="8"></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">JBoss version:</sui-table-cell>
                <sui-table-cell :width="8"></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Tomcat version:</sui-table-cell>
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
import ApplicationServerMenu from "@/Modules/ApplicationServer/Components/ApplicationServerMenu";
export default {
  name: "ApplicationServerOverview",
  components: {ApplicationServerMenu}
}
</script>

<style scoped>

</style>
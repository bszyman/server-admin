<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <XgridMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Xgrid Service is: Running
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Agent:</sui-table-cell>
                <sui-table-cell :width="8">Not available</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Controlled by:</sui-table-cell>
                <sui-table-cell :width="8">Not available</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Working:</sui-table-cell>
                <sui-table-cell :width="8">Not available</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Available:</sui-table-cell>
                <sui-table-cell :width="8">Not available</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>

          <sui-table compact basic="very" style="margin-top: 50px;">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Controller:</sui-table-cell>
                <sui-table-cell :width="8">Running</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Agents:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Working:</sui-table-cell>
                <sui-table-cell :width="8">0.00 GHz</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Available:</sui-table-cell>
                <sui-table-cell :width="8">0.00 GHz</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Jobs Running:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Jobs Pending:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
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
import XgridMenu from "@/Modules/Xgrid/Components/XgridMenu";
export default {
  name: "XgridOverview",
  components: {XgridMenu}
}
</script>

<style scoped>

</style>
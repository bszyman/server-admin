<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ServerOverviewMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">System Version:</sui-table-cell>
                <sui-table-cell :width="8">Mac OS X 10.3.4 (Build 7H63)</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Server Version:</sui-table-cell>
                <sui-table-cell :width="8">Mac OS X Server 10.3.4 (Build 7H63)</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Computer Name:</sui-table-cell>
                <sui-table-cell :width="8">Cocos</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Rendezvous Name:</sui-table-cell>
                <sui-table-cell :width="8">Cocos.local</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Default AppleTalk Zone:</sui-table-cell>
                <sui-table-cell :width="8">Unspecified</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">License Type:</sui-table-cell>
                <sui-table-cell :width="8">Unlimited-client license</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
        <sui-divider />
        <p style="text-align: center;">
          System Start Time: Sunday, September 1, 2019 11:40:48 AM America/New_York
        </p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import ServerOverviewMenu from "@/ServerOverview/Components/ServerOverviewMenu";
export default {
  name: "ServerOverviewStart",
  components: {ServerOverviewMenu}
}
</script>

<style scoped>

</style>
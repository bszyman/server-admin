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
          <sui-table compact basic="very" style="margin-left: auto; margin-right: auto; max-width: 500px;">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Image Type</sui-table-header-cell>
                <sui-table-header-cell text-align="center">Enabled</sui-table-header-cell>
                <sui-table-header-cell text-align="center">AFP</sui-table-header-cell>
                <sui-table-header-cell text-align="center">NFS</sui-table-header-cell>
                <sui-table-header-cell text-align="center">HTTP</sui-table-header-cell>
                <sui-table-header-cell text-align="center">DHCP</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>NetBoot Mac OS X</sui-table-cell>
                <sui-table-cell text-align="center">No</sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>NetBoot Mac OS X (diskless)</sui-table-cell>
                <sui-table-cell text-align="center">No</sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Network Install Mac OS X</sui-table-cell>
                <sui-table-cell text-align="center">No</sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>NetBoot Mac OS 9</sui-table-cell>
                <sui-table-cell text-align="center">No</sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
                <sui-table-cell text-align="center"></sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>

          <p style="margin-left: auto; margin-right: auto; max-width: 500px;">
            Mac OS X diskless NetBoot and Mac OS 9 images require AFP. Mac OS X
            images require either HTTP or NFS. DHCP is required only if this server
            assigns IP addresses.
          </p>
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
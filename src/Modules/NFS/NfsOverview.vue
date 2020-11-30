<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NfsMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          NFS Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">mountd is:</sui-table-cell>
                <sui-table-cell :width="8">Stopped</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">nfsd is:</sui-table-cell>
                <sui-table-cell :width="8">Stopped</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">portmap is:</sui-table-cell>
                <sui-table-cell :width="8">Running</sui-table-cell>
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
import NfsMenu from "@/Modules/NFS/Components/NfsMenu";
export default {
  name: "NfsOverview",
  components: {NfsMenu}
}
</script>

<style scoped>

</style>
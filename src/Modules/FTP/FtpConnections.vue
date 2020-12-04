<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FtpMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-segment></sui-segment>
        <p>Number of connections: 0</p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FtpMenu from "@/Modules/FTP/Components/FtpMenu";
export default {
  name: "FtpConnections",
  components: {FtpMenu}
}
</script>

<style scoped>

</style>
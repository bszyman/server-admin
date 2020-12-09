<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FtpMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div class="table-container">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell text-align="center">Name</sui-table-header-cell>
                <sui-table-header-cell>Type</sui-table-header-cell>
                <sui-table-header-cell>Address</sui-table-header-cell>
                <sui-table-header-cell>Activity</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="connection in connections" :key="connection.id">
                <sui-table-cell text-align="center">{{ connection.name }}</sui-table-cell>
                <sui-table-cell>{{ connection.cnx_type }}</sui-table-cell>
                <sui-table-cell>{{ connection.address }}</sui-table-cell>
                <sui-table-cell>{{ connection.activity }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
        <p>Number of connections: {{ connections.length }}</p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FtpMenu from "@/Modules/FTP/Components/FtpMenu";
export default {
  name: "FtpConnections",
  components: {FtpMenu},
  data() {
    return {
      connections: []
    }
  }
}
</script>

<style scoped>

</style>
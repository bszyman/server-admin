<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <afp-menu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div class="table-container">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Address</sui-table-header-cell>
                <sui-table-header-cell>Connected</sui-table-header-cell>
                <sui-table-header-cell>Idle For</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="connection in connections" :key="connection.id">
                <sui-table-cell>{{ connection.name }}</sui-table-cell>
                <sui-table-cell>{{ connection.status }}</sui-table-cell>
                <sui-table-cell>{{ connection.address }}</sui-table-cell>
                <sui-table-cell>{{ connection.connected }}</sui-table-cell>
                <sui-table-cell>{{ connection.idleFor }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
        <p>Number of connections: 0</p>
        <div class="controlBar">
          <div>
            <sui-button>Stop...</sui-button>
          </div>
          <div>
            <sui-button>Send Message...</sui-button>
            <sui-button>Disconnect</sui-button>
          </div>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import AfpMenu from "@/Modules/AFP/Components/AfpMenu";
export default {
  name: "AfpConnections",
  components: {AfpMenu},
  data() {
    let connections = [];

    for(let x = 0; x < 30; x += 1) {
      connections.push({
        "id": (x + 1),
        "name": "Connection " + (x + 1),
        "status": "Online",
        "address": "192.168.1.100",
        "connected": "Yes",
        "idleFor": "5:00"
      });
    }

    return {
      connections: connections
    }
  }
}
</script>

<style scoped>

</style>
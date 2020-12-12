<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WindowsMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div class="table-container">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>IP Address</sui-table-header-cell>
                <sui-table-header-cell>Time</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="connection in connections" :key="connection.id">
                <sui-table-cell>{{ connection.name }}</sui-table-cell>
                <sui-table-cell>{{ connection.ipAddress }}</sui-table-cell>
                <sui-table-cell>{{ connection.time }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
        <div class="controlBar">
          <div>
            <p>Number of connections: 0</p>
          </div>
          <div>
            <sui-button>Disconnect...</sui-button>
          </div>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WindowsMenu from "@/Modules/Windows/Components/WindowsMenu";
export default {
  name: "WindowsConnections",
  components: {WindowsMenu},
  data() {
    return {
      connections: []
    }
  }
}
</script>

<style scoped>

</style>
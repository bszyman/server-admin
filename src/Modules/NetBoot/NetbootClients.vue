<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NetbootMenu selected-section="Clients" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div class="table-container" style="height: 375px;">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Host Name</sui-table-header-cell>
                <sui-table-header-cell>Address</sui-table-header-cell>
                <sui-table-header-cell>Hardware Address</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="client in clients" :key="client.id">
                <sui-table-cell>{{ client.hostName }}</sui-table-cell>
                <sui-table-cell>{{ client.address }}</sui-table-cell>
                <sui-table-cell>{{ client.hardwareAddress }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
        <sui-segment>
          <h4>Additional Info</h4>
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>System Type:</sui-table-cell>
                <sui-table-cell></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Client Name:</sui-table-cell>
                <sui-table-cell></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Index:</sui-table-cell>
                <sui-table-cell></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Last Boot Time:</sui-table-cell>
                <sui-table-cell></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>Image Name:</sui-table-cell>
                <sui-table-cell></sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </sui-segment>
        <p>Number of clients: 0</p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import NetbootMenu from "@/Modules/NetBoot/Components/NetbootMenu";
export default {
  name: "NetbootClients",
  components: {NetbootMenu},
  data() {
    return {
      clients: []
    }
  }
}
</script>

<style scoped>

</style>
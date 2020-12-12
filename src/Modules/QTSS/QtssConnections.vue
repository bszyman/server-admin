<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <QtssMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div style="text-align: right;">
          <sui-dropdown
              placeholder="Graph Type"
              selection
              :options="connectionCategories"
              v-model="selectedConnectionCategory"
          />
        </div>
        <div class="table-container" style="margin-top: 20px;">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Type</sui-table-header-cell>
                <sui-table-header-cell>IP Address</sui-table-header-cell>
                <sui-table-header-cell>Bit Rate</sui-table-header-cell>
                <sui-table-header-cell>Bytes Sent</sui-table-header-cell>
                <sui-table-header-cell>% Packet</sui-table-header-cell>
                <sui-table-header-cell>Time</sui-table-header-cell>
                <sui-table-header-cell>Path</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="c in connections" :key="c.id">
                <sui-table-cell>{{ c.id }}</sui-table-cell>
                <sui-table-cell>{{ c.ipAddress }}</sui-table-cell>
                <sui-table-cell>{{ c.bitRate }}</sui-table-cell>
                <sui-table-cell>{{ c.bytesSent }}</sui-table-cell>
                <sui-table-cell>{{ c.percentPacket }}</sui-table-cell>
                <sui-table-cell>{{ c.time }}</sui-table-cell>
                <sui-table-cell>{{ c.path }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import QtssMenu from "@/Modules/QTSS/Components/QtssMenu";
export default {
  name: "QtssConnections",
  components: {QtssMenu},
  data() {
    let connectionCategories = [
      { text: "Connected Users", value: 1 },
      { text: "Active Relays", value: 2}
    ];

    return {
      connectionCategories: connectionCategories,
      selectedConnectionCategory: 1,
      connections: [],
    }
  }
}
</script>

<style scoped>

</style>
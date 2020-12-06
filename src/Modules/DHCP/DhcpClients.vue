<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DhcpMenu selected-section="Clients" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div class="table-container">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Computer Name</sui-table-header-cell>
                <sui-table-header-cell>Hardware Address</sui-table-header-cell>
                <sui-table-header-cell>Client ID</sui-table-header-cell>
                <sui-table-header-cell>IP Address</sui-table-header-cell>
                <sui-table-header-cell>Lease Remaining</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="client in clients" :key="client.id">
                <sui-table-cell>{{ client.computerName }}</sui-table-cell>
                <sui-table-cell>{{ client.hardwareAddress }}</sui-table-cell>
                <sui-table-cell>{{ client.clientID }}</sui-table-cell>
                <sui-table-cell>{{ client.ipAddress }}</sui-table-cell>
                <sui-table-cell>{{ client.leaseRemaining }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <p>Number of clients: 0</p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import DhcpMenu from "@/Modules/DHCP/Components/DhcpMenu";
export default {
  name: "DhcpClients",
  components: {DhcpMenu},
  data() {
    let clients = [];

    for (let x = 0; x < 30; x += 1) {
      clients.push({
        id: (x + 1),
        computerName: "Ben's Mac mini",
        hardwareAddress: "00:ff:11:22:ss:dd:55:kd",
        clientID: "123",
        ipAddress: "192.168.1.116",
        leaseRemaining: "23:00",
      });
    }

    return {
      clients: clients
    }
  }
}
</script>

<style scoped>

</style>
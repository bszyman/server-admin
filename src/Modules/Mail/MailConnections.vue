<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <MailMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div class="table-container">
        <sui-table compact selectable padded basic="very">
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>User Name</sui-table-header-cell>
              <sui-table-header-cell>Address</sui-table-header-cell>
              <sui-table-header-cell>Type</sui-table-header-cell>
              <sui-table-header-cell>Sessions</sui-table-header-cell>
              <sui-table-header-cell>Connection Length</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row v-for="connection in connections" :key="connection.id">
              <sui-table-cell>{{ connection.username }}</sui-table-cell>
              <sui-table-cell>{{ connection.address }}</sui-table-cell>
              <sui-table-cell>{{ connection.type }}</sui-table-cell>
              <sui-table-cell>{{ connection.sessions }}</sui-table-cell>
              <sui-table-cell>{{ connection.connectionLength }}</sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </div>
        <sui-table basic="very">
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell text-align="center">
                <p>IMAP Connections: 0</p>
              </sui-table-cell>
              <sui-table-cell text-align="center">
                <p>POP Connections: 0</p>
              </sui-table-cell>
              <sui-table-cell text-align="center">
                <p>Total Connections: 0</p>
              </sui-table-cell>
            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import MailMenu from "@/Modules/Mail/Components/MailMenu";
export default {
  name: "MailConnections",
  components: {MailMenu},
  data() {
    return {
      connections: []
    }
  }
}
</script>

<style scoped>

</style>
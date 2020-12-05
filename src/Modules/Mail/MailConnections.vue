<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <MailMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-segment></sui-segment>
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
  components: {MailMenu}
}
</script>

<style scoped>

</style>
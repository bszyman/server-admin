<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FirewallMenu selected-section="Active Rules" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-form>
          <h4>Active Rules:</h4>

          <div class="table-container">
            <sui-table compact selectable padded basic="very">
              <sui-table-header>
                <sui-table-row>
                  <sui-table-header-cell>Priority</sui-table-header-cell>
                  <sui-table-header-cell>Packets</sui-table-header-cell>
                  <sui-table-header-cell>Bytes</sui-table-header-cell>
                  <sui-table-header-cell>Rule</sui-table-header-cell>
                </sui-table-row>
              </sui-table-header>
              <sui-table-body>
                <sui-table-row v-for="rule in activeRules" :key="rule.id">
                  <sui-table-cell>{{ rule.priority }}</sui-table-cell>
                  <sui-table-cell>{{ rule.packets }}</sui-table-cell>
                  <sui-table-cell>{{ rule.bytes }}</sui-table-cell>
                  <sui-table-cell>{{ rule.description }}</sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
          </div>

          <p style="text-align: center;">
            Last Updated: Monday, January 2, 2006 9:25:05 PM America/New_York
          </p>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FirewallMenu from "@/Modules/Firewall/Components/FirewallMenu";
export default {
  name: "FirewallActiveRules",
  components: {FirewallMenu},
  data() {
    const activeRules = [
      { id: 1, priority: "00001", packets: 0, bytes: "0.0 B", description: "allow udp from any to 626 to any dst-port 626"}
    ];

    return {
      activeRules: activeRules
    }
  }
}
</script>

<style scoped>

</style>
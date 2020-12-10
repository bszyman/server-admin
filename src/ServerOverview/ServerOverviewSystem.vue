<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ServerOverviewMenu selected-section="System" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="Hardware">
            <p style="text-align: center;">CPU Usage: 7.15%</p>
            <p style="text-align: center;">Network Traffic: 0.0 B/second</p>
            <h4>Interfaces Information</h4>
            <div class="table-container" style="height: 225px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Name</sui-table-header-cell>
                    <sui-table-header-cell>Family</sui-table-header-cell>
                    <sui-table-header-cell>IP Address</sui-table-header-cell>
                    <sui-table-header-cell>DNS Name</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="nic in interfaces" :key="nic.id">
                    <sui-table-cell :width="4">{{ nic.name }}</sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">{{ nic.family }}</sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">{{ nic.ipAddress }}</sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">{{ nic.dnsName }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>
            <p style="text-align: left;">List of interfaces is refreshed every minute.</p>
            <sui-divider hidden />
            <h4>Volumes Information</h4>
            <div class="table-container" style="height: 225px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Name</sui-table-header-cell>
                    <sui-table-header-cell>Capacity</sui-table-header-cell>
                    <sui-table-header-cell>Available</sui-table-header-cell>
                    <sui-table-header-cell>% Free</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="volume in volumes" :key="volume.id">
                    <sui-table-cell>{{ volume.name }}</sui-table-cell>
                    <sui-table-cell>{{ volume.capacity }}</sui-table-cell>
                    <sui-table-cell>{{ volume.available }}</sui-table-cell>
                    <sui-table-cell>{{ volume.percentFree }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>
          </sui-tab-pane>
          <sui-tab-pane title="Quotas">
            <sui-form>
              <sui-form-field>
                <textarea rows="31" readonly>No users and groups quotas</textarea>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import ServerOverviewMenu from "@/ServerOverview/Components/ServerOverviewMenu";

export default {
  name: "ServerOverviewStart",
  components: {ServerOverviewMenu},
  data() {
    return {
      interfaces: [],
      volumes: []
    }
  }
}
</script>

<style scoped>

</style>
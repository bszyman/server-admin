<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DhcpMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="Subnets">
            <div class="table-container">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Enable</sui-table-header-cell>
                    <sui-table-header-cell>Interface</sui-table-header-cell>
                    <sui-table-header-cell>Starting Address</sui-table-header-cell>
                    <sui-table-header-cell>Ending Address</sui-table-header-cell>
                    <sui-table-header-cell>Name</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="subnet in subnets" :key="subnet.id">
                    <sui-table-cell>{{ subnet.enable }}</sui-table-cell>
                    <sui-table-cell>{{ subnet.interface }}</sui-table-cell>
                    <sui-table-cell>{{ subnet.startingAddress }}</sui-table-cell>
                    <sui-table-cell>{{ subnet.endingAddress }}</sui-table-cell>
                    <sui-table-cell>{{ subnet.name }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <div is="sui-button-group">
              <sui-button icon="plus" compact />
              <sui-button icon="copy" compact />
              <sui-button icon="minus" compact />
              <sui-button icon="pencil alternate" compact />
            </div>
          </sui-tab-pane>
          <sui-tab-pane title="Static Maps">
            <div class="table-container">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Hardware Address</sui-table-header-cell>
                    <sui-table-header-cell>IP Address</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="staticMap in staticMaps" :key="staticMap.id">
                    <sui-table-cell>{{ staticMap.hardwareAddress }}</sui-table-cell>
                    <sui-table-cell>{{ staticMap.ipAddress }}</sui-table-cell>
                    <sui-table-cell>{{ staticMap.description }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <div is="sui-button-group">
              <sui-button icon="plus" compact />
              <sui-button icon="copy" compact />
              <sui-button icon="minus" compact />
              <sui-button icon="pencil alternate" compact />
            </div>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-form-field inline>
                <label>Log Detail Level:</label>
                <sui-dropdown
                    placeholder="Select Level"
                    selection
                    :options="logDetailOptions"
                    v-model="selectedLogDetailLevel"
                />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import DhcpMenu from "@/Modules/DHCP/Components/DhcpMenu";
export default {
  name: "DhcpSettings",
  components: {DhcpMenu},
  data() {
    const logDetailOptions = [
      {
        key: 1,
        text: "Low (errors only)",
        value: 1
      },
      {
        key: 2,
        text: "Medium (errors and warning)",
        value: 2
      },
      {
        key: 3,
        text: "High (all events)",
        value: 3
      }
    ];

    let subnets = [];

    for(let x = 0; x < 30; x += 1) {
      subnets.push({
        id: (x + 1),
        enable: "Yes",
        interface: "en01",
        startingAddress: "192.168.1.100",
        endingAddress: "192.168.1.200",
        name: "Main"
      });
    }

    let staticMaps = [];

    for (let x = 0; x < 30; x += 1) {
      staticMaps.push({
        id: (x + 1),
        hardwareAddress: "00:ff:11:22:ss:dd:55:kd",
        ipAddress: "192.168.1.116",
        description: "Ben's Mac mini",
      });
    }

    return {
      selectedLogDetailLevel: 2,
      logDetailOptions: logDetailOptions,
      subnets: subnets,
      staticMaps: staticMaps
    }
  }

}
</script>

<style scoped>

</style>
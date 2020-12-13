<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DnsMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Allow Zone Transfers" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Allow Recursion" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Zones">
            <div class="table-container">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Name</sui-table-header-cell>
                    <sui-table-header-cell>Primary Name Server</sui-table-header-cell>
                    <sui-table-header-cell>Primary Name Server Address</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="zone in zones" :key="zone.id">
                    <sui-table-cell>
                      <router-link :to="{name: 'dns-zone-editor', params: {zoneID: 1}}">
                        {{ zone.name }}
                      </router-link>
                    </sui-table-cell>
                    <sui-table-cell>{{ zone.primaryNameServer }}</sui-table-cell>
                    <sui-table-cell>{{ zone.primaryNameServerAddress }}</sui-table-cell>
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
          <sui-tab-pane title="Secondary Zones">
            <div class="table-container">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Zone Name</sui-table-header-cell>
                    <sui-table-header-cell>Primaries</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="zone in seconaryZones" :key="zone.id">
                    <sui-table-cell>{{ zone.name }}</sui-table-cell>
                    <sui-table-cell>{{ zone.primaryNameServer }}</sui-table-cell>
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
                <label for="log-path">Log Path:</label>
                <input id="log-path" type="text" />
                <sui-button
                    type="button"
                    icon="ellipsis horizontal"
                    size="small"
                    style="margin-left: 10px;"
                />
              </sui-form-field>
              <sui-form-field inline>
                <label for="log-level">Log Level:</label>
                <sui-dropdown
                    id="log-level"
                    placeholder="Select Level"
                    selection
                    :options="logDetailOptions"
                    v-model="selectedLogDetailLevel"
                />
              </sui-form-field>
              <p>
                Will log most messages. This is the default for the DNS Service.
              </p>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import DnsMenu from "@/Modules/DNS/Components/DnsMenu";
export default {
  name: "DnsSettings",
  components: {DnsMenu},
  data() {
    const logDetailOptions = [
      { key: 1, text: "Critical", value: 1 },
      { key: 2, text: "Error", value: 2 },
      { key: 3, text: "Warning", value: 3 },
      { key: 4, text: "Notice", value: 4 },
      { key: 5, text: "Information", value: 5 },
      { key: 6, text: "Debug", value: 6 }
    ];

    let zones = [];

    for(let x = 0; x < 5; x += 1) {
      zones.push({
        id: (x + 1),
        name: "Primary",
        primaryNameServer: "coocs",
        primaryNameServerAddress: "192.168.1.160"
      })
    }

    let seconaryZones = [
      { id: 1, name: "Subnet x2", primaryNameServer: "Main"}
    ];

    return {
      selectedLogDetailLevel: 5,
      logDetailOptions: logDetailOptions,
      zones: zones,
      seconaryZones: seconaryZones
    }
  }
}
</script>

<style scoped>

</style>
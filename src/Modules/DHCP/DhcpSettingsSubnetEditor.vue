<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DhcpMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <router-link :to="{name: 'dhcp-settings'}">&larr; Back</router-link>
        <sui-tab :menu="{ secondary: true }" style="margin-top: 10px;">
          <sui-tab-pane title="General" :attached="false">
            <sui-form>
              <sui-form-field>
                <label>Subnet Name:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>Starting IP Address:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>Ending IP Address:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>Subnet Mask:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>Network Interface:</label>
                <sui-dropdown
                    placeholder="IP Address"
                    selection
                    :options="networkInterfaces"
                    v-model="selectedNetworkInterface"
                />
              </sui-form-field>
              <sui-form-field>
                <label>Router:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field inline>
                <label>Lease Time:</label>
                <input type="number" />
                <sui-dropdown
                    placeholder="Time Unit"
                    selection
                    :options="timeUnits"
                    v-model="selectedTimeUnit"
                    style="margin-left: 10px;"
                />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="DNS" :attached="false">
            <sui-form>
              <sui-form-field>
                <label>Default Domain:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>Name Servers:</label>
                <textarea></textarea>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="LDAP" :attached="false">
            <sui-form>
              <sui-form-field>
                <label>Server Name</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>Search Base</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field inline>
                <label>Port</label>
                <input type="number" />
                <p style="margin-left: 10px;">Leave blank to use the default port.</p>
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="LDAP over SSL" />
                </sui-form-field>
              </div>

              <div style="margin-top: 30px;">
                <p>URL: ldap://Hi.local:543/dc=employees</p>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="WINS" :attached="false">
            <sui-form>
              <sui-form-field>
                <label>WINS/NBNS Primary Server:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>WINS/NBNS Secondary Server:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>NBDD Server:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>NBT Node Type:</label>
                <sui-dropdown
                    placeholder="NBT Node Types"
                    selection
                    :options="nbtNodeTypes"
                    v-model="selectedNbtNodeType"
                />
              </sui-form-field>
              <sui-form-field>
                <label>NetBIOS Scope ID:</label>
                <input type="text" />
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
  name: "DhcpSettingsSubnetEditor.vue",
  components: {DhcpMenu},
  data() {
    const networkInterfaces = [
      {key: 1, text: "en01", value: 1},
    ];

    const timeUnits = [
      {key: 1, text: "hours", value: 1},
      {key: 2, text: "days", value: 2},
      {key: 3, text: "weeks", value: 3},
      {key: 4, text: "months", value: 4},
    ];

    const nbtNodeTypes = [
      {key: 1, text: "Not Set", value: 1},
      {key: 2, text: "Broadcast (b-node)", value: 2},
      {key: 3, text: "Peer (p-node)", value: 3},
      {key: 4, text: "Mixed (m-mode)", value: 4},
      {key: 5, text: "Hybrid (h-mode)", value: 5},
    ];

    return {
      networkInterfaces: networkInterfaces,
      selectedNetworkInterface: 1,
      timeUnits: timeUnits,
      selectedTimeUnit: 1,
      nbtNodeTypes: nbtNodeTypes,
      selectedNbtNodeType: 1
    }
  }
}
</script>

<style scoped>

</style>
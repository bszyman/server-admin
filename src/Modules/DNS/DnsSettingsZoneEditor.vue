<template>
  <div>
    <DNSMachineEditorPop :open="machineEditorOpen" />

    <sui-grid>
      <sui-grid-row>
        <sui-grid-column :width="16">
          <DnsMenu selected-section="Settings" />
        </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column :width="16">
          <router-link :to="{name: 'dns-settings'}">&larr; Back</router-link>
          <sui-tab :menu="{ secondary: true }" style="margin-top: 10px;">
            <sui-tab-pane title="General" :attached="false">
              <sui-form>
                <sui-form-field>
                  <label>Zone Name:</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field>
                  <label>Server Name:</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field>
                  <label>Fully Qualified Server Name:</label>
                  <input type="text" value="nameserver." readonly />
                </sui-form-field>
                <sui-form-fields fields="two">
                  <sui-form-field>
                    <label>Server IP Address:</label>
                    <sui-dropdown
                        placeholder="IP Address"
                        selection
                        :options="ipAddresses"
                        v-model="selectedIPAddress"
                    />
                  </sui-form-field>
                  <sui-form-field>
                    <label>Other Server IP Address:</label>
                    <input type="text" />
                  </sui-form-field>
                </sui-form-fields>

                <h4>Name Servers</h4>

                <div class="table-container" style="height: 225px;">
                  <sui-table compact selectable padded basic="very">
                    <sui-table-body>
                      <sui-table-row v-for="ns in nameServers" :key="ns">
                        <sui-table-cell>{{ ns }}</sui-table-cell>
                      </sui-table-row>
                    </sui-table-body>
                  </sui-table>
                </div>

                <div is="sui-button-group" style="margin-bottom: 15px;">
                  <sui-button icon="plus" compact />
                  <sui-button icon="minus" compact />
                </div>

                <sui-form-field>
                  <label>Administrator Email:</label>
                  <input type="email" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Zone is valid for:</label>
                  <input type="number" />
                  <p style="margin-left: 10px;">hours</p>
                </sui-form-field>
              </sui-form>
            </sui-tab-pane>
            <sui-tab-pane title="Machines" :attached="false">
              <div class="table-container" style="height: 550px; margin-top: 20px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-header>
                    <sui-table-row>
                      <sui-table-header-cell>Name</sui-table-header-cell>
                      <sui-table-header-cell>Primary Address</sui-table-header-cell>
                      <sui-table-header-cell>Comment</sui-table-header-cell>
                    </sui-table-row>
                  </sui-table-header>
                  <sui-table-body>
                    <sui-table-row v-for="m in machines" :key="m.id">
                      <sui-table-cell>{{ m.name }}</sui-table-cell>
                      <sui-table-cell>{{ m.primaryAddress }}</sui-table-cell>
                      <sui-table-cell>{{ m.comment }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact @click="editMachine" />
                <sui-button icon="copy" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact @click="editMachine" />
              </div>
            </sui-tab-pane>
          </sui-tab>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
import DnsMenu from "@/Modules/DNS/Components/DnsMenu";
import DNSMachineEditorPop from "@/Modules/DNS/Components/DNSMachineEditorPop";
export default {
  name: "DnsSettingsSubnetEditor",
  components: {DNSMachineEditorPop, DnsMenu},
  data() {
    const ipAddresses = [
      {key: 1, text: "10.0.2.15", value: "10.0.2.15"},
    ];

    return {
      nameServers: ["nameserver", "ns.example.com"],
      machines: [],
      machineEditorOpen: false,
      ipAddresses: ipAddresses,
      selectedIPAddress: "10.0.2.15"
    }
  },
  methods: {
    editMachine: function() {
      this.machineEditorOpen = true;
    }
  }
}
</script>

<style scoped>

</style>
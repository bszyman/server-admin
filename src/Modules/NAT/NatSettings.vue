<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NatMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-fields grouped>
                <sui-form-field>
                  <sui-checkbox radio name="ip_forwarding" label="IP Forwarding only" value="1" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox radio name="ip_forwarding" label="IP Forwarding and Network Address Translation (NAT)" value="2" />
                </sui-form-field>
              </sui-form-fields>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label for="encoding-option">External network interface:</label>
                  <sui-dropdown
                      id="encoding-option"
                      placeholder="Network Interface"
                      selection
                      :options="networkInterfaces"
                      v-model="selectedNetworkInterface"
                  />
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import NatMenu from "@/Modules/NAT/Components/NatMenu";
export default {
  name: "NatSettings",
  components: {NatMenu},
  data() {
    let networkInterfaces = [
      { text: "Built-in Ethernet", value: 1 }
    ];

    return {
      networkInterfaces: networkInterfaces,
      selectedNetworkInterface: 1
    }
  }
}
</script>

<style scoped>

</style>
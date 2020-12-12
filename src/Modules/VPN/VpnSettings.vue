<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <VpnMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="L2TP">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable L2TP over IPSec" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label>Starting IP address:</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Ending IP address:</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>PPP Authentication:</label>
                  <sui-dropdown
                      placeholder="PPP Authentication"
                      selection
                      :options="pppAuthenticationOptions"
                      v-model="selectedPPPAuthenticationOption"
                  />
                </sui-form-field>

                <h4>IPSec Authentication</h4>
                <div style="margin-left: 25px;">
                  <sui-form-field inline>
                    <sui-checkbox radio label="Shared Secret:" />
                    <input type="text" />
                  </sui-form-field>
                  <sui-form-field inline>
                    <sui-checkbox radio label="Certificate:" />
                    <sui-dropdown
                        placeholder="Certificate"
                        selection
                        :options="certificateOptions"
                        v-model="selectedCertificateOption"
                    />
                  </sui-form-field>
                </div>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="PPTP">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable PPTP" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Allow 40-bit encryption keys in addition to 128-bit" />
                </sui-form-field>
                <div style="margin-left: 25px;">
                  <sui-form-field inline>
                    <label>Starting IP address:</label>
                    <input type="text" />
                  </sui-form-field>
                  <sui-form-field inline>
                    <label>Ending IP address:</label>
                    <input type="text" />
                  </sui-form-field>
                </div>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Verbose logging" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Client Information">
            <sui-form>
              <sui-form-field>
                <label>DNS Servers:</label>
                <textarea rows="3"></textarea>
              </sui-form-field>
              <sui-form-field>
                <label>Search Domains:</label>
                <textarea rows="3"></textarea>
              </sui-form-field>

              <h4>Network Routing Definition:</h4>
              <div class="table-container" style="height: 225px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-header>
                    <sui-table-row>
                      <sui-table-header-cell>Network Address</sui-table-header-cell>
                      <sui-table-header-cell>Network Mask</sui-table-header-cell>
                      <sui-table-header-cell>Network Type</sui-table-header-cell>
                    </sui-table-row>
                  </sui-table-header>
                  <sui-table-body>
                    <sui-table-row v-for="n in nrd" :key="n.id">
                      <sui-table-cell>{{ n.networkAddress }}</sui-table-cell>
                      <sui-table-cell>{{ n.networkMask }}</sui-table-cell>
                      <sui-table-cell>{{ n.networkType }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import VpnMenu from "@/Modules/VPN/Components/VpnMenu";
export default {
  name: "VpnSettings",
  components: {VpnMenu},
  data() {
    const pppAuthenticationOptions = [
      {key: 1, text: "MS-CHAPv2", value: 1},
    ];

    const certificateOptions = [
      {key: 1, text: "No Certificate", value: 1},
    ];

    return {
      pppAuthenticationOptions: pppAuthenticationOptions,
      selectedPPPAuthenticationOption: 1,
      certificateOptions: certificateOptions,
      selectedCertificateOption: 1,
      nrd: []
    }
  }
}
</script>

<style scoped>

</style>
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
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable L2TP over IPSec" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <sui-checkbox label="Restrict access to group:" />
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>IPSec shared secret</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Starting IP address:</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Ending IP address:</label>
                  <input type="text" />
                </sui-form-field>
              </div>

              <sui-form-field>
                <sui-checkbox label="Enable PPTP" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Allow 40-bit encryption keys in addition to 128-bit" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="Restrict access to group:" />
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Starting IP address:</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Ending IP address:</label>
                  <input type="text" />
                </sui-form-field>
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
                <label>IPSec shared Secret:</label>
                <textarea rows="3"></textarea>
              </sui-form-field>
              <sui-form-field>
                <label>Search Domains:</label>
                <textarea rows="3"></textarea>
              </sui-form-field>

              <h4>Network Routing Definition:</h4>
              <sui-segment></sui-segment>
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
  components: {VpnMenu}
}
</script>

<style scoped>

</style>
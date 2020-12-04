<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FirewallMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <h3>General</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Logging" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Log all allowed packets" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Log all denied packets" />
                </sui-form-field>
                <sui-form-field inline>
                  <label for="log-only">Log Only</label>
                  <input id="log-only" type="number" value="1000" />
                  <span style="margin-left: 10px;">packets</span>
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Advanced">
            <sui-segment></sui-segment>
            <div is="sui-button-group">
              <sui-button icon="plus" />
              <sui-button icon="minus" />
              <sui-button icon="pencil alternate" />
            </div>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FirewallMenu from "@/Modules/Firewall/Components/FirewallMenu";
export default {
  name: "FirewallSettings",
  components: {FirewallMenu}
}
</script>

<style scoped>

</style>
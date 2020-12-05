<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NetbootMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <h4>Enable Netboot on at least one port.</h4>
            <sui-segment></sui-segment>

            <h4>Select where to put images and client data.</h4>
            <sui-segment></sui-segment>
          </sui-tab-pane>
          <sui-tab-pane title="Images">
            <h4>Enable images and select a default image.</h4>
            <sui-segment></sui-segment>

            <h4>Image Info</h4>
            <sui-segment></sui-segment>
          </sui-tab-pane>
          <sui-tab-pane title="Filters">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable NetBoot filtering" />
              </sui-form-field>

              <div style="margin-left: 50px;">
                <sui-form-fields grouped>
                  <sui-form-field>
                    <sui-checkbox radio label="Allow only clients listed below (deny others)" value="1" />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox radio label="Deny only clients listed below (allow others)" value="1" />
                  </sui-form-field>
                </sui-form-fields>

                <sui-segment></sui-segment>
                <div is="sui-button-group" style="margin-bottom: 15px;">
                  <sui-button icon="plus" compact />
                  <sui-button icon="minus" compact />
                </div>
              </div>

              <sui-form-field inline>
                <label for="host-name">Host Name</label>
                <input id="host-name" type="text" />
                <sui-button icon="search" style="margin-left: 10px;" compact />
              </sui-form-field>

              <sui-form-field inline>
                <label for="ethernet-address">Ethernet Address</label>
                <input id="ethernet-address" type="text" value="" />
                <sui-button icon="plus" style="margin-left: 10px;" compact />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import NetbootMenu from "@/Modules/NetBoot/Components/NetbootMenu";
export default {
  name: "NetbootSettings",
  components: {NetbootMenu}
}
</script>

<style scoped>

</style>
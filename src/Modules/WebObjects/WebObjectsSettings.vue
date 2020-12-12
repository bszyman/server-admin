<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebObjectsMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field inline>
                <label>Run wotaskd on port:</label>
                <input type="number" />
              </sui-form-field>
              <sui-form-field inline>
                <label>Run Monitor on port:</label>
                <input type="number" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Turn Monitor On" />
                  <p style="margin-top: 10px;">
                    To avoid problems, only one server per ethernet subnet should
                    be running monitor at any time.
                  </p>
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
import WebObjectsMenu from "@/Modules/WebObjects/Components/WebObjectsMenu";
export default {
  name: "WebObjectsSettings",
  components: {WebObjectsMenu},
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
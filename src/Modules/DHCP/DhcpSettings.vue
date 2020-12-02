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
            <sui-segment></sui-segment>
            <div is="sui-button-group">
              <sui-button icon="plus" />
              <sui-button icon="minus" />
              <sui-button icon="pencil alternate" />
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

    return {
      selectedLogDetailLevel: 2,
      logDetailOptions: logDetailOptions
    }
  }

}
</script>

<style scoped>

</style>
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
            <h3>Zones</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
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
      {
        key: 1,
        text: "Critical",
        value: 1
      },
      {
        key: 2,
        text: "Error",
        value: 2
      },
      {
        key: 3,
        text: "Warning",
        value: 3
      },
      {
        key: 4,
        text: "Notice",
        value: 4
      },
      {
        key: 5,
        text: "Information",
        value: 5
      },
      {
        key: 6,
        text: "Debug",
        value: 6
      }
    ];

    return {
      selectedLogDetailLevel: 5,
      logDetailOptions: logDetailOptions
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <SoftwareUpdateMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Automatically mirror updates from Apple" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Automatically enable mirrored updates" />
              </sui-form-field>
              <sui-form-field inline>
                <sui-checkbox label="Limit user bandwidth for updates to:" />
                <input type="text" />
                <sui-dropdown
                    placeholder="Bandwidth Options"
                    selection
                    :options="bandwidthOptions"
                    v-model="selectedBandwidthOption"
                    style="margin-left: 10px;"
                />
              </sui-form-field>
              <sui-form-field inline>
                <label>Provide updates using port:</label>
                <input type="number" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Controller">
            <sui-form>
              <div style="text-align: right;">
                <sui-form-field inline>
                  <input type="text" placeholder="Search..." />
                </sui-form-field>
              </div>
            </sui-form>

            <div class="table-container" style="height: 300px; margin-top: 20px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell :width="1"></sui-table-header-cell>
                    <sui-table-header-cell :width="2" text-align="center">Mirror</sui-table-header-cell>
                    <sui-table-header-cell :width="2" text-align="center">Enable</sui-table-header-cell>
                    <sui-table-header-cell :width="6">Name</sui-table-header-cell>
                    <sui-table-header-cell :width="2">Version</sui-table-header-cell>
                    <sui-table-header-cell :width="3">Size</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="u in updates" :key="u.id">
                    <sui-table-cell :width="1"></sui-table-cell>
                    <sui-table-cell :width="2" text-align="center">
                      <sui-checkbox label="" v-model="u.mirror" />
                    </sui-table-cell>
                    <sui-table-cell :width="2" text-align="center">
                      <sui-checkbox label="" v-model="u.enable" />
                    </sui-table-cell>
                    <sui-table-cell :width="6">{{ u.title }}</sui-table-cell>
                    <sui-table-cell :width="2">{{ u.version }}</sui-table-cell>
                    <sui-table-cell :width="3">{{ u.size }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <sui-segment style="min-height: 200px;"></sui-segment>

            <sui-table basic="very">
              <sui-table-body>
                <sui-table-row>
                  <sui-table-cell text-align="left">
                    <p>Total: 0</p>
                  </sui-table-cell>
                  <sui-table-cell text-align="center">
                    <p>Mirrored: 0</p>
                  </sui-table-cell>
                  <sui-table-cell text-align="right">
                    <p>Enabled: 0</p>
                  </sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>

            <div class="controlBar">
              <div>
                Last Check: Not available
              </div>
              <div>
                <sui-button>Check Now</sui-button>
              </div>
            </div>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import SoftwareUpdateMenu from "@/Modules/SoftwareUpdate/Components/SoftwareUpdateMenu";
export default {
  name: "SoftwareUpdateSettings",
  components: {SoftwareUpdateMenu},
  data() {
    const bandwidthOptions = [
      { text: "KB/second", value: 1 },
      { text: "MB/second", value: 2 },
    ];

    return {
      bandwidthOptions: bandwidthOptions,
      selectedBandwidthOption: 1,
      updates: []
    }
  }
}
</script>

<style scoped>

</style>
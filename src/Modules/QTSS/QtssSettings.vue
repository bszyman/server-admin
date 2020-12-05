<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <QtssMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field inline>
                <label>Media Directory:</label>
                <input type="text" />
                <sui-button compact icon="ellipsis horizontal" style="margin-left: 10px;" />
              </sui-form-field>
              <sui-form-field inline>
                <label>Maximum connections:</label>
                <input type="number" />
              </sui-form-field>
              <sui-form-field inline>
                <label>Maximum throughput:</label>
                <input type="number" />
                <sui-dropdown
                    placeholder="Throughput"
                    selection
                    :options="throughputTypes"
                    v-model="selectedThroughputType"
                    style="margin-left: 10px;"
                />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Access">
            <sui-form>
              <sui-form-field inline>
                <label>MP3 Broadcast Password:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field inline>
                <sui-checkbox label="Accept incoming broadcasts" />
                <sui-button>Set Password...</sui-button>
              </sui-form-field>
              <sui-form-field inline>
                <sui-checkbox label="Enable home directory streaming" />
              </sui-form-field>
              <sui-form-field inline>
                <sui-checkbox label="Enable web-based administration" />
                <sui-button>Set Password...</sui-button>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="IP Bidings">
            <sui-form>
              <sui-form-fields grouped>
                <label for="streaming_opt">Enable streaming on:</label>
                <sui-form-field>
                  <sui-checkbox radio name="streaming_opt" label="All IP Addresses" value="1" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox radio name="streaming_opt" label="Selected addresses only" value="2" />
                </sui-form-field>
              </sui-form-fields>
              <sui-segment></sui-segment>
              <sui-form-field>
                <sui-checkbox label="Enable streaming on port 80" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Relays">
            <sui-form>
              <sui-grid :columns="2">
                <sui-grid-row>
                  <sui-grid-column>
                    <sui-segment></sui-segment>
                    <div is="sui-button-group" style="margin-bottom: 15px;">
                      <sui-button icon="plus" compact />
                      <sui-button icon="minus" compact />
                      <sui-button icon="pencil alternate" compact />
                    </div>
                  </sui-grid-column>
                  <sui-grid-column>
                    <sui-segment></sui-segment>
                    <div is="sui-button-group" style="margin-bottom: 15px;">
                      <sui-button icon="plus" compact />
                      <sui-button icon="minus" compact />
                    </div>
                  </sui-grid-column>
                </sui-grid-row>
              </sui-grid>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Error log" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label>Archive every</label>
                  <input type="text">
                  <span style="margin-left: 10px;">days</span>
                </sui-form-field>
              </div>

              <sui-form-field>
                <sui-checkbox label="Enable Access log" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label>Archive every</label>
                  <input type="text">
                  <span style="margin-left: 10px;">days</span>
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
import QtssMenu from "@/Modules/QTSS/Components/QtssMenu";
export default {
  name: "QtssSettings",
  components: {QtssMenu},
  data() {
    const throughputTypes = [
      { text: "Mbps", value: 1 },
      { text: "Gbps", value: 2}
    ];

    return {
      throughputTypes: throughputTypes,
      selectedThroughputType: 1
    }
  }
}
</script>

<style scoped>

</style>
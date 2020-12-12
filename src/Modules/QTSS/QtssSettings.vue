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
                <sui-button compact>Set Password...</sui-button>
              </sui-form-field>
              <sui-form-field inline>
                <sui-checkbox label="Enable home directory streaming" />
              </sui-form-field>
              <sui-form-field inline>
                <sui-checkbox label="Enable web-based administration" />
                <sui-button compact>Set Password...</sui-button>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="IP Bindings">
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
              <div class="table-container" style="margin-top: 20px; height: 375px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-header>
                    <sui-table-row>
                      <sui-table-header-cell>Bind</sui-table-header-cell>
                      <sui-table-header-cell>IP Address</sui-table-header-cell>
                      <sui-table-header-cell>DNS Name</sui-table-header-cell>
                    </sui-table-row>
                  </sui-table-header>
                  <sui-table-body>
                    <sui-table-row v-for="a in addresses" :key="a.id">
                      <sui-table-cell>{{ a.bind }}</sui-table-cell>
                      <sui-table-cell>{{ a.ipAddress }}</sui-table-cell>
                      <sui-table-cell>{{ a.dnsName }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>
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
                    <div class="table-container">
                      <sui-table compact selectable padded basic="very">
                        <sui-table-header>
                          <sui-table-row>
                            <sui-table-header-cell>Enabled</sui-table-header-cell>
                            <sui-table-header-cell>Relay Name</sui-table-header-cell>
                          </sui-table-row>
                        </sui-table-header>
                        <sui-table-body>
                          <sui-table-row v-for="r in relays" :key="r.id">
                            <sui-table-cell>
                              <sui-checkbox label="" v-model="r.enabled" />
                            </sui-table-cell>
                            <sui-table-cell>{{ r.relayName }}</sui-table-cell>
                          </sui-table-row>
                        </sui-table-body>
                      </sui-table>
                    </div>
                    <div is="sui-button-group" style="margin-bottom: 15px;">
                      <sui-button icon="plus" compact />
                      <sui-button icon="minus" compact />
                      <sui-button icon="pencil alternate" compact />
                    </div>
                  </sui-grid-column>
                  <sui-grid-column>
                    <div class="table-container">
                      <sui-table compact selectable padded basic="very">
                        <sui-table-header>
                          <sui-table-row>
                            <sui-table-header-cell>Destination Address</sui-table-header-cell>
                            <sui-table-header-cell>Destination Type</sui-table-header-cell>
                          </sui-table-row>
                        </sui-table-header>
                        <sui-table-body>
                          <sui-table-row v-for="d in destinations" :key="d.id">
                            <sui-table-cell>{{ d.destinationAddress }}</sui-table-cell>
                            <sui-table-cell>{{ d.destinationType }}</sui-table-cell>
                          </sui-table-row>
                        </sui-table-body>
                      </sui-table>
                    </div>
                    <div is="sui-button-group" style="margin-bottom: 15px;">
                      <sui-button icon="plus" compact />
                      <sui-button icon="minus" compact />
                      <sui-button icon="pencil alternate" compact />
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
      selectedThroughputType: 1,
      relays: [],
      destinations: [],
      addresses: [],
    }
  }
}
</script>

<style scoped>

</style>
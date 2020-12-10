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
            <div class="table-container" style="height: 225px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell text-align="center" :width="2">Enable</sui-table-header-cell>
                    <sui-table-header-cell>Port</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="port in ports" :key="port.id">
                    <sui-table-cell text-align="center" :width="2">
                      <sui-checkbox label="" v-model="port.enable" />
                    </sui-table-cell>
                    <sui-table-cell>{{ port.name }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <h4>Select where to put images and client data.</h4>
            <div class="table-container" style="height: 255px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Volume</sui-table-header-cell>
                    <sui-table-header-cell text-align="center" :width="2">Images</sui-table-header-cell>
                    <sui-table-header-cell text-align="center" :width="2">Client Data</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="volume in volumes" :key="volume.id">
                    <sui-table-cell>{{ volume.name }}</sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">
                      <sui-checkbox label="" v-model="volume.imagesEnable" />
                    </sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">
                      <sui-checkbox label="" v-model="volume.clientDataEnable" />
                    </sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <sui-form>
              <sui-form-field inline>
                <label>Number of AFP connections for Mac OS 9 or diskless Mac OS X boot:</label>
                <input type="number" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Images">
            <h4>Enable images and select a default image.</h4>
            <div class="table-container" style="height: 375px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell :width="4">Image Name</sui-table-header-cell>
                    <sui-table-header-cell text-align="center" :width="2">Default</sui-table-header-cell>
                    <sui-table-header-cell text-align="center" :width="2">Enable</sui-table-header-cell>
                    <sui-table-header-cell text-align="center" :width="2">Diskless</sui-table-header-cell>
                    <sui-table-header-cell text-align="center" :width="2">Index</sui-table-header-cell>
                    <sui-table-header-cell text-align="center" :width="2">Architecture</sui-table-header-cell>
                    <sui-table-header-cell text-align="center" :width="2">Protocol</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="image in images" :key="image.id">
                    <sui-table-cell :width="4">{{ image.name }}</sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">
                      <sui-checkbox label="" v-model="image.default" />
                    </sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">
                      <sui-checkbox label="" v-model="image.enable" />
                    </sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">
                      <sui-checkbox label="" v-model="image.diskless" />
                    </sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">
                      <sui-checkbox label="" v-model="image.index" />
                    </sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">
                      {{ image.architecture }}
                    </sui-table-cell>
                    <sui-table-cell text-align="center" :width="2">
                      {{ image.protocol }}
                    </sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <sui-segment>
              <h4>Image Info</h4>
            </sui-segment>
          </sui-tab-pane>
          <sui-tab-pane title="Filters">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable NetBoot/DHCP filtering" />
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

                <div class="table-container" style="height: 225px;">
                  <sui-table compact selectable padded basic="very">
                    <sui-table-header>
                      <sui-table-row>
                        <sui-table-header-cell>Hardware Address</sui-table-header-cell>
                      </sui-table-row>
                    </sui-table-header>
                    <sui-table-body>
                      <sui-table-row v-for="hardwareAddress in hardwareAddresses" :key="hardwareAddress.id">
                        <sui-table-cell>{{ hardwareAddress.address }}</sui-table-cell>
                      </sui-table-row>
                    </sui-table-body>
                  </sui-table>
                </div>
                <div is="sui-button-group" style="margin-bottom: 15px;">
                  <sui-button icon="plus" compact />
                  <sui-button icon="minus" compact />
                </div>
              </div>

              <sui-segment>
                <h4>Find Hardware Address</h4>

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

                <sui-form-field inline>
                  <label for="file-path">File Path</label>
                  <input id="file-path" type="text" />
                  <sui-button icon="search" style="margin-left: 10px;" compact />
                  <sui-button icon="ellipsis horizontal" style="margin-left: 10px;" compact />
                </sui-form-field>
              </sui-segment>




            </sui-form>
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
import NetbootMenu from "@/Modules/NetBoot/Components/NetbootMenu";
export default {
  name: "NetbootSettings",
  components: {NetbootMenu},
  data() {
    const ports = [
      {id: 1, enable: true, name: "Built-in Ethernet"}
    ];

    const volumes = [
      {id: 1, name: "Macintosh HD", imagesEnable: true, clientDataEnable: true}
    ];

    const images = [];
    const hardwareAddresses = [];
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
      ports: ports,
      volumes: volumes,
      images: images,
      hardwareAddresses: hardwareAddresses,
      selectedLogDetailLevel: 2,
      logDetailOptions: logDetailOptions,
    }
  }
}
</script>

<style scoped>

</style>
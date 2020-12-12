<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <router-link :to="{name: 'web-settings'}">&larr; Back</router-link>
        <sui-tab :menu="{ secondary: true }" style="margin-top: 10px;">
          <sui-tab-pane title="General" :attached="false">
            <sui-form>
              <sui-form-field>
                <label>Domain Name:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-fields fields="two">
                <sui-form-field>
                  <label>IP Address:</label>
                  <sui-dropdown
                      placeholder="IP Address"
                      selection
                      :options="ipAddressOptions"
                      v-model="selectedIPAddressOption"
                  />
                </sui-form-field>
                <sui-form-field>
                  <label>Other IP Address:</label>
                  <input type="text" />
                </sui-form-field>
              </sui-form-fields>
              <sui-form-field>
                <label>Port:</label>
                <input type="number" />
              </sui-form-field>
              <sui-form-field>
                <label>Web folder:</label>
                <div style="display: flex;">
                  <div style="flex: 9;">
                    <input type="text" style="right: 30px;" />
                  </div>
                  <div style="flex: 1; text-align: center;">
                    <sui-button icon="ellipsis horizontal" compact style="margin-left: 10px;" />
                  </div>
                </div>
              </sui-form-field>

              <div class="table-container" style="height: 225px; margin-top: 20px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-body>
                    <sui-table-row v-for="file in indexFiles" :key="file.id">
                      <sui-table-cell text-align="center" :width="2">
                        <sui-checkbox radio name="index_file" label="" v-model="file.enabled" />
                      </sui-table-cell>
                      <sui-table-cell :width="14">{{ file.fileName }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
              </div>

              <sui-form-field>
                <label>Error file:</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>Administrator email:</label>
                <input type="email" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Options" :attached="false">
            <h4>Enable These Options</h4>
            <div style="margin-left: 50px;">
              <sui-form>
                <sui-form-field>
                  <sui-checkbox label="Folder Listing" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="WebDAV" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="CGI Execution" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="WebMail" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Server Side Includes (SSI)" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Performance Cache" />
                </sui-form-field>
              </sui-form>
            </div>
          </sui-tab-pane>
          <sui-tab-pane title="Realms" :attached="false">
            <sui-grid>
              <sui-grid-row>
                <sui-grid-column :width="5">
                  <div class="table-container" style="height: 526px; margin-top: 20px;">
                    <sui-table compact selectable padded basic="very">
                      <sui-table-header>
                        <sui-table-row>
                          <sui-table-header-cell></sui-table-header-cell>
                          <sui-table-header-cell>Realms</sui-table-header-cell>
                        </sui-table-row>
                      </sui-table-header>
                      <sui-table-body>
                        <sui-table-row v-for="realm in realms" :key="realm.id">
                          <sui-table-cell :width="3" text-align="center">
                            <sui-checkbox radio label="" name="realm_selection" />
                          </sui-table-cell>
                          <sui-table-cell :width="13">{{ realm.realmName }}</sui-table-cell>
                        </sui-table-row>
                      </sui-table-body>
                    </sui-table>
                  </div>
                  <div is="sui-button-group" style="margin-bottom: 15px;">
                    <sui-button icon="plus" compact />
                    <sui-button icon="copy" compact />
                    <sui-button icon="minus" compact />
                    <sui-button icon="pencil alternate" compact />
                  </div>
                </sui-grid-column>
                <sui-grid-column :width="11">
                  <div class="table-container" style="height: 225px; margin-top: 20px;">
                    <sui-table compact selectable padded basic="very">
                      <sui-table-header>
                        <sui-table-row>
                          <sui-table-header-cell :width="10">Users</sui-table-header-cell>
                          <sui-table-header-cell :width="3" text-align="center">Can Browse</sui-table-header-cell>
                          <sui-table-header-cell :width="3" text-align="center">Can Author</sui-table-header-cell>
                        </sui-table-row>
                      </sui-table-header>
                      <sui-table-body>
                        <sui-table-row v-for="user in users" :key="user.id">
                          <sui-table-cell :width="10">
                            {{ user.name }}
                          </sui-table-cell>
                          <sui-table-cell :width="3" text-align="center">
                            <sui-checkbox label="" v-model="user.canBrowse" />
                          </sui-table-cell>
                          <sui-table-cell :width="3" text-align="center">
                            <sui-checkbox label="" v-model="user.canAuthor" />
                          </sui-table-cell>
                        </sui-table-row>
                      </sui-table-body>
                    </sui-table>
                  </div>
                  <div is="sui-button-group" style="margin-bottom: 15px;">
                    <sui-button icon="plus" compact />
                    <sui-button icon="minus" compact />
                    <sui-button icon="pencil alternate" compact />
                  </div>

                  <div class="table-container" style="height: 225px; margin-top: 20px;">
                    <sui-table compact selectable padded basic="very">
                      <sui-table-header>
                        <sui-table-row>
                          <sui-table-header-cell :width="10">Groups</sui-table-header-cell>
                          <sui-table-header-cell :width="3" text-align="center">Can Browse</sui-table-header-cell>
                          <sui-table-header-cell :width="3" text-align="center">Can Author</sui-table-header-cell>
                        </sui-table-row>
                      </sui-table-header>
                      <sui-table-body>
                        <sui-table-row v-for="group in groups" :key="group.id">
                          <sui-table-cell :width="10">
                            {{ group.name }}
                          </sui-table-cell>
                          <sui-table-cell :width="3" text-align="center">
                            <sui-checkbox label="" v-model="group.canBrowse" />
                          </sui-table-cell>
                          <sui-table-cell :width="3" text-align="center">
                            <sui-checkbox label="" v-model="group.canAuthor" />
                          </sui-table-cell>
                        </sui-table-row>
                      </sui-table-body>
                    </sui-table>
                  </div>
                  <div class="controlBar">
                    <div>
                      <div is="sui-button-group" style="margin-bottom: 15px;">
                        <sui-button icon="plus" compact />
                        <sui-button icon="minus" compact />
                        <sui-button icon="pencil alternate" compact />
                      </div>
                    </div>
                    <div>
                      <sui-button compact>Users and Groups...</sui-button>
                    </div>
                  </div>

                </sui-grid-column>
              </sui-grid-row>
            </sui-grid>
          </sui-tab-pane>
          <sui-tab-pane title="Logging" :attached="false">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Access Log" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <sui-checkbox label="Archive every" />
                  <input type="number" />
                  <span style="margin-left: 10px;">days</span>
                </sui-form-field>

                <div style="margin-left: 25px;">
                  <sui-form-field>
                    <label>Location</label>
                    <div style="display: flex;">
                      <div style="flex: 9;">
                        <input type="text" />
                      </div>
                      <div style="flex: 1; text-align: center;">
                        <sui-button icon="ellipsis horizontal" compact style="margin-left: 10px;" />
                      </div>
                    </div>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Format:</label>
                    <sui-dropdown
                        placeholder="Format"
                        selection
                        :options="logFormatOptions"
                        v-model="selectedLogFormatOption"
                    />
                  </sui-form-field>
                  <sui-form-field>
                    <label>Format String</label>
                    <input type="text" />
                  </sui-form-field>
                </div>
              </div>

              <h4>Error Log</h4>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <sui-checkbox label="Archive every" />
                  <input type="number" />
                  <span style="margin-left: 10px;">days</span>
                </sui-form-field>

                <div style="margin-left: 25px;">
                  <sui-form-field>
                    <label>Location</label>
                    <div style="display: flex;">
                      <div style="flex: 9;">
                        <input type="text" />
                      </div>
                      <div style="flex: 1; text-align: center;">
                        <sui-button icon="ellipsis horizontal" compact style="margin-left: 10px;" />
                      </div>
                    </div>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Level:</label>
                    <sui-dropdown
                        placeholder="Format"
                        selection
                        :options="logLevelOptions"
                        v-model="selectedLogLevelOption"
                    />
                  </sui-form-field>
                </div>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Security" :attached="false">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Secure Sockets Layer (SSL)" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <label>SSL Log File:</label>
                  <div style="display: flex;">
                    <div style="flex: 9;">
                      <input type="text" />
                    </div>
                    <div style="flex: 1; text-align: center;">
                      <sui-button icon="ellipsis horizontal" compact style="margin-left: 10px;" />
                    </div>
                  </div>
                </sui-form-field>
                <sui-form-field inline>
                  <label>Certificate:</label>
                  <sui-dropdown
                      placeholder="Certificates"
                      selection
                      :options="certificateOptions"
                      v-model="selectedCertificateOption"
                  />
                  <sui-button icon="pencil" compact style="margin-left: 10px;" />
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Aliases" :attached="false">
            <div class="table-container" style="height: 225px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-body>
                  <sui-table-row v-for="a in aliases" :key="a.id">
                    <sui-table-cell :width="1" text-align="center">
                      <sui-checkbox radio label="" name="alias_selection" />
                    </sui-table-cell>
                    <sui-table-cell :width="15">{{ a.domainName }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>
            <div is="sui-button-group" style="margin-bottom: 15px;">
              <sui-button icon="plus" compact />
              <sui-button icon="copy" compact />
              <sui-button icon="minus" compact />
              <sui-button icon="pencil alternate" compact />
            </div>

            <div class="table-container" style="height: 225px; margin-top: 20px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell></sui-table-header-cell>
                    <sui-table-header-cell>Style</sui-table-header-cell>
                    <sui-table-header-cell>Pattern</sui-table-header-cell>
                    <sui-table-header-cell>Path</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="r in rewrites" :key="r.id">
                    <sui-table-cell :width="1" text-align="center">
                      <sui-checkbox radio label="" name="rewrite_select" />
                    </sui-table-cell>
                    <sui-table-cell :width="5">{{ r.style }}</sui-table-cell>
                    <sui-table-cell :width="6">{{ r.pattern }}</sui-table-cell>
                    <sui-table-cell :width="6">{{ r.path }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>
            <div is="sui-button-group" style="margin-bottom: 15px;">
              <sui-button icon="plus" compact />
              <sui-button icon="copy" compact />
              <sui-button icon="minus" compact />
              <sui-button icon="pencil alternate" compact />
            </div>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WebMenu from "@/Modules/Web/Components/WebMenu";
export default {
  name: "WebSettingsSiteEditor.vue",
  components: {WebMenu},
  data() {
    let ipAddressOptions = [
      {key: 1, text: "Other", value: 1},
      {key: 2, text: "any", value: 2}
    ];

    let indexFiles = [
      {id: 1, fileName: "index.html"},
      {id: 2, fileName: "index.php"}
    ];

    const logFormatOptions = [
      {key: 1, text: "Other", value: 1},
      {key: 2, text: "combined", value: 2},
      {key: 3, text: "common", value: 3},
      {key: 4, text: "referer", value: 4},
      {key: 5, text: "agent", value: 5},
    ];

    const logLevelOptions = [
      {key: 1, text: "Emergency", value: 1},
      {key: 2, text: "Alert", value: 2},
      {key: 3, text: "Critical", value: 3},
      {key: 4, text: "Errors", value: 4},
      {key: 5, text: "Warnings", value: 5},
      {key: 6, text: "Notices", value: 6},
      {key: 7, text: "Information", value: 7},
      {key: 8, text: "Debug", value: 8},
    ];

    const aliases = [
      {id: 1, domainName: "*"},
      {id: 2, domainName: "www.example.com"}
    ];

    const rewrites = [
      {id: 1, style: "Alias", pattern: "", path: "/var/www"},
    ];

    const certificateOptions = [
      {key: 1, text: "Custom Configuration", value: 1},
    ];

    const realms = [
      {id: 1, realmName: "Default Administration"}
    ];

    const users = [
      {id: 1, name: "Everyone", canBrowse: true, canAuthor: false},
      {id: 2, name: "benszymanski", canBrowse: true, canAuthor: true},
    ];

    const groups = [
      {id: 1, name: "Content Editors", canBrowse: true, canAuthor: true},
    ];

    return {
      ipAddressOptions: ipAddressOptions,
      selectedIPAddressOption: 2,
      indexFiles: indexFiles,
      logFormatOptions: logFormatOptions,
      selectedLogFormatOption: 1,
      logLevelOptions: logLevelOptions,
      selectedLogLevelOption: 5,
      aliases: aliases,
      rewrites: rewrites,
      certificateOptions: certificateOptions,
      selectedCertificateOption: 1,
      realms: realms,
      users: users,
      groups: groups
    }
  }
}
</script>

<style scoped>

</style>
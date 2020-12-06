<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <afp-menu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Rendezvous registration" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Enable browsing with AppleTalk" />
              </sui-form-field>
              <sui-form-field inline>
                <label>Encoding for older clients:</label>
                <sui-dropdown
                  placeholder="Encoding"
                  selection
                  :options="encodingOptions"
                  v-model="selectedEncoding"
                />
              </sui-form-field>
              <sui-form-field>
                <label>Logon Greeting:</label>
                <textarea rows="21"></textarea>
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Do not send same greeting twice to the same user" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Access">
            <sui-form>
              <sui-form-field inline>
                <label>Authentication:</label>
                <sui-dropdown
                    placeholder="Encoding"
                    selection
                    :options="authenticationOptions"
                    v-model="selectedAuthentication"
                />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Enable Guest access" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Enable secure connections" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Enable administrator to masquerade as any registered user" />
              </sui-form-field>
              <h4>Maximum Connections</h4>
              <sui-form-fields inline>
                <label for="client-connections">Client Connections:</label>
                <sui-form-field>
                  <sui-checkbox radio name="client-connections" label="Unlimited" value="1" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox radio name="client-connections" label="Limited" value="2" />
                </sui-form-field>
                <sui-form-field>
                  <input type="number" value="1000">
                </sui-form-field>
              </sui-form-fields>
              <sui-form-fields inline>
                <label for="guest-connections">Guest Connections</label>
                <sui-form-field>
                  <sui-checkbox radio name="guest-connections" label="Unlimited" value="1" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox radio name="guest-connections" label="Limited" value="2" />
                </sui-form-field>
                <sui-form-field>
                  <input type="number" value="1000">
                </sui-form-field>
              </sui-form-fields>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <h4>Access Log</h4>
              <sui-form-field>
                <sui-checkbox label="Enable Access Log" />
              </sui-form-field>
              <sui-form-fields inline>
                <sui-form-field>
                  <sui-checkbox label="Archive every" />
                  <input type="number">
                  <span style="margin-left: 10px;">day(s)</span>
                </sui-form-field>
              </sui-form-fields>
              <h4>Select events to include in the access log:</h4>
              <sui-table>
                <sui-table-body>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Login" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="Create File" />
                    </sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Logout" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="Create Folder" />
                    </sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Open File" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="Delete File/Folder" />
                    </sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>

              <h4>Error Log</h4>
              <sui-form-fields inline>
                <sui-form-field>
                  <sui-checkbox label="Archive every" />
                  <input type="number">
                  <span style="margin-left: 10px;">day(s)</span>
                </sui-form-field>
              </sui-form-fields>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Idle Users">
            <sui-form>
              <sui-form-fields inline>
                <sui-form-field>
                  <sui-checkbox label="Allow clients to sleep" />
                  <input type="number">
                  <span style="margin-left: 10px;">hour(s) - this will not show as idle</span>
                </sui-form-field>
              </sui-form-fields>
              <sui-form-fields inline>
                <sui-form-field>
                  <sui-checkbox label="Disconnect idle users after" />
                  <input type="number">
                  <span style="margin-left: 10px;">minutes(s)</span>
                </sui-form-field>
              </sui-form-fields>
              <h4>Except</h4>
              <sui-table>
                <sui-table-body>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Guests" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="Registered users" />
                    </sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Administrators" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="Idle users who have open files" />
                    </sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
              <sui-form-field>
                <label>Disconnect Message:</label>
                <textarea rows="11"></textarea>
                <p>Not all clients can display disconnect messages.</p>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import AfpMenu from "@/Modules/AFP/Components/AfpMenu";
export default {
  name: "AfpSettings",
  components: {AfpMenu},
  data() {
    const encodingOptions = [
      {
        key: 1,
        text: "Roman",
        value: 1
      },
      {
        key: 2,
        text: "Japanese",
        value: 2
      },
      {
        key: 3,
        text: "Chinese Traditional",
        value: 3
      },
      {
        key: 4,
        text: "Korean",
        value: 4
      },
      {
        key: 5,
        text: "Arabic",
        value: 5
      },
      {
        key: 6,
        text: "Hebrew",
        value: 6
      },
      {
        key: 7,
        text: "Greek",
        value: 7
      },
      {
        key: 8,
        text: "Cyrillic",
        value: 8
      },
      {
        key: 9,
        text: "Thai",
        value: 9
      },
      {
        key: 10,
        text: "Chinese Simplified",
        value: 10
      },
      {
        key: 11,
        text: "Central European Roman",
        value: 11
      },
      {
        key: 12,
        text: "Turkish",
        value: 12
      },
      {
        key: 13,
        text: "Croatian",
        value: 13
      },
      {
        key: 14,
        text: "Icelandic",
        value: 14
      },
      {
        key: 15,
        text: "Romanian",
        value: 15
      },
    ];

    const authenticationOptions = [
      {
        key: 1,
        text: "Standard",
        value: 1
      },
      {
        key: 2,
        text: "Kerberos",
        value: 2
      },
      {
        key: 3,
        text: "Any Method",
        value: 3
      },
    ]

    return {
      selectedEncoding: 1,
      selectedAuthentication: 3,
      encodingOptions: encodingOptions,
      authenticationOptions: authenticationOptions
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <afp-menu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-dimmer v-bind:active="loading" inverted>
          <sui-loader>Loading...</sui-loader>
        </sui-dimmer>

        <sui-form>
          <sui-tab>
            <sui-tab-pane title="General">
                <sui-form-field>
                  <sui-checkbox
                      label="Enable Rendezvous registration"
                      v-model="settings.enable_rendezvous_registration"
                  />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox
                      label="Enable browsing with AppleTalk"
                      v-model="settings.enable_browsing_with_appletalk"
                  />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Encoding for older clients:</label>
                  <sui-dropdown
                    placeholder="Encoding"
                    selection
                    :options="encodingOptions"
                    v-model="settings.encoding_for_older_clients"
                  />
                </sui-form-field>
                <sui-form-field>
                  <label>Logon Greeting:</label>
                  <textarea rows="21" v-model="settings.logon_greeting"></textarea>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox
                      label="Do not send same greeting twice to the same user"
                      v-model="settings.do_not_send_same_greeting_twice"
                  />
                </sui-form-field>
            </sui-tab-pane>
            <sui-tab-pane title="Access">
                <sui-form-field inline>
                  <label>Authentication:</label>
                  <sui-dropdown
                      placeholder="Encoding"
                      selection
                      :options="authenticationOptions"
                      v-model="settings.authentication"
                  />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox
                      label="Enable Guest access"
                      v-model="settings.enable_guest_access"
                  />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox
                      label="Enable secure connections"
                      v-model="settings.enable_secure_connections"
                  />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox
                      label="Enable administrator to masquerade as any registered user"
                      v-model="settings.enable_administrator_to_masq"
                  />
                </sui-form-field>
                <h4>Maximum Connections</h4>
                <sui-form-fields inline>
                  <label for="client-connections">Client Connections:</label>
                  <sui-form-field>
                    <sui-checkbox
                        radio
                        name="client-connections"
                        label="Unlimited"
                        value="1"
                        v-model="settings.client_connections"
                    />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox
                        radio
                        name="client-connections"
                        label="Limited"
                        value="2"
                        v-model="settings.client_connections"
                    />
                  </sui-form-field>
                  <sui-form-field>
                    <input
                        type="number"
                        value="1000"
                        v-model="settings.client_connections_limit"
                    />
                  </sui-form-field>
                </sui-form-fields>
                <sui-form-fields inline>
                  <label for="guest-connections">Guest Connections</label>
                  <sui-form-field>
                    <sui-checkbox
                        radio
                        name="guest-connections"
                        label="Unlimited"
                        value="1"
                        v-model="settings.guest_connections"
                    />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox
                        radio
                        name="guest-connections"
                        label="Limited"
                        value="2"
                        v-model="settings.guest_connections"
                    />
                  </sui-form-field>
                  <sui-form-field>
                    <input
                        type="number"
                        value="1000"
                        v-model="settings.guest_connections_limit"
                    />
                  </sui-form-field>
                </sui-form-fields>
            </sui-tab-pane>
            <sui-tab-pane title="Logging">
                <h4>Access Log</h4>
                <sui-form-field>
                  <sui-checkbox
                      label="Enable Access Log"
                      v-model="settings.enable_access_log"
                  />
                </sui-form-field>
                <sui-form-fields inline>
                  <sui-form-field>
                    <sui-checkbox
                        label="Archive every"
                        v-model="settings.access_archive_every"
                    />
                    <input
                        type="number"
                        v-model="settings.access_archive_every_days"
                    />
                    <span style="margin-left: 10px;">day(s)</span>
                  </sui-form-field>
                </sui-form-fields>
                <h4>Select events to include in the access log:</h4>
                <sui-table>
                  <sui-table-body>
                    <sui-table-row>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Login"
                            v-model="settings.event_login"
                        />
                      </sui-table-cell>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Create File"
                            v-model="settings.event_create_file"
                        />
                      </sui-table-cell>
                    </sui-table-row>
                    <sui-table-row>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Logout"
                            v-model="settings.event_logout"
                        />
                      </sui-table-cell>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Create Folder"
                            v-model="settings.event_create_folder"
                        />
                      </sui-table-cell>
                    </sui-table-row>
                    <sui-table-row>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Open File"
                            v-model="settings.event_open_file"
                        />
                      </sui-table-cell>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Delete File/Folder"
                            v-model="settings.event_delete"
                        />
                      </sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>

                <h4>Error Log</h4>
                <sui-form-fields inline>
                  <sui-form-field>
                    <sui-checkbox
                        label="Archive every"
                        v-model="settings.error_archive_every"
                    />
                    <input
                        type="number"
                        v-model="settings.error_archive_every_days"
                    />
                    <span style="margin-left: 10px;">day(s)</span>
                  </sui-form-field>
                </sui-form-fields>
            </sui-tab-pane>
            <sui-tab-pane title="Idle Users">
                <sui-form-fields inline>
                  <sui-form-field>
                    <sui-checkbox
                        label="Allow clients to sleep"
                        v-model="settings.allow_clients_to_sleep"
                    />
                    <input
                        type="number"
                        v-model="settings.allow_clients_to_sleep_hours"
                    />
                    <span style="margin-left: 10px;">hour(s) - this will not show as idle</span>
                  </sui-form-field>
                </sui-form-fields>
                <sui-form-fields inline>
                  <sui-form-field>
                    <sui-checkbox
                        label="Disconnect idle users after"
                        v-model="settings.disconnect_idle_users"
                    />
                    <input
                        type="number"
                        v-model="settings.disconnect_idle_users_minutes"
                    />
                    <span style="margin-left: 10px;">minutes(s)</span>
                  </sui-form-field>
                </sui-form-fields>
                <h4>Except</h4>
                <sui-table>
                  <sui-table-body>
                    <sui-table-row>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Guests"
                            v-model="settings.disconnect_except_guests"
                        />
                      </sui-table-cell>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Registered users"
                            v-model="settings.disconnect_except_registered_users"
                        />
                      </sui-table-cell>
                    </sui-table-row>
                    <sui-table-row>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Administrators"
                            v-model="settings.disconnect_except_administrators"
                        />
                      </sui-table-cell>
                      <sui-table-cell>
                        <sui-checkbox
                            label="Idle users who have open files"
                            v-model="settings.disconnect_except_open_files"
                        />
                      </sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
                <sui-form-field>
                  <label>Disconnect Message:</label>
                  <textarea rows="11" v-model="settings.disconnect_message"></textarea>
                  <p>Not all clients can display disconnect messages.</p>
                </sui-form-field>
            </sui-tab-pane>
          </sui-tab>
        </sui-form>
        <div class="controlBar">
          <div></div>
          <div>
            <sui-button @click="fetchSettings">Revert</sui-button>
            <sui-button positive v-bind:loading="saving" @click="saveSettings">Save</sui-button>
          </div>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import AfpMenu from "@/Modules/AFP/Components/AfpMenu";
import axios from "axios";
export default {
  name: "AfpSettings",
  components: {AfpMenu},
  data() {
    const encodingOptions = [
      { key: 1, text: "Roman", value: 1 },
      { key: 2, text: "Japanese", value: 2 },
      { key: 3, text: "Chinese Traditional", value: 3 },
      { key: 4, text: "Korean", value: 4 },
      { key: 5, text: "Arabic", value: 5 },
      { key: 6, text: "Hebrew", value: 6 },
      { key: 7, text: "Greek", value: 7 },
      { key: 8, text: "Cyrillic", value: 8 },
      { key: 9, text: "Thai", value: 9 },
      { key: 10, text: "Chinese Simplified", value: 10 },
      { key: 11, text: "Central European Roman", value: 11 },
      { key: 12, text: "Turkish", value: 12 },
      { key: 13, text: "Croatian", value: 13 },
      { key: 14, text: "Icelandic", value: 14 },
      { key: 15, text: "Romanian", value: 15 },
    ];

    const authenticationOptions = [
      { key: 1, text: "Standard", value: 1 },
      { key: 2, text: "Kerberos", value: 2 },
      { key: 3, text: "Any Method", value: 3 },
    ]

    return {
      settings: { },
      loading: true,
      saving: false,
      selectedEncoding: 1,
      selectedAuthentication: 3,
      encodingOptions: encodingOptions,
      authenticationOptions: authenticationOptions
    }
  },
  mounted() {
    this.fetchSettings();
  },
  methods: {
    fetchSettings: function () {
      const url = "/afp/settings";

      this.loading = true;
      axios.get(url).then((response) => {
        this.settings = response.data;
        this.loading = false;
      }).catch((e) => {
        this.loading = false;

        let alertText = "An error occurred while trying to fetch service configuration. (";
        alertText += e.toString();
        alertText += ")";
        window.alert(alertText);
      });
    },
    saveSettings: function () {
      const url = "/afp/settings";

      this.saving = true;
      axios.post(url, this.settings).then((response) => {
        this.settings = response.data;
        this.saving = false;
      }).catch((e) => {
        this.saving = false;

        let alertText = "An error occurred while trying to save service configuration. (";
        alertText += e.toString();
        alertText += ")";
        window.alert(alertText);
      });
    },
  }
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ChatMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-dimmer v-bind:active="loading" inverted>
          <sui-loader>Loading...</sui-loader>
        </sui-dimmer>

        <sui-tab>
          <sui-tab-pane title="General">
            <h4>Host Domains</h4>
            <div class="table-container" style="height: 225px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-body>
                  <sui-table-row
                      v-for="(h, idx) in settings.host_domains"
                      :key="h.domain"
                      v-bind:active="selectedHostIndex === idx"
                      @click="selectRow(idx)"
                  >
                      <sui-table-cell>
                        <input
                            type="text"
                            v-model="h.domain"
                            style="margin-left: 10px; border: none; background-color: rgba(0,0,0,0); width: 90%; outline: none;" />
                      </sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>
            <div is="sui-button-group" style="margin-bottom: 15px;">
              <sui-button type="button" icon="plus" compact @click="addHostDomain" />
              <sui-button
                  type="button"
                  icon="minus"
                  @click="removeHostDomain"
                  compact v-bind:disabled="!(selectedHostIndex > -1)" />
            </div>

            <sui-form>
              <sui-form-field>
                <label for="welcome-message">Welcome Message</label>
                <textarea id="welcome-message" v-model="settings.welcome_message"></textarea>
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label for="ssl-certificate">SSL Certificate:</label>
                  <sui-dropdown
                      id="ssl-certificate"
                      placeholder="SSL Certificate"
                      selection
                      :options="sslCertificates"
                      v-model="settings.ssl_certificate"
                  />
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
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
import ChatMenu from "@/Modules/Chat/Components/ChatMenu";
import axios from "axios";
export default {
  name: "ChatSettings",
  components: {ChatMenu},
  data() {
    let networkInterfaces = [
      { text: "Built-in Ethernet", value: 1 }
    ];

    const sslCertificates = [
      {id: 1, text: "Default", value: 1}
    ];

    return {
      settings: {
        host_domains: [],
        welcome_message: "",
        ssl_certificate: 1
      },
      loading: true,
      saving: false,
      networkInterfaces: networkInterfaces,
      selectedNetworkInterface: 1,
      sslCertificates: sslCertificates,
      selectedSSLCertificate: 1,

      selectedHostIndex: -1
    }
  },
  mounted() {
    this.fetchSettings();
  },
  methods: {
    fetchSettings: function () {
      const url = "/chat/settings";

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
    saveSettings: function() {
      const url = "/chat/settings";

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
    addHostDomain: function() {
      this.settings.host_domains.push({
        domain: "domain.local"
      });

      this.selectedHostIndex = this.settings.host_domains.length;
    },
    removeHostDomain: function() {
      this.settings.host_domains.splice(this.selectedHostIndex, 1);
    },
    selectRow: function(index) {
      this.selectedHostIndex = index;
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ChatMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <h4>Host Domains</h4>
              <div class="table-container" style="height: 225px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-body>
                    <sui-table-row v-for="h in hostDomains" :key="h.id">
                      <sui-table-cell>{{ h.domain }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
              </div>

              <sui-form-field>
                <label>Welcome Message</label>
                <textarea></textarea>
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label for="ssl-certificate">SSL Certificate:</label>
                  <sui-dropdown
                      id="ssl-certificate"
                      placeholder="SSL Certificate"
                      selection
                      :options="sslCertificates"
                      v-model="selectedSSLCertificate"
                  />
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
import ChatMenu from "@/Modules/Chat/Components/ChatMenu";
export default {
  name: "ChatSettings",
  components: {ChatMenu},
  data() {
    let networkInterfaces = [
      { text: "Built-in Ethernet", value: 1 }
    ];

    const hostDomains = [
      {id: 1, domain: "Cocos.local"}
    ];

    const sslCertificates = [
      {id: 1, text: "Default", value: 1}
    ];

    return {
      networkInterfaces: networkInterfaces,
      selectedNetworkInterface: 1,
      hostDomains: hostDomains,
      sslCertificates: sslCertificates,
      selectedSSLCertificate: 1
    }
  }
}
</script>

<style scoped>

</style>
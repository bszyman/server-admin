<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebMenu selected-section="Log" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-form>
          <div class="table-container" style="height: 225px;">
            <sui-table compact selectable padded basic="very">
              <sui-table-header>
                <sui-table-row>
                  <sui-table-header-cell>IP Address</sui-table-header-cell>
                  <sui-table-header-cell>Domain Name</sui-table-header-cell>
                  <sui-table-header-cell>Port</sui-table-header-cell>
                  <sui-table-header-cell>Type</sui-table-header-cell>
                  <sui-table-header-cell>Path</sui-table-header-cell>
                </sui-table-row>
              </sui-table-header>
              <sui-table-body>
                <sui-table-row v-for="l in logs" :key="l.id">
                  <sui-table-cell>{{ l.ipAddress }}</sui-table-cell>
                  <sui-table-cell>{{ l.domainName }}</sui-table-cell>
                  <sui-table-cell>{{ l.port }}</sui-table-cell>
                  <sui-table-cell>{{ l.type }}</sui-table-cell>
                  <sui-table-cell>{{ l.path }}</sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
          </div>
          <sui-divider />
          <sui-form-field>
            <textarea rows="20" readonly></textarea>
          </sui-form-field>
          <div class="controlBar">
            <div></div>
            <div>
              <sui-form-field inline>
                <label>Filter</label>
                <input type="text" />
              </sui-form-field>
            </div>
          </div>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WebMenu from "@/Modules/Web/Components/WebMenu";
export default {
  name: "WebLog",
  components: {WebMenu},
  data() {
    const logs = [
      {id: 1, ipAddress: "*", domainName: "", port: 80, type: "Access", path: "/var/log/httpd/access_log"},
      {id: 2, ipAddress: "*", domainName: "", port: 80, type: "Error", path: "/var/log/httpd/error_log"}
    ]

    return {
      logs: logs
    }
  }
}
</script>

<style scoped>

</style>
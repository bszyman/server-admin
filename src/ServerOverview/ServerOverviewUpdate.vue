<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ServerOverviewMenu selected-section="Update" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <h4>Select the software you want to install and click on Install:</h4>
        <div class="table-container" style="height: 375px;">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell text-align="center" :width="1"></sui-table-header-cell>
                <sui-table-header-cell :width="8">Name</sui-table-header-cell>
                <sui-table-header-cell text-align="center" :width="2">Version</sui-table-header-cell>
                <sui-table-header-cell :width="2">Size</sui-table-header-cell>
                <sui-table-header-cell :width="3">Status</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="update in updates" :key="update.id">
                <sui-table-cell text-align="center" :width="1"><i class="power off icon" v-show="update.restart" /></sui-table-cell>
                <sui-table-cell :width="8">{{ update.name }}</sui-table-cell>
                <sui-table-cell text-align="center" :width="2">{{ update.version }}</sui-table-cell>
                <sui-table-cell :width="2">{{ update.size }}</sui-table-cell>
                <sui-table-cell :width="3">{{ update.status }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
        <p>Click on Check Now to check for available updates</p>
        <div class="controlBar">
          <div>
            <sui-button>Check Now</sui-button>
          </div>
          <div>
            <sui-button>Reboot...</sui-button>
            <sui-button>Install</sui-button>
          </div>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import ServerOverviewMenu from "@/ServerOverview/Components/ServerOverviewMenu";

export default {
  name: "ServerOverviewStart",
  components: {ServerOverviewMenu},
  data() {
    const updates = [
      {id: 1, restart: false, name: "Java for Mac OS X 10.4, Release 5", version: "5.0", size: "81.2 MB", status: "Ready to install"},
      {id: 2, restart: true, name: "Airport Extreme Update 2008-002", version: "1.0", size: "2.8 MB", status: "Ready to install"},
      {id: 3, restart: false, name: "Migration and DVD/CD Sharing Update", version: "1.1", size: "6.9 MB", status: "Ready to install"},
      {id: 4, restart: true, name: "QuickTime", version: "7.6.4", size: "50.1 MB", status: "Ready to install"},
      {id: 5, restart: true, name: "Security Update 2009-005 (Universal)", version: "1.0", size: "209.4 MB", status: "Ready to install"}
    ];

    return {
      updates: updates
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ServerOverviewMenu selected-section="Update" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <p>Select the software you want to install and click on Install:</p>
        <sui-segment></sui-segment>
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
  components: {ServerOverviewMenu}
}
</script>

<style scoped>

</style>
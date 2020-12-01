<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ServerOverviewMenu selected-section="System" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="Hardware">
            <p style="text-align: center;">CPU Usage: 7.15%</p>
            <p style="text-align: center;">Network Traffic: 0.0 B/second</p>
            <sui-segment>
            </sui-segment>
            <p style="text-align: left;">List of interfaces is refreshed every minute.</p>
            <sui-divider hidden />
            <p style="text-align: center;">Volumes Information</p>
            <sui-segment>
            </sui-segment>
          </sui-tab-pane>
          <sui-tab-pane title="Quotas">
            <sui-form>
              <sui-form-field>
                <textarea rows="31" readonly>No users and groups quotas</textarea>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
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
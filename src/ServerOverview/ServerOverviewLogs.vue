<template>
  <sui-form>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column :width="16">
          <ServerOverviewMenu selected-section="Logs" />
        </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column :width="16">
          <sui-form-field>
            <textarea rows="31" readonly></textarea>
          </sui-form-field>
          <div class="controlBar">
            <div>
              <sui-form-field inline>
                <label>Show:</label>
                <sui-dropdown
                    placeholder="Select Log"
                    selection
                    :options="logTypeOptions"
                    v-model="selectedLogType"
                />
              </sui-form-field>
            </div>
            <div>
              <sui-form-field inline>
                <label for="filter-field">Filter:</label>
                <input type="text" id="filter-field" placeholder="Filter">
              </sui-form-field>
            </div>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-form>
</template>

<script>
import ServerOverviewMenu from "@/ServerOverview/Components/ServerOverviewMenu";

export default {
  name: "ServerOverviewStart",
  components: {ServerOverviewMenu},
  data() {
    const logTypeOptions = [
      {
        key: 1,
        text: "System Log",
        value: 1
      },
      {
        key: 2,
        text: "Watchdog Event Log",
        value: 2
      },
      {
        key: 3,
        text: "Software Update Log",
        value: 3
      },
      {
        key: 4,
        text: "Server Settings Event Log",
        value: 4
      },
      {
        key: 5,
        text: "Server Settings Error Log",
        value: 5
      },
    ];

    return {
      logTypeOptions: logTypeOptions,
      selectedLogType: 1
    }
  }
}
</script>

<style scoped>

</style>
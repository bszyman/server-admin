<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <PrintMenu selected-section="Jobs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-form>
          <sui-form-field inline>
            <label>Jobs on Queue</label>
            <sui-dropdown
                placeholder="Select Queue"
                selection
                :options="queueOptions"
                v-model="selectedQueueOption"
            />
          </sui-form-field>

          <p>Queue Status: Not available</p>

          <div class="table-container">
            <sui-table compact selectable padded basic="very">
              <sui-table-header>
                <sui-table-row>
                  <sui-table-header-cell>ID</sui-table-header-cell>
                  <sui-table-header-cell>User</sui-table-header-cell>
                  <sui-table-header-cell>Job Name</sui-table-header-cell>
                  <sui-table-header-cell>Pages</sui-table-header-cell>
                  <sui-table-header-cell>Sheets</sui-table-header-cell>
                  <sui-table-header-cell>Status</sui-table-header-cell>
                </sui-table-row>
              </sui-table-header>
              <sui-table-body>
                <sui-table-row v-for="job in jobs" :key="job.id">
                  <sui-table-cell>{{ job.id }}</sui-table-cell>
                  <sui-table-cell>{{ job.user }}</sui-table-cell>
                  <sui-table-cell>{{ job.jobName }}</sui-table-cell>
                  <sui-table-cell>{{ job.pages }}</sui-table-cell>
                  <sui-table-cell>{{ job.sheets }}</sui-table-cell>
                  <sui-table-cell>{{ job.status }}</sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>
          </div>
          <div class="controlBar">
            <div></div>
            <div>
              <div is="sui-button-group">
                <sui-button icon="pause" compact />
                <sui-button icon="play" compact />
                <sui-button icon="minus" compact />
              </div>
            </div>
          </div>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import PrintMenu from "@/Modules/Print/Components/PrintMenu";
export default {
  name: "PrintJobs",
  components: {PrintMenu},
  data() {
    let queueOptions = [];

    return {
      jobs: [],
      queueOptions: queueOptions,
      selectedQueueOption: null,
    }
  }
}
</script>

<style scoped>

</style>
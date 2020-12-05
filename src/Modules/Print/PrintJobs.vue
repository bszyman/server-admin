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

          <sui-segment></sui-segment>
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
      queueOptions: queueOptions,
      selectedQueueOption: null,
    }
  }
}
</script>

<style scoped>

</style>
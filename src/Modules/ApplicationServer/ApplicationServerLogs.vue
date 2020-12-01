<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ApplicationServerMenu selected-section="Logs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-form>
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
            <div></div>
          </div>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import ApplicationServerMenu from "@/Modules/ApplicationServer/Components/ApplicationServerMenu";
export default {
  name: "ApplicationServerLogs",
  components: {ApplicationServerMenu},
  data() {
    const logTypeOptions = [

    ];

    return {
      selectedLogType: null,
      logTypeOptions: logTypeOptions
    }
  }
}
</script>

<style scoped>

</style>
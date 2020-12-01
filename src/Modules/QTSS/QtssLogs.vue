<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <QtssMenu selected-section="Logs" />
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
import QtssMenu from "@/Modules/QTSS/Components/QtssMenu";
export default {
  name: "QtssLogs",
  components: {QtssMenu},
  data() {
    const logTypeOptions = [
      {
        key: 1,
        text: "Error Log",
        value: 1
      },
    ];

    return {
      selectedLogType: 1,
      logTypeOptions: logTypeOptions
    }
  }
}
</script>

<style scoped>

</style>
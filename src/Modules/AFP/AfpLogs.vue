<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <afp-menu selected-section="Logs" />
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
              <p>/Library/Logs/AppleFileService/AppleFileService.log</p>
            </div>
            <div>
              <sui-form-field inline>
                <label>Filter:</label>
                <input type="text">
              </sui-form-field>
            </div>
          </div>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import AfpMenu from "@/Modules/AFP/Components/AfpMenu";
export default {
  name: "AfpLogs",
  components: {AfpMenu},
  data() {
    const logTypeOptions = [
      {
        key: 1,
        text: "Access Log",
        value: 1
      },
      {
        key: 2,
        text: "Error Log",
        value: 2
      },
    ];

    return {
      selectedLogType: 2,
      logTypeOptions: logTypeOptions
    }
  }
}
</script>

<style scoped>

</style>
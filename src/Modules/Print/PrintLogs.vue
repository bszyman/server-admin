<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <PrintMenu selected-section="Logs" />
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
              <p>/Library/Logs/PrintService/PrintService_admin.log</p>
            </div>
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
import PrintMenu from "@/Modules/Print/Components/PrintMenu";
export default {
  name: "PrintLogs",
  components: {PrintMenu},
  data() {
    const logTypeOptions = [
      { key: 1, text: "Print Service Log", value: 1 },
      { key: 2, text: "Error Log", value: 2 },
      { key: 3, text: "Access Log", value: 3 },
      { key: 4, text: "Page Log", value: 4 },
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
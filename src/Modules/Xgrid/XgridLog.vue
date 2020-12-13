<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <XgridMenu selected-section="Log" />
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
              <p>/var/log/system.log</p>
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
import XgridMenu from "@/Modules/Xgrid/Components/XgridMenu";
export default {
  name: "XgridLog",
  components: {XgridMenu},
  data() {
    const logTypeOptions = [
      {
        key: 1,
        text: "Xgrid Log (System Log)",
        value: 1
      },
      {
        key: 2,
        text: "Console Log",
        value: 2
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
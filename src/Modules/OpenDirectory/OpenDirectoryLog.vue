<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <OpenDirectoryMenu selected-section="Log" />
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
              <p>/Library/Logs/DirectoryService/DirectoryService.server.log</p>
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
import OpenDirectoryMenu from "@/Modules/OpenDirectory/Components/OpenDirectoryMenu";
export default {
  name: "OpenDirectoryLog",
  components: {OpenDirectoryMenu},
  data() {
    const logTypeOptions = [
      { key: 1, text: "Directory Services Server Log", value: 1 },
      { key: 2, text: "Directory Services Error Log", value: 2 },
      { key: 3, text: "Lookup Log", value: 3 },
      { key: 4, text: "NetInfo Log", value: 4 },
      { key: 5, text: "LDAP Log", value: 5 },
      { key: 6, text: "Password Service Server Log", value: 6 },
      { key: 7, text: "Password Service Error Log", value: 7 },
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
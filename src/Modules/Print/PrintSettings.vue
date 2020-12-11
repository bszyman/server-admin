<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <PrintMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field inline>
                <label>Default Queue for LPR:</label>
                <sui-dropdown
                    placeholder="None"
                    selection
                    :options="defaultQueueOptions"
                    v-model="selectedDefaultQueueOption"
                />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-form-fields inline>
                <sui-form-field>
                  <sui-checkbox label="Archive server log" />
                </sui-form-field>
              </sui-form-fields>
              <sui-form-field inline>
                <label>Maximum log size:</label>
                <sui-dropdown
                    placeholder="Select Log Size"
                    selection
                    :options="logSizeOptions"
                    v-model="selectedLogSizeOption"
                />
              </sui-form-field>
              <sui-form-field inline>
                <label>Log Level:</label>
                <sui-dropdown
                    placeholder="Select Log Size"
                    selection
                    :options="logDetailOptions"
                    v-model="selectedLogDetailOption"
                />
              </sui-form-field>
              <p>Log all requests and state changes (default)</p>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Queues">
            <sui-form>
              <div class="table-container" style="height: 375px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-header>
                    <sui-table-row>
                      <sui-table-header-cell>Name</sui-table-header-cell>
                      <sui-table-header-cell>Kind</sui-table-header-cell>
                    </sui-table-row>
                  </sui-table-header>
                  <sui-table-body>
                    <sui-table-row v-for="q in queues" :key="q.id">
                      <sui-table-cell>{{ q.name }}</sui-table-cell>
                      <sui-table-cell>{{ q.kind }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>
              <div class="controlBar">
                <div>
                  <div is="sui-button-group" style="margin-bottom: 15px;">
                    <sui-button icon="plus" compact />
                    <sui-button icon="minus" compact />
                    <sui-button icon="pencil alternate" compact />
                  </div>
                </div>
                <div>
                  <sui-button>Create Printer Pool...</sui-button>
                </div>
              </div>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
        <div class="controlBar">
          <div></div>
          <div>
            <sui-button>Revert</sui-button>
            <sui-button positive>Save</sui-button>
          </div>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import PrintMenu from "@/Modules/Print/Components/PrintMenu";
export default {
  name: "PrintSettings",
  components: {PrintMenu},
  data() {
    let defaultQueueOptions = [];
    let logSizeOptions = [
      {key: 1, text: "1 MB", value: 1},
      {key: 2, text: "2 MB", value: 2},
      {key: 3, text: "4 MB", value: 4},
      {key: 4, text: "8 MB", value: 8},
      {key: 5, text: "16 MB", value: 16},
      {key: 6, text: "32 MB", value: 32},
      {key: 7, text: "64 MB", value: 64},
      {key: 8, text: "128 MB", value: 128},
      {key: 9, text: "256 MB", value: 256},
      {key: 10, text: "512 MB", value: 512},
    ];

    const logDetailOptions = [
      { key: 1, text: "None", value: 1 },
      { key: 2, text: "Emergency", value: 2 },
      { key: 3, text: "Alert", value: 3 },
      { key: 4, text: "Critical", value: 4 },
      { key: 5, text: "Error", value: 5 },
      { key: 6, text: "Warn", value: 6 },
      { key: 7, text: "Notice", value: 7 },
      { key: 8, text: "Information", value: 8 },
      { key: 9, text: "Debug", value: 9 },
      { key: 10, text: "Debug 2", value: 10 },
    ];

    return {
      queues: [],
      selectedDefaultQueueOption: null,
      defaultQueueOptions: defaultQueueOptions,
      logSizeOptions: logSizeOptions,
      selectedLogSizeOption: 1,
      logDetailOptions: logDetailOptions,
      selectedLogDetailOption: 8
    }
  }
}
</script>

<style scoped>

</style>
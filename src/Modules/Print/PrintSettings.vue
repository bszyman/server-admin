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
                  <sui-checkbox label="Archive server log every" />
                  <input type="number">
                  <span style="margin-left: 10px;">day(s)</span>
                </sui-form-field>
              </sui-form-fields>
              <sui-form-fields inline>
                <sui-form-field>
                  <sui-checkbox label="Archive job logs every" />
                  <input type="number">
                  <span style="margin-left: 10px;">day(s)</span>
                </sui-form-field>
              </sui-form-fields>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Queues">
            <sui-form>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
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

    return {
      selectedDefaultQueueOption: null,
      defaultQueueOptions: defaultQueueOptions
    }
  }
}
</script>

<style scoped>

</style>
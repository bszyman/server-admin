<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ApplicationServerMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <h4>Configuration Type:</h4>
              <sui-form-field>
                <sui-checkbox
                    radio
                    name="configuration"
                    label="Load remote configuration"
                    v-model="configurationSetting"
                    value="1"
                />
              </sui-form-field>
              <sui-form-field inline style="margin-left: 50px;">
                <label for="jboss-net-boot-url">JBoss net-boot URL:</label>
                <input name="jboss-net-boot-url" type="text">
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox
                    radio
                    name="configuration"
                    label="Use local configuration"
                    v-model="configurationSetting"
                    value="2"
                />
              </sui-form-field>
              <sui-form-field inline style="margin-left: 50px;">
                <label>Configuration Name:</label>
                <sui-dropdown
                    placeholder="Configuration Name"
                    selection
                    search
                    :options="configuationNameOptions"
                    v-model="selectedConfigurationName"
                />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox
                    radio
                    name="configuration"
                    label="Tomcat only"
                    v-model="configurationSetting"
                    value="3"
                />
              </sui-form-field>

              <sui-button style="margin-top: 20px;">Manage JBoss...</sui-button>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Backup">
            <div style="width: 600px; margin: 0 auto;">
              <div style="margin-top: 30px; margin-bottom: 30px;">
                <p>
                  Back up your configuration to preserve a known good state or
                  use the archive to create a duplicate configuration on another host.
                </p>
                <div style="text-align: right;">
                  <sui-button>Backup...</sui-button>
                </div>
              </div>
              <div style="margin-bottom: 30px;">
                <p>
                  Restore from an archive to return to a known good state or to
                  duplicate a saved configuration from another host.
                </p>
                <div style="text-align: right;">
                  <sui-button>Restore...</sui-button>
                </div>
              </div>
            </div>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import ApplicationServerMenu from "@/Modules/ApplicationServer/Components/ApplicationServerMenu";
export default {
  name: "ApplicationServerSettings",
  components: {ApplicationServerMenu},
  data() {
    const configuationNameOptions = [
      { key: "1", text: "default", value: 1},
      { key: "2", text: "deploy-cluster", value: 2},
      { key: "3", text: "deploy-standalone", value: 3},
      { key: "4", text: "develop", value: 4}
    ];

    return {
      configurationSetting: 1,
      selectedConfigurationName: 1,
      configuationNameOptions: configuationNameOptions,
    }
  }
}
</script>

<style scoped>

</style>
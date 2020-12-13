<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <XgridMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="Agent">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable agent service" />
              </sui-form-field>

              <div style="margin-left: 50px;">
                <sui-form-fields grouped>
                  <label>Controller:</label>
                  <sui-form-field>
                    <sui-checkbox radio label="Use first available controller" />
                  </sui-form-field>
                  <sui-form-field inline>
                    <sui-checkbox radio label="Use a specific controller" />
                    <sui-dropdown
                        placeholder="Server Role"
                        selection
                        :options="controllers"
                        v-model="selectedController"
                    />
                  </sui-form-field>
                </sui-form-fields>

                <sui-form-fields grouped>
                  <label>Agent accepts tasks:</label>
                  <sui-form-field>
                    <sui-checkbox radio name="accept_tasks" label="Only when this computer is idle" />
                  </sui-form-field>
                  <sui-form-field inline>
                    <sui-checkbox radio name="accept_tasks" label="Always" />
                  </sui-form-field>
                </sui-form-fields>

                <h4>Controller Authentication:</h4>
                <div style="display: flex;">
                  <div style="flex: 1;">
                    <sui-dropdown
                        placeholder="Password Method"
                        selection
                        :options="passwordOptions"
                        v-model="selectedPasswordOption"
                    />
                  </div>
                  <div style="flex: 2;">
                    <sui-form-field>
                      <input type="text" />
                    </sui-form-field>
                  </div>
                </div>
                <p style="margin-top: 10px;">The controller must authenticate to this agent with the password above.</p>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Controller">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable controller service" />
              </sui-form-field>

              <div style="margin-left: 50px;">
                <h4>Client Authentication:</h4>
                <div style="display: flex;">
                  <div style="flex: 1;">
                    <sui-dropdown
                        placeholder="Password Method"
                        selection
                        :options="passwordOptions"
                        v-model="selectedClientAuthOption"
                    />
                  </div>
                  <div style="flex: 2;">
                    <sui-form-field>
                      <input type="text" />
                    </sui-form-field>
                  </div>
                </div>
                <p style="margin-top: 10px;">
                  Clients must authenticate to the controller using the password above.
                </p>

                <h4>Agent Authentication:</h4>
                <div style="display: flex;">
                  <div style="flex: 1;">
                    <sui-dropdown
                        placeholder="Password Method"
                        selection
                        :options="passwordOptions"
                        v-model="selectedAgentAuthOption"
                    />
                  </div>
                  <div style="flex: 2;">
                    <sui-form-field>
                      <input type="text" />
                    </sui-form-field>
                  </div>
                </div>
                <p style="margin-top: 10px;">
                  This controller with authenticate to the agents with the password above.
                </p>
              </div>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import XgridMenu from "@/Modules/Xgrid/Components/XgridMenu";
export default {
  name: "XgridSettings",
  components: {XgridMenu},
  data() {
    const controllers = [
      { text: "Cocos", value: 1 },
    ];

    const passwordOptions = [
      { text: "Password", value: 1 },
      { text: "Kerberos", value: 2 },
      { text: "None", value: 3 },
    ];

    return {
      controllers: controllers,
      selectedController: 1,
      passwordOptions: passwordOptions,
      selectedPasswordOption: 1,
      selectedClientAuthOption: 1,
      selectedAgentAuthOption: 1
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WindowsMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field inline>
                <label>Role:</label>
                <sui-dropdown
                    placeholder="Server Role"
                    selection
                    :options="serverRoles"
                    v-model="selectedServerRole"
                />
              </sui-form-field>
              <p>
                This server provides Windows file and print
                services. It does not provide authentication
                service for domain login on Windows computers.
              </p>
              <sui-form-field>
                <label>Description:</label>
                <input type="text" value="Mac OS X" />
              </sui-form-field>
              <sui-form-field>
                <label>Computer Name:</label>
                <input type="text" value="cocos" />
              </sui-form-field>
              <sui-form-field>
                <label>Workgroup:</label>
                <input type="text" value="WORKGROUP" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Access">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Allow Guest access" />
              </sui-form-field>
              <sui-form-fields grouped>
                <label for="client_connections">Client connections:</label>
                <sui-form-field>
                  <sui-checkbox radio name="client_connections" label="Unlimited" value="1" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox radio name="client_connections" label="Maximum" value="2" />
                  <input type="number" />
                </sui-form-field>
              </sui-form-fields>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-form-field>
                <sui-form-field inline>
                  <label>Role:</label>
                  <sui-dropdown
                      placeholder="Log Level"
                      selection
                      :options="logDetailOptions"
                      v-model="selectedLogDetailOption"
                  />
                </sui-form-field>
                <p>
                  Logs errors and warning only. No file-access events are logged.
                </p>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Advanced">
            <sui-form>
              <sui-form-field inline>
                <label>Code Page:</label>
                <sui-dropdown
                    placeholder="Code Page"
                    selection
                    :options="codePageOptions"
                    v-model="selectedCodePageOption"
                />
              </sui-form-field>

              <sui-form-fields grouped>
                <label for="services">Services</label>
                <sui-form-field>
                  <sui-checkbox name="services" label="Workgroup Master Browser" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox name="services" label="Domain Master Browser" />
                </sui-form-field>
              </sui-form-fields>

              <sui-form-fields grouped>
                <label for="wins-registration">WINS Registration</label>
                <sui-form-field>
                  <sui-checkbox radio name="wins-registration" label="Off" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox radio name="wins-registration" label="Enable WINS server" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox radio name="wins-registration" label="Register with WINS server" />
                  <input type="text" />
                </sui-form-field>
              </sui-form-fields>

              <sui-form-field>
                <label>Homes:</label>
                <sui-checkbox label="Enable virtual share points" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WindowsMenu from "@/Modules/Windows/Components/WindowsMenu";
export default {
  name: "WindowsSettings",
  components: {WindowsMenu},
  data() {
    const serverRoles = [
      { text: "Standalone Server", value: 1 },
      { text: "Domain Member", value: 2},
      { text: "Primary Domain Controller", value: 3},
    ];

    const logDetailOptions = [
      { text: "Low", value: 1 },
      { text: "Medium", value: 2},
      { text: "High", value: 3},
    ];

    const codePageOptions = [
      {text: "Latin US (437)", value: 437},
      {text: "Greek (737)", value: 737},
      {text: "Baltic (775)", value: 775},
      {text: "Latin 1 (850)", value: 850},
      {text: "Latin 2 (852)", value: 852},
      {text: "Icelandic (861)", value: 861},
      {text: "Cryillic (866)", value: 866},
      {text: "Japanese SJIS (932)", value: 932},
      {text: "Simplified Chinese (936)", value: 936},
      {text: "Korean Hangul (949)", value: 949},
      {text: "Traditional Chinese (950)", value: 950},
      {text: "Windows Cyrillic (1251)", value: 1251},
    ];

    return {
      serverRoles: serverRoles,
      selectedServerRole: 1,
      logDetailOptions: logDetailOptions,
      selectedLogDetailOption: 1,
      codePageOptions: codePageOptions,
      selectedCodePageOption: 437
    }
  }
}
</script>

<style scoped>

</style>
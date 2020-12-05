<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <OpenDirectoryMenu selected-section="Settings" />
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
                    placeholder="Standalone Server"
                    selection
                    :options="roleOptions"
                    v-model="selectedRoleOption"
                />
              </sui-form-field>

              <p>
                This server will store and access authentication
                and contact information locally. It will not provide
                this information to other computers.
              </p>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Protocols">
            <sui-form>
              <sui-form-field inline>
                <label>Configure:</label>
                <sui-dropdown
                    placeholder="LDAP Settings"
                    selection
                    :options="ldapOptions"
                    v-model="selectedLDAPOption"
                />
              </sui-form-field>

              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label>Search Base:</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Database:</label>
                  <input type="text" />
                  <sui-button compact icon="ellipsis horizontal" style="margin-left: 10px;" />
                </sui-form-field>

                <div style="margin-left: 25px;">
                  <sui-form-field inline>
                    <label>Return a maximum of</label>
                    <input type="number" />
                    <span style="margin-left: 10px;">search results</span>
                  </sui-form-field>
                  <sui-form-field inline>
                    <label>Search times out in</label>
                    <input type="number" />
                    <sui-dropdown
                        placeholder=""
                        selection
                        style="margin-left: 10px;"
                    />
                  </sui-form-field>
                </div>
              </div>

              <sui-form-field>
                <sui-checkbox label="Use SSL" />
              </sui-form-field>

              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label>SSL Certificate:</label>
                  <input type="text" />
                  <sui-button compact icon="ellipsis horizontal" style="margin-left: 10px;" />
                </sui-form-field>

                <sui-form-field inline>
                  <label>SSL Key:</label>
                  <input type="text" />
                  <sui-button compact icon="ellipsis horizontal" style="margin-left: 10px;" />
                </sui-form-field>

                <sui-form-field inline>
                  <label>CA Certificate:</label>
                  <input type="text" />
                  <sui-button compact icon="ellipsis horizontal" style="margin-left: 10px;" />
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Authentication">
            <sui-form>
              <p>The global policies you set here can be overridden by use account settings.</p>
              <p>Administrators are exempt from these policies.</p>

              <h4>Disable accounts</h4>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <sui-checkbox label="on" />
                  <input type="date" />
                  <span style="margin-left: 10px;">(yyyy-mm-dd)</span>
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="after" />
                  <input type="number" />
                  <span style="margin-left: 10px;">days</span>
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="after" />
                  <input type="number" />
                  <span style="margin-left: 10px;">days of inactivity</span>
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="after" />
                  <input type="number" />
                  <span style="margin-left: 10px;">failed login attempts</span>
                </sui-form-field>
              </div>

              <h4>Password must</h4>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <sui-checkbox label="be at least" />
                  <input type="number" />
                  <span style="margin-left: 10px;">characters long</span>
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="contain at least one letter" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="contain at least one number character" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="differ from account name" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="differ from the last" />
                  <input type="number" />
                  <span style="margin-left: 10px;">passwords used</span>
                </sui-form-field>
                <sui-form-field inline>
                  <label>Search times out in</label>
                  <input type="number" />
                  <sui-dropdown
                      placeholder=""
                      selection
                      style="margin-left: 10px;"
                  />
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import OpenDirectoryMenu from "@/Modules/OpenDirectory/Components/OpenDirectoryMenu";
export default {
  name: "OpenDirectorySettings",
  components: {OpenDirectoryMenu},
  data() {
    const roleOptions = [];
    const ldapOptions = [];

    return {
      selectedRoleOption: null,
      roleOptions: roleOptions,
      selectedLDAPOption: null,
      ldapOptions: ldapOptions
    }
  }
}
</script>

<style scoped>

</style>
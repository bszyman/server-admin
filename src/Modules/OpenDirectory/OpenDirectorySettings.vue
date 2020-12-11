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

              <div style="margin-left: 50px; margin-bottom: 20px;">
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
                        :options="searchTimeoutOptions"
                        v-model="selectedSearchTimeoutOption"
                    />
                  </sui-form-field>
                </div>
              </div>

              <sui-form-field>
                <sui-checkbox label="Enable Secure Sockets Layer (SSL)" />
              </sui-form-field>

              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label>Certificate:</label>
                  <sui-dropdown
                      placeholder=""
                      selection
                      style="margin-left: 10px;"
                      :options="sslConfigurationOptions"
                      v-model="sslConfigurationSelectedOption"
                  />
                  <sui-button compact icon="pencil" style="margin-left: 10px;" />
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Authentication">
            <sui-tab :menu="{ secondary: true }">
              <sui-tab-pane title="Passwords" :attached="false">
                <sui-form>
                  <h4>Disable login:</h4>
                  <div style="margin-left: 50px;">
                    <sui-form-field inline>
                      <sui-checkbox label="on specific date" />
                      <input type="date" />
                      <span style="margin-left: 10px;">(yyyy-mm-dd)</span>
                    </sui-form-field>
                    <sui-form-field inline>
                      <sui-checkbox label="after using it for" />
                      <input type="number" />
                      <span style="margin-left: 10px;">days</span>
                    </sui-form-field>
                    <sui-form-field inline>
                      <sui-checkbox label="after inactive for" />
                      <input type="number" />
                      <span style="margin-left: 10px;">days</span>
                    </sui-form-field>
                    <sui-form-field inline>
                      <sui-checkbox label="after user makes" />
                      <input type="number" />
                      <span style="margin-left: 10px;">failed attempts</span>
                    </sui-form-field>
                  </div>

                  <h4>Password must</h4>
                  <div style="margin-left: 50px;">
                    <sui-form-field inline>
                      <sui-checkbox label="differ from account name" />
                    </sui-form-field>
                    <sui-form-field inline>
                      <sui-checkbox label="contain at least one letter" />
                    </sui-form-field>
                    <sui-form-field inline>
                      <sui-checkbox label="contain at least one number character" />
                    </sui-form-field>
                    <sui-form-field inline>
                      <sui-checkbox label="be reset on first user login" />
                    </sui-form-field>
                    <sui-form-field inline>
                      <sui-checkbox label="contain at least" />
                      <input type="number" />
                      <span style="margin-left: 10px;">characters</span>
                    </sui-form-field>
                    <sui-form-field inline>
                      <sui-checkbox label="differ from last" />
                      <input type="number" />
                      <span style="margin-left: 10px;">passwords used</span>
                    </sui-form-field>
                    <sui-form-field inline>
                      <label>be reset every</label>
                      <input type="number" />
                      <sui-dropdown
                          placeholder="Standalone Server"
                          selection
                          :options="searchTimeoutOptions"
                          v-model="selectedResetPeriod"
                          style="margin-left: 10px;"
                      />
                    </sui-form-field>

                    <p>User account settings may override global policies.</p>
                    <p>Administrators are exempt.</p>
                  </div>
                </sui-form>
              </sui-tab-pane>
              <sui-tab-pane title="Binding" :attached="false">
                <sui-form>
                  <h4>Directory Binding</h4>
                  <sui-form-field>
                    <sui-checkbox label="Enable directory binding" />
                  </sui-form-field>
                  <div style="margin-left: 50px;">
                    <sui-form-field>
                      <sui-checkbox label="Require clients to bind to directory" />
                    </sui-form-field>
                  </div>

                  <h4>Security</h4>
                  <sui-form-field>
                    <sui-checkbox label="Disable clear text passwords" />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox label="Digitally sign all packets (requires Kerberos)" />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox label="Encrypt all packets (require SSL or Kerberos)" />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox label="Block man-in-the-middle attacks (requires Kerberos)" />
                  </sui-form-field>
                </sui-form>
              </sui-tab-pane>
              <sui-tab-pane title="Security" :attached="false">
                <sui-form>
                  <p>
                    Please select the authentication methods for services that use this
                    server's directory domain.
                  </p>
                  <h4>Hash Methods</h4>
                  <div style="margin-left: 50px;">
                    <p>
                      These methods store passwords in forms more difficult for
                      attackers to decode.
                    </p>
                    <sui-form-field>
                      <sui-checkbox label="NTLMv1 and NTLMv2 (clients usign Windows NT/98 or later)" />
                    </sui-form-field>
                    <sui-form-field>
                      <sui-checkbox label="LAN Manager (Windows 95 clients)" />
                    </sui-form-field>
                    <sui-form-field>
                      <sui-checkbox label="MS-CHAPv2 (VPN service clients)" />
                    </sui-form-field>
                  </div>

                  <h4>Recoverable Authentication Methods</h4>
                  <div style="margin-left: 50px;">
                    <p>
                      These methods store passwords in forms an attacker could decode
                      after gaining direct access to the server's password database.
                    </p>
                    <sui-form-field>
                      <sui-checkbox label="WebDAV-Digest (web service clients)" />
                    </sui-form-field>
                    <sui-form-field>
                      <sui-checkbox label="APOP (POP3 mail service clients)" />
                    </sui-form-field>
                  </div>
                </sui-form>
              </sui-tab-pane>
            </sui-tab>
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
    const roleOptions = [
      {key:1, text: "Standalone Server", value: 1},
      {key:2, text: "Connected to a Directory System", value: 2},
      {key:3, text: "Open Directory Replica", value: 3},
      {key:4, text: "Open Directory Master", value: 4},
    ];
    const ldapOptions = [
      {key:1, text: "LDAP Settings", value: 1},
      {key:2, text: "NetInfo Migration", value: 2},
    ];
    const searchTimeoutOptions = [
      {key:1, text: "Hours", value: 1},
    ];
    const sslConfigurationOptions = [
      {key:1, text: "Custom Configuration", value: 1},
    ];

    return {
      selectedRoleOption: 1,
      roleOptions: roleOptions,
      selectedLDAPOption: 1,
      ldapOptions: ldapOptions,
      searchTimeoutOptions: searchTimeoutOptions,
      selectedSearchTimeoutOption: 1,
      selectedResetPeriod: 1,
      sslConfigurationOptions: sslConfigurationOptions,
      sslConfigurationSelectedOption: 1
    }
  }
}
</script>

<style scoped>

</style>
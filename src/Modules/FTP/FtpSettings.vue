<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FtpMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
            <h4>General</h4>
            <div style="margin-left: 50px;">
              <sui-form-field inline>
                <label for="disconnect-client-after">Disconnect Client After</label>
                <input id="disconnect-client-after" type="number">
                <span style="margin-left: 10px;">login failures</span>
              </sui-form-field>
              <sui-form-field inline>
                <label for="ftp-admin-email">FTP administrator email address</label>
                <input id="ftp-admin-email" type="email">
              </sui-form-field>
            </div>

            <h4>Access</h4>
            <div style="margin-left: 50px;">
              <sui-form-field inline>
                <label for="authentication-option">Authentication:</label>
                <sui-dropdown
                    id="authentication-option"
                    placeholder="Authentication Method"
                    selection
                    :options="authTypes"
                    v-model="selectedAuthType"
                />
              </sui-form-field>
              <sui-form-field inline>
                <label for="max-auth-user">Allow a maximum of</label>
                <input id="max-auth-user" type="number">
                <span style="margin-left: 10px;">authenticated users</span>
              </sui-form-field>
              <sui-form-field inline>
                <label for="ftp-admin-email">FTP administrator email address</label>
                <input id="ftp-admin-email" type="email">
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Enable anonymous access"/>
              </sui-form-field>
              <div style="margin-left: 25px;">
                <sui-form-field inline>
                  <label for="max-anon-user">Allow a maximum of</label>
                  <input id="max-anon-user" type="number">
                  <span style="margin-left: 10px;">anonymous users</span>
                </sui-form-field>
              </div>
            </div>
              <h4>File Conversion</h4>
              <div style="margin-left: 50px;">
                <sui-form>
                  <sui-form-field inline>
                    <sui-checkbox label="Enable MacBinary and disk image and auto-" />
                  </sui-form-field>
                </sui-form>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Messages">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Show Welcome Message" />
              </sui-form-field>
              <sui-form-field>
                <textarea>
                  -------------------------------------------------------------------------------
This is the "Welcome" message for the Mac OS X Server's FTP server process.

FTP clients will receive this message right after a successful log in.

-------------------------------------------------------------------------------
                </textarea>
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Show Banner Message" />
              </sui-form-field>
              <sui-form-field>
                <textarea>
                 -------------------------------------------------------------------------------
This is the "Banner" message for the Mac OS X Server's FTP server process.

		FTP clients will receive this message immediately
		before being prompted for a name and password.

PLEASE NOTE:

Some FTP clients may exhibit problems if you make this file too long.

-------------------------------------------------------------------------------
                </textarea>
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <h4>Log Authenticated Users</h4>
              <sui-table>
                <sui-table-body>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Uploads" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="FTP Commands" />
                    </sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Downloads" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="Rule Violoation Attempts" />
                    </sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>

              <h4>Log Anonymous Users</h4>
              <sui-table>
                <sui-table-body>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Uploads" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="FTP Commands" />
                    </sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-checkbox label="Downloads" />
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-checkbox label="Rule Violoation Attempts" />
                    </sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Advanced">
            <sui-form>
              <sui-form-field inline>
                <label for="authenticated-users-see">Authenticated Users See:</label>
                <sui-dropdown
                    id="authenticated-users-see"
                    placeholder="Authentication Method"
                    selection
                    :options="authFSRestrictions"
                    v-model="selectedAuthFSRestrictions"
                />
              </sui-form-field>
              <sui-form-field inline>
                <label for="ftp-root">Authenticated User FTP Root:</label>
                <input id="ftp-root" type="text" />
                <sui-button
                    type="button"
                    icon="ellipsis horizontal"
                    size="small"
                    style="margin-left: 10px;"
                />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FtpMenu from "@/Modules/FTP/Components/FtpMenu";
export default {
  name: "FtpSettings",
  components: {FtpMenu},
  data() {
    let authTypes = [
      { text: "Standard", value: 1 },
      { text: "Kerberos", value: 2 },
      { text: "Any Method", value: 3 }
    ];

    let authFSRestrictions = [
      { text: "FTP Root and Share Points", value: 1 },
      { text: "Home Directory with Share Points", value: 2 },
      { text: "Home Directory Only", value: 3 }
    ];

    return {
      authTypes: authTypes,
      selectedAuthType: 3,
      authFSRestrictions: authFSRestrictions,
      selectedAuthFSRestrictions: 1
    }
  }
}
</script>

<style scoped>

</style>
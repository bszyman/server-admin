<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <MailMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <h4>Sending</h4>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Enable SMTP" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Relay all mail through this host:" />
                </sui-form-field>
                <div style="margin-left: 25px;">
                  <input type="text" />
                </div>
              </div>

              <h4>Receiving</h4>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Enable IMAP" />
                </sui-form-field>
                <div style="margin-left: 25px;">
                  <div style="margin-left: 25px;">
                    <sui-form-field inline style="margin-bottom: 10px;">
                      <label for="max-imap">Allow up to</label>
                      <input id="max-imap" type="number" value="1000" />
                      <span style="margin-left: 10px;">IMAP connections</span>
                    </sui-form-field>
                  </div>
                </div>
                <sui-form-field>
                  <sui-checkbox label="Enable POP" />
                </sui-form-field>
              </div>

              <h4>Copies (bcc)</h4>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Copy undeliverable messages to:" />
                </sui-form-field>
                <div style="margin-left: 25px; margin-bottom: 10px;">
                  <sui-form-field>
                    <input type="text" />
                  </sui-form-field>
                </div>
                <sui-form-field>
                  <sui-checkbox label="Copy incoming and outgoing messages to:" />
                </sui-form-field>
                <div style="margin-left: 25px; margin-bottom: 10px;">
                  <sui-form-field>
                    <input type="text" />
                  </sui-form-field>
                </div>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Mailing Lists">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable mailing lists" />
              </sui-form-field>

                <sui-grid :columns="2">
                  <sui-grid-row>
                    <sui-grid-column>
                      <h4>Lists</h4>
                      <sui-segment></sui-segment>
                      <div is="sui-button-group" style="margin-bottom: 15px;">
                        <sui-button icon="plus" compact />
                        <sui-button icon="minus" compact />
                        <sui-button icon="pencil alternate" compact />
                      </div>
                    </sui-grid-column>
                    <sui-grid-column>
                      <h4>Members</h4>
                      <sui-segment></sui-segment>

                      <div class="controlBar">
                        <div>
                          <div is="sui-button-group" style="margin-bottom: 15px;">
                            <sui-button icon="plus" compact />
                            <sui-button icon="minus" compact />
                          </div>
                        </div>
                        <div>
                          <sui-button>Users &amp; Groups</sui-button>
                        </div>
                      </div>
                    </sui-grid-column>
                  </sui-grid-row>
                </sui-grid>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Filters">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Accept SMTP relays only from these hosts and networks:" />
              </sui-form-field>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>

              <sui-form-field>
                <sui-checkbox label="Refuse all messages from these hosts and networks:" />
              </sui-form-field>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>

              <sui-form-field>
                <sui-checkbox label="Refuse all messages from tehse hosts and networks:" />
              </sui-form-field>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>

              <sui-form-fields inline>
                <sui-form-field>
                  <sui-checkbox label="Refuse incoming messages larger than" />
                  <input type="number">
                  <span style="margin-left: 10px;">messages</span>
                </sui-form-field>
              </sui-form-fields>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-form-field inline>
                <label for="smtp-log-level">SMTP log detail level:</label>
                <sui-dropdown
                    id="smtp-log-level"
                    placeholder="Select Level"
                    selection
                    :options="smtpLogDetailOptions"
                    v-model="selectedSMTPLogDetailLevel"
                />
              </sui-form-field>
              <sui-form-field inline>
                <label for="imappop-log-level">IMAP/POP log detail level:</label>
                <sui-dropdown
                    id="imappop-log-level"
                    placeholder="Select Level"
                    selection
                    :options="imappopLogDetailOptions"
                    v-model="selectedIMAPPOPLogDetailLevel"
                />
              </sui-form-field>

              <sui-form-fields inline>
                <sui-form-field>
                  <sui-checkbox label="Archive log every" />
                  <input type="number">
                  <span style="margin-left: 10px;">day(s)</span>
                </sui-form-field>
              </sui-form-fields>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Advanced">
            <sui-form>
              <h4>Local Host Aliases</h4>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>

              <sui-form-field inline>
                <label for="mail-store">Mail store:</label>
                <input id="mail-store" type="text" />
                <sui-button
                    compact
                    type="button"
                    icon="ellipsis horizontal"
                    size="small"
                    style="margin-left: 10px;"
                />
              </sui-form-field>

              <h4>Authentication</h4>

              <sui-table compact celled>
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>SMTP</sui-table-header-cell>
                    <sui-table-header-cell>IMAP</sui-table-header-cell>
                    <sui-table-header-cell>POP</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="Kerberos" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="Kerberos" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="Kerberos" />
                      </sui-form-field>
                    </sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="CRAM-MD5" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="CRAM-MD5" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="APOP" />
                      </sui-form-field>
                    </sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="Login" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="Login" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="PLAIN" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="PLAIN" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                  </sui-table-row>
                  <sui-table-row>
                    <sui-table-cell></sui-table-cell>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="Clear" />
                      </sui-form-field>
                    </sui-table-cell>
                    <sui-table-cell>
                      <sui-form-field>
                        <sui-checkbox label="Clear" />
                      </sui-form-field>
                    </sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>

              <sui-form-field inline>
                <label for="smtp-ssl">SMTP SSL:</label>
                <sui-dropdown
                    id="smtp-ssl"
                    placeholder="Select Level"
                    selection
                    :options="smtpSSLOptions"
                    v-model="selectedSMTPSSLOptions"
                />
              </sui-form-field>
              <sui-form-field inline>
                <label for="imappop-ssl">IMAP and POP SSL:</label>
                <sui-dropdown
                    id="imappop-ssl"
                    placeholder="Select Level"
                    selection
                    :options="imappopSSLOptions"
                    v-model="selectedIMAPPOPSSLOptions"
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
import MailMenu from "@/Modules/Mail/Components/MailMenu";
export default {
  name: "MailSettings",
  components: {MailMenu},
  data() {
    const smtpLogDetailOptions = [];
    const imappopLogDetailOptions = [];
    const smtpSSLOptions = [];
    const imappopSSLOptions = [];

    return {
      selectedSMTPLogDetailLevel: null,
      smtpLogDetailOptions: smtpLogDetailOptions,
      selectedIMAPPOPLogDetailLevel: null,
      imappopLogDetailOptions: imappopLogDetailOptions,
      selectedSMTPSSL: null,
      smtpSSLOptions: smtpSSLOptions,
      selectedIMAPPOPSSL: null,
      imappopSSLOptions: imappopSSLOptions
    }
  }
}
</script>

<style scoped>

</style>
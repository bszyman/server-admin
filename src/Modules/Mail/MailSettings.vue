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
              <sui-form-field>
                <sui-checkbox label="Enable POP" />
              </sui-form-field>
              <sui-form-field inline>
                <sui-checkbox label="Enable IMAP with a maximum of" />
                <input type="number" />
                <span style="margin-left: 10px;">connections</span>
              </sui-form-field>
              <div style="margin-left: 50px; margin-bottom: 20px;">
                <sui-form-field>
                  <sui-checkbox label="Deliver to '/var/mail' when POP & IMAP are disabled" />
                </sui-form-field>
              </div>

              <sui-form-field>
                <sui-checkbox label="Enable SMTP" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Allow incoming mail" />
                </sui-form-field>

                <sui-table basic="very" compact>
                  <sui-table-body>
                    <sui-table-row>
                      <sui-table-cell text-align="right"><label>Domain name:</label></sui-table-cell>
                      <sui-table-cell><input /> <p>Enter the local internet domain name.</p></sui-table-cell>
                    </sui-table-row>
                    <sui-table-row>
                      <sui-table-cell text-align="right"><label>Host name:</label></sui-table-cell>
                      <sui-table-cell><input /> <p>Enter the internet host name of this mail system.</p></sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>

                <sui-form-field>
                  <sui-checkbox label="Hold outgoing mail" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="Relay outgoing mail through host:" />
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="Copy undeliverable mail to:" />
                  <input type="email" />
                </sui-form-field>
                <sui-form-field inline>
                  <sui-checkbox label="Copy all mail to:" />
                  <input type="email" />
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Relay">
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
                <sui-checkbox label="Use these junk mail rejection servers (real-time blacklist):" />
              </sui-form-field>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Filters">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Scan email for junk mail" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label>Minimum junk mail score:</label>
                  <input type="range" max="5" value="2" />
                  <input type="number" style="margin-left: 10px;" />
                  <span style="margin-left: 10px;">Hits</span>
                </sui-form-field>
                <sui-form-fields>
                  <sui-form-field inline>
                    <label>Accepted languages:</label>
                    <input type="text" />
                  </sui-form-field>
                  <sui-form-field inline>
                    <label>Locales:</label>
                    <input type="text" />
                  </sui-form-field>
                </sui-form-fields>
                <sui-form-field inline>
                  <label for="junk-mail-actions">Junk mail messages should be:</label>
                  <sui-dropdown
                      id="junk-mail-actions"
                      placeholder="Select Action"
                      selection
                      :options="junkMailActions"
                      v-model="selectedJunkMailAction"
                  />
                </sui-form-field>
                <div style="margin-left:25px;">
                  <sui-form-field inline>
                    <sui-checkbox label="Attach subject tag:" />
                    <input type="text" />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox label="Encapsulate junk mail as MIME attachment" />
                  </sui-form-field>
                </div>
              </div>

              <sui-form-field style="margin-top: 30px;">
                <sui-checkbox label="Scan email for viruses" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label for="infected-mail-actions">Infected messages should be:</label>
                  <sui-dropdown
                      id="infected-mail-actions"
                      placeholder="Select Action"
                      selection
                      :options="infectedMailActions"
                      v-model="selectedInfectedMailAction"
                  />
                </sui-form-field>
                <div style="margin-left:25px;">
                  <sui-form-field inline>
                    <sui-checkbox label="Send notification to:" />
                    <input type="email" />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox label="Notify recipients" />
                  </sui-form-field>
                </div>
              </div>

              <sui-form-field style="margin-top: 30px;" inline>
                <sui-checkbox label="Update the Junk mail and virus database" />
                <input type="number">
                <span style="margin-left: 10px;">time(s) every day.</span>
              </sui-form-field>
              <div style="margin-left: 50px;">
                <p>Last Update: Sunday, July 2, 2006</p>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Quotas">
            <sui-form>
              <sui-form-field inline>
                <sui-checkbox label="Refuse incoming messages larger than" />
                <input type="number">
                <span style="margin-left: 10px;">megabytes</span>
              </sui-form-field>

              <sui-form-field>
                <sui-checkbox label="Disable a user's incoming mail when they exceed 100% of quota" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <label>Over quota error message:</label>
                  <input type="text" /> <sui-button icon="alternate pencil" />
                </sui-form-field>
              </div>

              <sui-form-field>
                <sui-checkbox label="Enable quota warnings" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <label>Quota warning message:</label>
                  <input type="text" /> <sui-button icon="alternate pencil" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Send quota warnings when usage exceeds</label>
                  <input type="number">
                  <span style="margin-left: 10px;">%</span>
                </sui-form-field>
                <sui-form-field inline>
                  <label>Send quota warning every</label>
                  <input type="number">
                  <span style="margin-left: 10px;">days</span>
                </sui-form-field>
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
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-segment>
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
                <p>All messages will be logged. This is used to help debug your server setup.</p>
              </sui-segment>

              <sui-segment>
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
                <p>Critical errors which probably require prompt administrator action.</p>
              </sui-segment>

              <sui-segment>
                <sui-form-field inline>
                  <label for="junk-virus-log-level">Junk Mail/Virus log detail level:</label>
                  <sui-dropdown
                      id="junk-virus-log-level"
                      placeholder="Select Level"
                      selection
                      :options="junkVirusLogDetailOptions"
                      v-model="selectedJunkVirusLogDetailLevel"
                  />
                </sui-form-field>
                <p>Reports virus scanner output.</p>
              </sui-segment>


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
            <sui-tab :menu="{ secondary: true }">
              <sui-tab-pane title="Security">
                <sui-form>
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

                  <h4>Secure Sockets Layer (SSL)</h4>
                  <sui-table compact basic>
                    <sui-table-body>
                      <sui-table-row>
                        <sui-table-cell text-align="right">
                          <label for="smtp-ssl">SMTP SSL:</label>
                        </sui-table-cell>
                        <sui-table-cell>
                          <sui-dropdown
                              id="smtp-ssl"
                              placeholder="Select Rule"
                              selection
                              :options="smtpSSLOptions"
                              v-model="selectedSMTPSSL"
                          />
                        </sui-table-cell>
                        <sui-table-cell>
                          <sui-dropdown
                              placeholder="Select Configuration"
                              selection
                              :options="smtpSSLConfigurationOptions"
                              v-model="selectedSMTPSSLConfiguration"
                          />
                        </sui-table-cell>
                        <sui-table-cell>
                          <sui-button icon="alternate pencil" />
                        </sui-table-cell>
                      </sui-table-row>
                      <sui-table-row>
                        <sui-table-cell text-align="right">
                          <label for="imappop-ssl">IMAP and POP SSL:</label>
                        </sui-table-cell>
                        <sui-table-cell>
                          <sui-dropdown
                              id="imappop-ssl"
                              placeholder="Select Rule"
                              selection
                              :options="imappopSSLOptions"
                              v-model="selectedIMAPPOPSSL"
                          />
                        </sui-table-cell>
                        <sui-table-cell>
                          <sui-dropdown
                              placeholder="Select Configuration"
                              selection
                              :options="imappopSSLConfigurationOptions"
                              v-model="selectedIMAPPOPSSLConfiguration"
                          />
                        </sui-table-cell>
                        <sui-table-cell>
                          <sui-button icon="alternate pencil" />
                        </sui-table-cell>
                      </sui-table-row>
                    </sui-table-body>
                  </sui-table>
                </sui-form>
              </sui-tab-pane>
              <sui-tab-pane title="Hosting">
                <sui-form>
                  <div class="table-container" style="height: 225px;">
                    <sui-table compact selectable padded basic="very">
                      <sui-table-header>
                        <sui-table-row>
                          <sui-table-header-cell>Local Host Aliases</sui-table-header-cell>
                        </sui-table-row>
                      </sui-table-header>
                      <sui-table-body>
                        <sui-table-row v-for="alias in aliases" :key="alias.id">
                          <sui-table-cell>{{ alias.name }}</sui-table-cell>
                        </sui-table-row>
                      </sui-table-body>
                    </sui-table>
                  </div>
                  <div is="sui-button-group" style="margin-bottom: 15px;">
                    <sui-button icon="plus" compact />
                    <sui-button icon="minus" compact />
                    <sui-button icon="pencil alternate" compact />
                  </div>

                  <sui-form-field>
                    <sui-checkbox label="Enable virtual hosting" />
                  </sui-form-field>
                  <div class="table-container" style="height: 225px;">
                    <sui-table compact selectable padded basic="very">
                      <sui-table-header>
                        <sui-table-row>
                          <sui-table-header-cell>Locally Hosted Virtual Domains</sui-table-header-cell>
                        </sui-table-row>
                      </sui-table-header>
                      <sui-table-body>
                        <sui-table-row v-for="domain in domains" :key="domain.id">
                          <sui-table-cell>{{ domain.name }}</sui-table-cell>
                        </sui-table-row>
                      </sui-table-body>
                    </sui-table>
                  </div>
                  <div is="sui-button-group" style="margin-bottom: 15px;">
                    <sui-button icon="plus" compact />
                    <sui-button icon="minus" compact />
                    <sui-button icon="pencil alternate" compact />
                  </div>
                </sui-form>
              </sui-tab-pane>
              <sui-tab-pane title="Database">
                <sui-form>
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
                  <sui-form-field inline>
                    <label for="mail-store-location">Mail store location:</label>
                    <input id="mail-store-location" type="text" />
                    <sui-button
                        compact
                        type="button"
                        icon="ellipsis horizontal"
                        size="small"
                        style="margin-left: 10px;"
                    />
                  </sui-form-field>

                  <h4>Additional Mail Stores</h4>
                  <p>
                    Different mailboxes can be stored in different
                    parts of the file system.
                  </p>
                  <p>
                    Assign partition names for individual users with
                    Workgroup Manager.
                  </p>

                  <div class="table-container" style="height: 225px;">
                    <sui-table compact selectable padded basic="very">
                      <sui-table-header>
                        <sui-table-row>
                          <sui-table-header-cell>Partition Name</sui-table-header-cell>
                          <sui-table-header-cell>Partition Location</sui-table-header-cell>
                        </sui-table-row>
                      </sui-table-header>
                      <sui-table-body>
                        <sui-table-row v-for="partition in partitions" :key="partition.id">
                          <sui-table-cell>{{ partition.name }}</sui-table-cell>
                          <sui-table-cell>{{ partition.location }}</sui-table-cell>
                        </sui-table-row>
                      </sui-table-body>
                    </sui-table>
                  </div>

                  <div is="sui-button-group" style="margin-bottom: 15px;">
                    <sui-button icon="plus" compact />
                    <sui-button icon="minus" compact />
                    <sui-button icon="pencil alternate" compact />
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
import MailMenu from "@/Modules/Mail/Components/MailMenu";
export default {
  name: "MailSettings",
  components: {MailMenu},
  data() {
    const smtpLogDetailOptions = [
      {key: 1, text: "Critical", value: 1},
      {key: 2, text: "Error", value: 2},
      {key: 3, text: "Warning", value: 3},
      {key: 4, text: "Notice", value: 4},
      {key: 5, text: "Information", value: 5},
      {key: 6, text: "Debug", value: 6},
    ];
    const imappopLogDetailOptions = [
      {key: 1, text: "Critical", value: 1},
      {key: 2, text: "Error", value: 2},
      {key: 3, text: "Warning", value: 3},
      {key: 4, text: "Notice", value: 4},
      {key: 5, text: "Information", value: 5},
      {key: 6, text: "Debug", value: 6},
    ];
    const junkVirusLogDetailOptions = [
      {key: 1, text: "Critical", value: 1},
      {key: 2, text: "Error", value: 2},
      {key: 3, text: "Warning", value: 3},
      {key: 4, text: "Notice", value: 4},
      {key: 5, text: "Information", value: 5},
      {key: 6, text: "Debug", value: 6},
    ];
    const smtpSSLOptions = [
      {key: 1, text: "Don't Use", value: 1},
      {key: 2, text: "Use", value: 2},
      {key: 3, text: "Require", value: 3},
    ];
    const imappopSSLOptions = [
      {key: 1, text: "Don't Use", value: 1},
      {key: 2, text: "Use", value: 2},
      {key: 3, text: "Require", value: 3},
    ];
    const smtpSSLConfigurationOptions = [];
    const imappopSSLConfigurationOptions = [];
    const junkMailActions = [{key: 1, value: 1, text: "Delivered"}];
    const infectedMailActions = [{key: 1, value: 1, text: "Delivered"}];

    const aliases = [
      {id: 1, name: "localhost"}
    ];

    const domains = [];
    const partitions = [];

    return {
      selectedSMTPLogDetailLevel: 6,
      smtpLogDetailOptions: smtpLogDetailOptions,
      selectedIMAPPOPLogDetailLevel: 1,
      imappopLogDetailOptions: imappopLogDetailOptions,
      selectedSMTPSSL: 1,
      smtpSSLOptions: smtpSSLOptions,
      selectedIMAPPOPSSL: 1,
      imappopSSLOptions: imappopSSLOptions,
      junkMailActions: junkMailActions,
      selectedJunkMailAction: 1,
      infectedMailActions: infectedMailActions,
      selectedInfectedMailAction: 1,
      junkVirusLogDetailOptions: junkVirusLogDetailOptions,
      selectedJunkVirusLogDetailLevel: 3,
      smtpSSLConfigurationOptions: smtpSSLConfigurationOptions,
      selectedSMTPSSLConfiguration: null,
      imappopSSLConfigurationOptions: imappopSSLConfigurationOptions,
      selectedIMAPPOPSSLConfiguration: null,
      aliases: aliases,
      domains: domains,
      partitions: partitions
    }
  }
}
</script>

<style scoped>

</style>
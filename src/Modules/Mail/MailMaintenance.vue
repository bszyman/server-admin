<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <MailMenu selected-section="Maintenance" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="Accounts">
            <div class="table-container" style="height: 375px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Username</sui-table-header-cell>
                    <sui-table-header-cell>Mail Store</sui-table-header-cell>
                    <sui-table-header-cell>Mail Quota (MB)</sui-table-header-cell>
                    <sui-table-header-cell>Quota Used</sui-table-header-cell>
                    <sui-table-header-cell>% Free</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="connection in connections" :key="connection.id">
                    <sui-table-cell>{{ connection.username }}</sui-table-cell>
                    <sui-table-cell>{{ connection.mailStore }}</sui-table-cell>
                    <sui-table-cell>{{ connection.mailQuota }}</sui-table-cell>
                    <sui-table-cell>{{ connection.quotaUsed }}</sui-table-cell>
                    <sui-table-cell>{{ connection.percentFree }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <sui-segment>
              <h4>Status</h4>
            </sui-segment>
            <div class="controlBar">
              <div>
                <p>Number of accounts: 0</p>
              </div>
              <div>
                <sui-button>Reconstruct</sui-button>
              </div>
            </div>
          </sui-tab-pane>
          <sui-tab-pane title="Database">
            <sui-table>
              <sui-table-body>
                <sui-table-row>
                  <sui-table-cell :width="4" text-align="right">Database location:</sui-table-cell>
                  <sui-table-cell>/var/imap</sui-table-cell>
                </sui-table-row>
                <sui-table-row>
                  <sui-table-cell :width="4" text-align="right">Size:</sui-table-cell>
                  <sui-table-cell>18.57 MB</sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>

            <sui-table>
              <sui-table-body>
                <sui-table-row>
                  <sui-table-cell :width="4" text-align="right">Mail store location:</sui-table-cell>
                  <sui-table-cell>/var/spool/imap</sui-table-cell>
                </sui-table-row>
                <sui-table-row>
                  <sui-table-cell :width="4" text-align="right">Size:</sui-table-cell>
                  <sui-table-cell>0.0 B</sui-table-cell>
                </sui-table-row>
              </sui-table-body>
            </sui-table>

            <h4>Additional mail store location(s):</h4>

            <div class="table-container" style="height: 275px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Partition Name</sui-table-header-cell>
                    <sui-table-header-cell>Partition Path</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="partition in partitions" :key="partition.id">
                    <sui-table-cell>{{ partition.name }}</sui-table-cell>
                    <sui-table-cell>{{ partition.path }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <div class="controlBar">
              <div></div>
              <div>
                <sui-button>Repair</sui-button>
              </div>
            </div>
          </sui-tab-pane>
          <sui-tab-pane title="Mail Queue">
            <div class="table-container" style="height: 375px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Message ID</sui-table-header-cell>
                    <sui-table-header-cell>Recipient(s)</sui-table-header-cell>
                    <sui-table-header-cell>Sender</sui-table-header-cell>
                    <sui-table-header-cell>Date</sui-table-header-cell>
                    <sui-table-header-cell>Size</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="message in messages" :key="message.id">
                    <sui-table-cell>{{ message.id }}</sui-table-cell>
                    <sui-table-cell>{{ message.recipients }}</sui-table-cell>
                    <sui-table-cell>{{ message.message_sender }}</sui-table-cell>
                    <sui-table-cell>{{ message.date }}</sui-table-cell>
                    <sui-table-cell>{{ message.size }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <sui-segment>
              <h4>Message Details</h4>
            </sui-segment>
            <div class="controlBar">
              <div>
                <p>Number of messages: 0</p>
              </div>
              <div>
                <sui-button>Delete</sui-button>
                <sui-button>Retry</sui-button>
              </div>
            </div>
          </sui-tab-pane>
          <sui-tab-pane title="Migration">
            <sui-form>
              <sui-form-field inline>
                <label for="log-path">10.1 or 10.2 mail database location:</label>
                <input id="log-path" type="text" />
                <sui-button
                    type="button"
                    icon="ellipsis horizontal"
                    size="small"
                    style="margin-left: 10px;"
                />
              </sui-form-field>
            </sui-form>

            <div class="table-container" style="margin-top: 20px; height: 375px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell>Name</sui-table-header-cell>
                    <sui-table-header-cell>Account</sui-table-header-cell>
                    <sui-table-header-cell>Messages</sui-table-header-cell>
                    <sui-table-header-cell>Size</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="account in accounts" :key="account.id">
                    <sui-table-cell>{{ account.name }}</sui-table-cell>
                    <sui-table-cell>{{ account.account }}</sui-table-cell>
                    <sui-table-cell>{{ account.messages }}</sui-table-cell>
                    <sui-table-cell>{{ account.size }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

            <sui-segment>
              <h4>Status</h4>
            </sui-segment>
            <div class="controlBar">
              <div>
                <p>Number of accounts: 0</p>
              </div>
              <div>
                <sui-button>Migrate All</sui-button>
                <sui-button>Migrate User</sui-button>
              </div>
            </div>
          </sui-tab-pane>
        </sui-tab>

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import MailMenu from "@/Modules/Mail/Components/MailMenu";
export default {
  name: "MailAccounts",
  components: {MailMenu},
  data() {
    return {
      partitions: [],
      messages: [],
      accounts: []
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ServerOverviewMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-fields grouped>
                <label for="protocols">Protocols</label>
                <sui-form-field>
                  <sui-checkbox name="protocols" label="NTP" value="1" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox name="protocols" label="SNMP" value="2" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox name="protocols" label="SSH (required while creating an Open Directory replica)" value="3" />
                </sui-form-field>
              </sui-form-fields>
              <sui-form-field>
                <label>Serial Number</label>
                <input />
              </sui-form-field>
              <p>Unlimited-client license.</p>
              <sui-form-field>
                <label>Computer Name</label>
                <input />
              </sui-form-field>
              <sui-form-field>
                <label>Rendezvous Name</label>
                <input value="Cocos" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Network">
            <sui-form>
              <sui-form-field>
                <label>Computer Name</label>
                <input type="text" />
              </sui-form-field>
              <sui-form-field>
                <label>Local Hostname</label>
                <input type="text" />
              </sui-form-field>
              <p>
                Computer on the server's local subnet will be able to
                reach it at: Cocos.local.
              </p>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Date & Time">
            <sui-tab :menu="{ secondary: true }">
              <sui-tab-pane title="Date & Time">
                <sui-form>
                  <sui-form-field>
                    <sui-checkbox
                        radio
                        name="timezone"
                        label="Use network time server"
                        v-model="dateTimeNTPSetting"
                        value="1"
                    />
                  </sui-form-field>
                  <sui-form-field inline>
                    <label>NTP Server:</label>
                    <sui-dropdown
                        placeholder="Closest City"
                        selection
                        search
                        :options="ntpServers"
                        v-model="selectedNTPServer"
                    />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox
                        radio
                        name="timezone"
                        label="Set time manually"
                        v-model="dateTimeNTPSetting"
                        value="2"
                    />
                  </sui-form-field>
                  <sui-form-fields fields="two">
                    <sui-form-field>
                      <label>Server Date</label>
                      <input type="date" />
                    </sui-form-field>
                    <sui-form-field>
                      <label>Server Time</label>
                      <input type="time" />
                    </sui-form-field>
                  </sui-form-fields>
                </sui-form>
              </sui-tab-pane>
              <sui-tab-pane title="Timezone">
                <p style="text-align: center;">Click your part of the world, then choose a city from the pop-up menu.</p>
                <sui-segment></sui-segment>
                <sui-table compact basic="very">
                  <sui-table-body>
                    <sui-table-row>
                      <sui-table-cell text-align="right">Timezone:</sui-table-cell>
                      <sui-table-cell>EDT</sui-table-cell>
                    </sui-table-row>
                    <sui-table-row>
                      <sui-table-cell text-align="right">Closest City:</sui-table-cell>
                      <sui-table-cell>
                        <sui-dropdown
                            placeholder="Closest City"
                            selection
                            search
                            :options="cities"
                            v-model="selectedCity"
                        />
                      </sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </sui-tab-pane>
            </sui-tab>
          </sui-tab-pane>
          <sui-tab-pane title="Certificates">
            <div class="table-container" style="height: 525px;">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell :width="4">Name</sui-table-header-cell>
                    <sui-table-header-cell :width="4">Valid From</sui-table-header-cell>
                    <sui-table-header-cell :width="4">Expires On</sui-table-header-cell>
                    <sui-table-header-cell :width="4">Authority</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="c in certificates" :key="c.id">
                    <sui-table-cell :width="4">{{ c.name }}</sui-table-cell>
                    <sui-table-cell :width="4">{{ c.valid_from }}</sui-table-cell>
                    <sui-table-cell :width="4">{{ c.expires_on }}</sui-table-cell>
                    <sui-table-cell :width="4">{{ c.authority }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>
            <div is="sui-button-group" style="margin-bottom: 15px;">
              <sui-button icon="plus" compact @click="editCertificate" />
              <sui-button icon="minus" compact />
              <sui-button icon="pencil alternate" compact @click="editCertificate" />
            </div>
          </sui-tab-pane>
          <sui-tab-pane title="Access">
            <sui-form>
              <sui-grid divided="vertically">
                <sui-grid-row :columns="2">
                  <sui-grid-column>
                    <sui-form-field>
                      <sui-checkbox label="Use same access for all services" />
                    </sui-form-field>
                    <div class="table-container" style="height: 470px; margin-top: 70px;">
                      <sui-table compact selectable padded basic="very">
                        <sui-table-header>
                          <sui-table-row>
                            <sui-table-header-cell>Name</sui-table-header-cell>
                          </sui-table-row>
                        </sui-table-header>
                        <sui-table-body>
                          <sui-table-row v-for="s in services" :key="s.id">
                            <sui-table-cell>{{ s.name }}</sui-table-cell>
                          </sui-table-row>
                        </sui-table-body>
                      </sui-table>
                    </div>
                  </sui-grid-column>
                  <sui-grid-column>
                    <sui-form-fields grouped>
                      <label for="access_mode">Access Mode</label>
                      <sui-form-field>
                        <sui-checkbox radio name="access_mode" label="Allow all users and groups" value="1" />
                      </sui-form-field>
                      <sui-form-field>
                        <sui-checkbox radio name="access_mode" label="Allow only users and groups below" value="2" />
                      </sui-form-field>
                    </sui-form-fields>
                    <div class="table-container" style="height: 470px;">
                      <sui-table compact selectable padded basic="very">
                        <sui-table-header>
                          <sui-table-row>
                            <sui-table-header-cell>Name</sui-table-header-cell>
                          </sui-table-row>
                        </sui-table-header>
                        <sui-table-body>
                          <sui-table-row v-for="ug in usersGroups" :key="ug.id">
                            <sui-table-cell>{{ ug.name }}</sui-table-cell>
                          </sui-table-row>
                        </sui-table-body>
                      </sui-table>
                    </div>
                    <div is="sui-button-group" style="margin-bottom: 15px;">
                      <sui-button icon="plus" compact />
                      <sui-button icon="minus" compact />
                    </div>
                  </sui-grid-column>
                </sui-grid-row>
              </sui-grid>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import ServerOverviewMenu from "@/ServerOverview/Components/ServerOverviewMenu";

export default {
  name: "ServerOverviewStart",
  components: {ServerOverviewMenu},
  data() {
    return {
      selectedCity: 1,
      selectedNTPServer: 1,
      dateTimeNTPSetting: 1,
      cities: [
        { text: 'Atlanta - U.S.A.', value: 1, },
        { text: 'Bogotá - Columbia', value: 2, },
        { text: 'Boston - U.S.A.', value: 3, },
        { text: 'Columbus - U.S.A.', value: 4, },
        { text: 'Detroit - U.S.A.', value: 5, },
        { text: 'Havana - Cuba', value: 6, },
        { text: 'Indianapolis - U.S.A.', value: 7, },
        { text: 'Knoxville - U.S.A.', value: 8, },
        { text: 'Lima - Peru', value: 9, },
        { text: 'Manchester - U.S.A.', value: 10, },
        { text: 'Miami - U.S.A.', value: 11, },
        { text: 'Montrèal - Canada', value: 12, },
        { text: 'New York - U.S.A.', value: 13, },
        { text: 'Ottawa - Canada', value: 14, },
        { text: 'Panama - Panama', value: 15, },
        { text: 'Philadelphia - U.S.A.', value: 16, },
        { text: 'Port-au-Prince - Haiti', value: 17, },
        { text: 'Quito - Ecuador', value: 18, },
        { text: 'Toronto - Canada', value: 19, },
        { text: 'Washington, D.C. - U.S.A.', value: 20, },
      ],
      ntpServers: [
        { text: 'time.apple.com', value: 1, },
        { text: 'time.asia.apple.com', value: 2, },
        { text: 'time.euro.apple.com', value: 3, },
      ],
      certificates: [],
      services: [],
      usersGroups: []
    }
  },
  methods: {
    editCertificate: function() {

    }
  }
}
</script>

<style scoped>

</style>
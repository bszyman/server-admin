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
              <p>Computers on the server's local subnet will be able to reach it at Cocos.local.</p>
            </sui-form>
          </sui-tab-pane>
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
                  <sui-table-cell>Timezone:</sui-table-cell>
                  <sui-table-cell>EDT</sui-table-cell>
                </sui-table-row>
                <sui-table-row>
                  <sui-table-cell>Closest City:</sui-table-cell>
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
          <sui-tab-pane title="Advanced">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable SNMP" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Enable NTP" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Enable Macintosh Manager" />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
        <div class="controlBar">
          <div></div>
          <div>
            <sui-button>Revert</sui-button>
            <sui-button positive>Save</sui-button>
          </div>
        </div>
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
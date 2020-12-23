<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ChatMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-dimmer v-bind:active="loading" inverted>
          <sui-loader>Loading...</sui-loader>
        </sui-dimmer>

        <p style="text-align: center; margin-bottom: 25px;">
          iChat Service is: {{ serviceStatus }}
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Connected Clients:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-divider />
        <p style="text-align: center;">
          Start Time: {{ startTime }}
        </p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import axios from "axios";
import { format } from 'date-fns'
import ChatMenu from "@/Modules/Chat/Components/ChatMenu";
export default {
  name: "ChatOverview",
  components: {ChatMenu},
  data() {
    return {
      loading: true,
      serviceInfo: {}
    }
  },
  mounted() {
    this.info();
  },
  methods: {
    info: function() {
      const url = "/chat/info";

      this.loading = true;
      axios.get(url).then((response) => {
        this.serviceInfo = response.data;
        this.loading = false;
      }).catch((e) => {
        this.loading = false;

        let alertText = "An error occurred while trying to fetch service info. (";
        alertText += e.toString();
        alertText += ")";
        window.alert(alertText);
      });
    }
  },
  computed: {
    serviceStatus: function() {
      return this.serviceInfo.running ? "Running" : "Stopped";
    },
    startTime: function () {
      if (this.serviceInfo.running) {
        return format(new Date(this.serviceInfo.start_time), "PPPPpppp");
      } else {
        return "Not available - Service is not running";
      }
    }
  }
}
</script>

<style scoped>

</style>
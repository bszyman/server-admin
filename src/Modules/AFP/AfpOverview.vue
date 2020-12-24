<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <afp-menu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Apple File Service is: {{ serviceStatus }}
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Current Throughput:</sui-table-cell>
                <sui-table-cell :width="8">0.0 B/second</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Current Connections:</sui-table-cell>
                <sui-table-cell :width="8">0</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Guest Access:</sui-table-cell>
                <sui-table-cell :width="8">On</sui-table-cell>
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
import AfpMenu from "@/Modules/AFP/Components/AfpMenu";
import axios from "axios";
import {format} from "date-fns";
export default {
  name: "AfpOverview",
  components: {AfpMenu},
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
      const url = "/afp/info";

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
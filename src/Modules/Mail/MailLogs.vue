<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <MailMenu selected-section="Logs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-form>
          <sui-form-field>
            <textarea rows="31" readonly></textarea>
          </sui-form-field>
          <div class="controlBar">
            <div>
              <sui-form-field inline>
                <label>Show:</label>
                <sui-dropdown
                    placeholder="Select Log"
                    selection
                    :options="logTypeOptions"
                    v-model="selectedLogType"
                />
              </sui-form-field>
            </div>
            <div></div>
          </div>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import MailMenu from "@/Modules/Mail/Components/MailMenu";
export default {
  name: "MailLogs",
  components: {MailMenu},
  data() {
    const logTypeOptions = [
      {
        key: 1,
        text: "IMAP",
        value: 1
      },
      {
        key: 2,
        text: "Mail Access",
        value: 2
      },
      {
        key: 3,
        text: "Mailing Lists",
        value: 3
      },
      {
        key: 4,
        text: "Mailing Lists - Delivery",
        value: 4
      },
      {
        key: 5,
        text: "Mailing Lists - Delivery Failures",
        value: 5
      },
      {
        key: 6,
        text: "Mailing Lists - Error",
        value: 6
      },
      {
        key: 7,
        text: "Mailing Lists - Postings",
        value: 7
      },
      {
        key: 8,
        text: "Mailing Lists - Subscriptions",
        value: 8
      },
      {
        key: 9,
        text: "POP",
        value: 9
      },
      {
        key: 10,
        text: "SMTP",
        value: 10
      },
    ];

    return {
      selectedLogType: 1,
      logTypeOptions: logTypeOptions
    }
  }
}
</script>

<style scoped>

</style>
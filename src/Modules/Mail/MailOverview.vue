<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <MailMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Mail Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Outgoing SMTP:</sui-table-cell>
                <sui-table-cell :width="8">Disabled</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Incoming SMTP:</sui-table-cell>
                <sui-table-cell :width="8">Disabled</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">POP:</sui-table-cell>
                <sui-table-cell :width="8">Disabled</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">IMAP:</sui-table-cell>
                <sui-table-cell :width="8">Disabled</sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell :width="8" text-align="right">Mailing Lists:</sui-table-cell>
                <sui-table-cell :width="8">Disabled</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <sui-divider />
        <p style="text-align: center;">
          Start Time: Not available - Service is not running
        </p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import MailMenu from "@/Modules/Mail/Components/MailMenu";
export default {
  name: "MailOverview",
  components: {MailMenu}
}
</script>

<style scoped>

</style>
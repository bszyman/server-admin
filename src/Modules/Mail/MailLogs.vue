<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <MailMenu selected-section="Logs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import MailMenu from "@/Modules/Mail/Components/MailMenu";
export default {
  name: "MailLogs",
  components: {MailMenu}
}
</script>

<style scoped>

</style>
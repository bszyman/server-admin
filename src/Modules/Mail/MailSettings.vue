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
            <h3>General</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Mailing Lists">
            <h3>Mailing Lists</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Filters">
            <h3>Filters</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <h3>Logging</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Advanced">
            <h3>Advanced</h3>
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
  components: {MailMenu}
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <QtssMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <h3>General</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Access">
            <h3>Access</h3>
          </sui-tab-pane>
          <sui-tab-pane title="IP Bidings">
            <h3>IP Bidings</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Relays">
            <h3>Relays</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <h3>Logging</h3>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import QtssMenu from "@/Modules/QTSS/Components/QtssMenu";
export default {
  name: "QtssSettings",
  components: {QtssMenu}
}
</script>

<style scoped>

</style>
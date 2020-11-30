<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <h3>General</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Sites">
            <h3>Sites</h3>
          </sui-tab-pane>
          <sui-tab-pane title="MIME Types">
            <h3>MIME Types</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Proxy">
            <h3>Proxy</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Modules">
            <h3>Modules</h3>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WebMenu from "@/Modules/Web/Components/WebMenu";
export default {
  name: "WebSettings",
  components: {WebMenu}
}
</script>

<style scoped>

</style>
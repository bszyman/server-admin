<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <OpenDirectoryMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <h3>General</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Protocols">
            <h3>Protocols</h3>
          </sui-tab-pane>
          <sui-tab-pane title="Authentication">
            <h3>Authentication</h3>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import OpenDirectoryMenu from "@/Modules/OpenDirectory/Components/OpenDirectoryMenu";
export default {
  name: "OpenDirectorySettings",
  components: {OpenDirectoryMenu}
}
</script>

<style scoped>

</style>
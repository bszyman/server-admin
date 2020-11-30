<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NfsMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <h3>General</h3>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import NfsMenu from "@/Modules/NFS/Components/NfsMenu";
export default {
  name: "NfsSettings",
  components: {NfsMenu}
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NatMenu selected-section="Settings" />
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
import NatMenu from "@/Modules/NAT/Components/NatMenu";
export default {
  name: "NatSettings",
  components: {NatMenu}
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <VpnMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import VpnMenu from "@/Modules/VPN/Components/VpnMenu";
export default {
  name: "VpnSettings",
  components: {VpnMenu}
}
</script>

<style scoped>

</style>
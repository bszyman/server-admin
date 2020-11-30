<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DhcpMenu selected-section="Logs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import DhcpMenu from "@/Modules/DHCP/Components/DhcpMenu";
export default {
  name: "DhcpLogs",
  components: {DhcpMenu}
}
</script>

<style scoped>

</style>
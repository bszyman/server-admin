<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ApplicationServerMenu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import ApplicationServerMenu from "@/Modules/ApplicationServer/Components/ApplicationServerMenu";
export default {
  name: "ApplicationServerConnections",
  components: {ApplicationServerMenu}
}
</script>

<style scoped>

</style>
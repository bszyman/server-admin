<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ApplicationServerMenu selected-section="Settings" />
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
  name: "ApplicationServerSettings",
  components: {ApplicationServerMenu}
}
</script>

<style scoped>

</style>
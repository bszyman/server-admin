<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WindowsMenu selected-section="Logs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WindowsMenu from "@/Modules/Windows/Components/WindowsMenu";
export default {
  name: "WindowsLogs",
  components: {WindowsMenu}
}
</script>

<style scoped>

</style>
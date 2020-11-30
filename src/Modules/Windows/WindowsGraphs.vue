<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WindowsMenu selected-section="Graphs" />
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
  name: "WindowsGraphs",
  components: {WindowsMenu}
}
</script>

<style scoped>

</style>
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <OpenDirectoryMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

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
<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <afp-menu selected-section="Logs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import AfpMenu from "@/Modules/AFP/Components/AfpMenu";
export default {
  name: "AfpLogs",
  components: {AfpMenu}
}
</script>

<style scoped>

</style>
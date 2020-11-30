<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <afp-menu selected-section="Settings" />
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
  name: "AfpSettings",
  components: {AfpMenu}
}
</script>

<style scoped>

</style>
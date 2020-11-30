<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WebMenu from "@/Modules/Web/Components/WebMenu";
export default {
  name: "WebSettings",
  components: {WebMenu}
}
</script>

<style scoped>

</style>
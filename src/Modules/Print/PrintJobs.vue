<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <PrintMenu selected-section="Jobs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import PrintMenu from "@/Modules/Print/Components/PrintMenu";
export default {
  name: "PrintJobs",
  components: {PrintMenu}
}
</script>

<style scoped>

</style>
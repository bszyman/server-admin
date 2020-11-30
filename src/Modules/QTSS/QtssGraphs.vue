<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <QtssMenu selected-section="Graphs" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import QtssMenu from "@/Modules/QTSS/Components/QtssMenu";
export default {
  name: "QtssGraphs",
  components: {QtssMenu}
}
</script>

<style scoped>

</style>
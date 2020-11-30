<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FtpMenu selected-section="Log" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FtpMenu from "@/Modules/FTP/Components/FtpMenu";
export default {
  name: "FtpLog",
  components: {FtpMenu}
}
</script>

<style scoped>

</style>
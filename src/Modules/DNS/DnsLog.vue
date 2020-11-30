<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DnsMenu selected-section="Log" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">

      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import DnsMenu from "@/Modules/DNS/Components/DnsMenu";
export default {
  name: "DnsLog",
  components: {DnsMenu}
}
</script>

<style scoped>

</style>
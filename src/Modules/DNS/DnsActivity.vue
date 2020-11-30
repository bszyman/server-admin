<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <DnsMenu selected-section="Activity" />
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
  name: "DnsActivity",
  components: {DnsMenu}
}
</script>

<style scoped>

</style>
<template>
  <div style="width: 90%; margin: 20px auto;">
    <sui-grid :columns="2">
      <sui-grid-row>
        <sui-grid-column :width="4">
          <ServiceNavigator selectedService="Open Directory" />
        </sui-grid-column>
        <sui-grid-column :width="12">
          <router-view></router-view>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
import ServiceNavigator from "@/components/ServiceNavigator";
export default {
  name: "OpenDirectory",
  components: {ServiceNavigator},
}
</script>

<style scoped>

</style>
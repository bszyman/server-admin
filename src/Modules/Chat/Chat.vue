<template>
  <div style="width: 90%; margin: 20px auto;">
    <sui-grid :columns="2">
      <sui-grid-row>
        <sui-grid-column :width="4">
          <ServiceNavigator selectedService="iChat" />
        </sui-grid-column>
        <sui-grid-column :width="12">
          <div style="min-height: 750px;">
            <router-view></router-view>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
import ServiceNavigator from "@/components/ServiceNavigator";
export default {
  name: "Chat",
  components: {ServiceNavigator},
}
</script>

<style scoped>

</style>
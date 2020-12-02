<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <afp-menu selected-section="Connections" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-segment></sui-segment>
        <p>Number of connections: 0</p>
        <div class="controlBar">
          <div>
            <sui-button>Stop...</sui-button>
          </div>
          <div>
            <sui-button>Send Message...</sui-button>
            <sui-button>Disconnect</sui-button>
          </div>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import AfpMenu from "@/Modules/AFP/Components/AfpMenu";
export default {
  name: "AfpConnections",
  components: {AfpMenu}
}
</script>

<style scoped>

</style>
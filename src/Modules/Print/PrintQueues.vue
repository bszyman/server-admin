<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <PrintMenu selected-section="Queues" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-segment></sui-segment>
        <div class="controlBar">
          <div>
            <p>Number of queues: 0</p>
          </div>
          <div>
            <div is="sui-button-group">
              <sui-button icon="play" compact />
              <sui-button icon="stop" compact />
            </div>
          </div>
        </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import PrintMenu from "@/Modules/Print/Components/PrintMenu";
export default {
  name: "PrintQueues",
  components: {PrintMenu}
}
</script>

<style scoped>

</style>
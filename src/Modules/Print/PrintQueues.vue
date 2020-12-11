<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <PrintMenu selected-section="Queues" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <div class="table-container">
          <sui-table compact selectable padded basic="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Jobs</sui-table-header-cell>
                <sui-table-header-cell>Status</sui-table-header-cell>
                <sui-table-header-cell>Shared via</sui-table-header-cell>
                <sui-table-header-cell>Kind</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>
            <sui-table-body>
              <sui-table-row v-for="q in queues" :key="q.id">
                <sui-table-cell>{{ q.name }}</sui-table-cell>
                <sui-table-cell>{{ q.jobs }}</sui-table-cell>
                <sui-table-cell>{{ q.status }}</sui-table-cell>
                <sui-table-cell>{{ q.sharedVia }}</sui-table-cell>
                <sui-table-cell>{{ q.kind }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

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
  components: {PrintMenu},
  data() {
    return {
      queues: [],
    }
  }
}
</script>

<style scoped>

</style>
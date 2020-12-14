<template>
  <sui-modal v-model="open">
    <sui-modal-header>Edit Secondary Zone</sui-modal-header>
    <sui-modal-content>
      <p>
        Add a list of servers (IP Addresses) that this
        server is secondary for in the given zone.
      </p>
      <sui-form>
        <sui-form-field>
          <label>Name:</label>
          <input type="text" />
        </sui-form-field>

        <h4>Primaries:</h4>
        <div class="table-container" style="height: 100px;">
          <sui-table compact selectable padded basic="very">
            <sui-table-body>
              <sui-table-row v-for="p in primaries" :key="p">
                <sui-table-cell>{{ p }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <div is="sui-button-group" style="margin-bottom: 15px;">
          <sui-button icon="plus" compact />
          <sui-button icon="minus" compact />
        </div>
      </sui-form>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button @click="close">Cancel</sui-button>
      <sui-button positive @click="close">OK</sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
export default {
  name: "DnsSecondaryZoneEditorPop",
  props: ["open"],
  data() {
    return {
      primaries: []
    }
  },
  methods: {
    close: function() {
      this.open = false;
    }
  }
}
</script>

<style scoped>

</style>
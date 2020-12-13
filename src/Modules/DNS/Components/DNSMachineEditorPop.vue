<template>
  <sui-modal v-model="open">
    <sui-modal-header>Edit Machine</sui-modal-header>
    <sui-modal-content scrolling>
      <sui-form>
        <sui-form-field>
          <label>IP Address:</label>
          <input type="text" value="10.0.2.15" readonly />
        </sui-form-field>
        <sui-form-field>
          <label>Fully Qualified Name:</label>
          <input type="text" value="cocos.bszyman.com.." readonly />
        </sui-form-field>
        <sui-form-field>
          <label>IP Reverse Lookup:</label>
          <input type="text" value="cocos.bszyman.com." readonly />
        </sui-form-field>

        <h4>Aliases</h4>
        <div class="table-container" style="height: 100px;">
          <sui-table compact selectable padded basic="very">
            <sui-table-body>
              <sui-table-row v-for="a in aliases" :key="a">
                <sui-table-cell>{{ a }}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>

        <div is="sui-button-group" style="margin-bottom: 15px;">
          <sui-button icon="plus" compact />
          <sui-button icon="minus" compact />
        </div>

        <sui-form-fields fields="two">
          <sui-form-field>
            <sui-checkbox label="This machine is a mail server for the zone" />
          </sui-form-field>
          <sui-form-field inline>
            <label>Mail Server Precedence:</label>
            <input type="number" />
          </sui-form-field>
        </sui-form-fields>

        <sui-form-field>
          <label>Hardware Info:</label>
          <textarea rows="2"></textarea>
        </sui-form-field>
        <sui-form-field>
          <label>Software Info:</label>
          <textarea rows="2"></textarea>
        </sui-form-field>
        <sui-form-field>
          <label>Comment:</label>
          <textarea rows="2"></textarea>
        </sui-form-field>
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
  name: "DNSMachineEditorPop",
  props: ["open"],
  data() {
    return {
      aliases: []
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
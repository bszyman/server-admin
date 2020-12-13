<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <ChatMenu selected-section="Log" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-form>
          <sui-form-field>
            <textarea rows="31" readonly></textarea>
          </sui-form-field>
          <div class="controlBar">
            <div>
              <p>/var/log/system.log</p>
            </div>
            <div>
              <sui-form-field inline>
                <label>Filter:</label>
                <input type="text">
              </sui-form-field>
            </div>
          </div>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import ChatMenu from "@/Modules/Chat/Components/ChatMenu";
export default {
  name: "ChatLog",
  components: {ChatMenu},
  data() {
    const logTypeOptions = [
      {
        key: 1,
        text: "Access Log",
        value: 1
      },
      {
        key: 2,
        text: "Error Log",
        value: 2
      },
    ];

    return {
      selectedLogType: 2,
      logTypeOptions: logTypeOptions
    }
  }
}
</script>

<style scoped>

</style>
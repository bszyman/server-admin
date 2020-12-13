<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <SoftwareUpdateMenu selected-section="Log" />
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
              <p>/Library/Logs/SoftwareUpdateServer.log</p>
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
import SoftwareUpdateMenu from "@/Modules/SoftwareUpdate/Components/SoftwareUpdateMenu";
export default {
  name: "SoftwareUpdateLog",
  components: {SoftwareUpdateMenu},
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
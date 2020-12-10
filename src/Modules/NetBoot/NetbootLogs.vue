<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NetbootMenu selected-section="Logs" />
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
                <label>Filter</label>
                <input type="text" />
              </sui-form-field>
            </div>
          </div>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import NetbootMenu from "@/Modules/NetBoot/Components/NetbootMenu";
export default {
  name: "NetbootLogs",
  components: {NetbootMenu}
}
</script>

<style scoped>

</style>
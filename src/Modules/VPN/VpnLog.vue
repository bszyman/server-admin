<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <VpnMenu selected-section="Log" />
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
              <p>/var/log/ppp/vpnd.log</p>
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
import VpnMenu from "@/Modules/VPN/Components/VpnMenu";
export default {
  name: "VpnLog",
  components: {VpnMenu}
}
</script>

<style scoped>

</style>
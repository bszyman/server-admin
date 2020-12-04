<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NfsMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field inline>
                <label for="server-deamons">Use</label>
                <input id="server-deamons" type="number" value="6" />
                <span style="margin-left: 10px;">server daemons</span>
              </sui-form-field>

              <sui-form-fields grouped>
                <label for="server-clients-via">Serve clients via:</label>
                <div style="margin-left: 25px;">
                  <sui-form-field>
                    <sui-checkbox radio name="server-clients-via" label="TCP and UDP" value="1" />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox radio name="server-clients-via" label="TCP" value="2" />
                  </sui-form-field>
                  <sui-form-field>
                    <sui-checkbox radio name="server-clients-via" label="UDP" value="3" />
                  </sui-form-field>
                </div>
              </sui-form-fields>

            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import NfsMenu from "@/Modules/NFS/Components/NfsMenu";
export default {
  name: "NfsSettings",
  components: {NfsMenu}
}
</script>

<style scoped>

</style>
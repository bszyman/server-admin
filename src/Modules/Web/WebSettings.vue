<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <WebMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field inline>
                <label>Maximum simultaneous connections:</label>
                <input type="number">
              </sui-form-field>
              <sui-form-field inline>
                <label>Maximum persistent connections:</label>
                <input type="number">
              </sui-form-field>
              <sui-form-field inline>
                <label>Connection timeout:</label>
                <input type="number">
                <span style="margin-left: 10px;">seconds</span>
              </sui-form-field>
              <sui-form-field inline>
                <label>Maximum simultaneous connections:</label>
                <input type="number">
              </sui-form-field>
              <sui-form-field inline>
                <label>Maximum simultaneous connections:</label>
                <input type="number">
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Sites">
            <sui-form>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="MIME Types">
            <sui-form>
              <h4>MIME Types</h4>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>

              <sui-divider />

              <h4>Content Handlers</h4>
              <sui-segment></sui-segment>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Proxy">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Proxy" />
              </sui-form-field>

              <div style="margin-left: 50px;">
                <sui-form-field inline>
                  <label>Maximum cache size:</label>
                  <input type="number">
                  <span style="margin-left: 10px;">MB</span>
                </sui-form-field>
                <sui-form-field inline>
                  <label>Cache folder:</label>
                  <input type="text">
                  <sui-button icon="ellipsis horizontal" style="margin-left: 10px;" compact />
                </sui-form-field>

                <h4>Blocked Hosts</h4>
                <sui-segment></sui-segment>
                <div is="sui-button-group" style="margin-bottom: 15px;">
                  <sui-button icon="plus" compact />
                  <sui-button icon="minus" compact />
                </div>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Modules">
            <sui-segment></sui-segment>
            <div is="sui-button-group" style="margin-bottom: 15px;">
              <sui-button icon="plus" compact />
              <sui-button icon="copy" compact />
              <sui-button icon="minus" compact />
              <sui-button icon="pencil alternate" compact />
            </div>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import WebMenu from "@/Modules/Web/Components/WebMenu";
export default {
  name: "WebSettings",
  components: {WebMenu}
}
</script>

<style scoped>

</style>
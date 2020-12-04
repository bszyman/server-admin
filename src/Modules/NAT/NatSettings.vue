<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <NatMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="General">
            <sui-form>
              <sui-form-field inline>
                <label for="encoding-option">Encoding for older clients:</label>
                <sui-dropdown
                    id="encoding-option"
                    placeholder="Authentication Method"
                    selection
                    :options="encodingTypes"
                    v-model="selectedEncodingType"
                />
              </sui-form-field>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import NatMenu from "@/Modules/NAT/Components/NatMenu";
export default {
  name: "NatSettings",
  components: {NatMenu},
  data() {
    let encodingTypes = [
      { text: "Built-in Ethernet", value: 1 }
    ];

    return {
      encodingTypes: encodingTypes,
      selectedEncodingType: 1
    }
  }
}
</script>

<style scoped>

</style>
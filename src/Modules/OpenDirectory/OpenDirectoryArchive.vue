<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <OpenDirectoryMenu selected-section="Archive" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-form>
          <p>
            Directory and authentication data can be archived only from
            an Open Directory master. This server is not an Open Directory master.
          </p>

          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell text-align="right" vertical-align="top" :width="4">
                  <label>Archive In:</label>
                </sui-table-cell>
                <sui-table-cell :width="10">
                  <sui-form-field inline>
                    <textarea rows="2"></textarea>
                  </sui-form-field>

                  <div class="controlBar">
                    <div>
                      <p>Enter or browse for the archive path.</p>
                    </div>
                    <div>
                      <sui-button compact>Archive</sui-button>
                    </div>
                  </div>
                </sui-table-cell>
                <sui-table-cell text-align="left" vertical-align="top" :width="2">
                  <sui-button icon="ellipsis horizontal" compact style="margin-left: 10px;" />
                </sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>

          <sui-table compact basic="very">
            <sui-table-body>
              <sui-table-row>
                <sui-table-cell text-align="right" vertical-align="top" :width="4">
                  <label>Restore From:</label>
                </sui-table-cell>
                <sui-table-cell :width="10">
                  <sui-form-field inline>
                    <textarea rows="2"></textarea>
                  </sui-form-field>

                  <div class="controlBar">
                    <div>
                      <p>Enter or browse for the archive.</p>
                    </div>
                    <div>
                      <sui-button compact>Restore</sui-button>
                    </div>
                  </div>
                </sui-table-cell>
                <sui-table-cell text-align="left" vertical-align="top" :width="2">
                  <sui-button icon="ellipsis horizontal" compact style="margin-left: 10px;" />
                </sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import OpenDirectoryMenu from "@/Modules/OpenDirectory/Components/OpenDirectoryMenu";

export default {
  name: "OpenDirectoryArchive",
  components: {OpenDirectoryMenu},
}
</script>

<style scoped>

</style>
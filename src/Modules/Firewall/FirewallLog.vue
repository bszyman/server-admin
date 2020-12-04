<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FirewallMenu selected-section="Log" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-form>
          <sui-form-field>
            <textarea rows="31" readonly>
              Sep 29 10:15:38 localhost /usr/share/servermgrd/cgi-bin/servermgr_ipfilter: ipfw config:Info:Timing:Services array obtained from context
Sep 29 10:15:38 localhost /usr/share/servermgrd/cgi-bin/servermgr_ipfilter: ipfw config:Info:Finished generating rules in 11 ms
Sep 29 10:15:38 localhost /usr/share/servermgrd/cgi-bin/servermgr_ipfilter: ipfw config:Info:Flushed rules
Sep 29 10:15:38 localhost /usr/share/servermgrd/cgi-bin/servermgr_ipfilter: ipfw config:Info:Finished applying generated rules in 1251 ms
Sep 29 10:15:38 localhost /usr/share/servermgrd/cgi-bin/servermgr_ipfilter: ipfw config:Info:Finished applying NAT rules
Sep 29 10:15:38 localhost /usr/share/servermgrd/cgi-bin/servermgr_ipfilter: ipfw config:Info:Finished applying local rules
            </textarea>
          </sui-form-field>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FirewallMenu from "@/Modules/Firewall/Components/FirewallMenu";
export default {
  name: "FirewallLog",
  components: {FirewallMenu}
}
</script>

<style scoped>

</style>
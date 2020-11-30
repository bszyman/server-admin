<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FirewallMenu selected-section="Overview" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <p style="text-align: center; margin-bottom: 25px;">
          Firewall Service is: Stopped
        </p>

        <sui-divider />

        <div style="margin-top: 40px; min-height: 500px;">
          <textarea style="width: 70%; margin: 0 15%; min-height: 300px;">
            01000 0 0 allow ip from any to any via lo0
            01010 0 0 deny ip from any to 127.0.0.0/8
            01020 0 0 deny ip from 224.0.0.0/4 to any in
            01030 0 0 deny tcp from any to 224.0.0.0/4
            12300 0 0 allow tcp from any to any 22 in
            12301 0 0 allow udp from any to any 22 in
            12302 0 0 allow tcp from any to any 311 in
            12303 0 0 allow tcp from any to any 625 in
            12304 0 0 allow tcp from any to any 687 in
            12305 0 0 allow tcp from any to any in icmptype 0
            12306 0 0 allow igmp from any to any in
            63200 0 0 deny icmp from any to any in icmptype 0
            63300 0 0 deny igmp from any to any in
            65000 0 0 deny tcp from any to any in setup
            65535 0 0 allow ip from any to any
          </textarea>
        </div>

        <sui-divider />
        <p style="text-align: center;"></p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FirewallMenu from "@/Modules/Firewall/Components/FirewallMenu";
export default {
  name: "FirewallOverview",
  components: {FirewallMenu}
}
</script>

<style scoped>

</style>
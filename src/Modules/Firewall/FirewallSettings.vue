<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <FirewallMenu selected-section="Settings" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-tab>
          <sui-tab-pane title="Address Groups">
            <sui-accordion exclusive styled>
              <sui-accordion-title>Address Groups</sui-accordion-title>
              <sui-accordion-content active>
                <sui-accordion v-for="addressGroup in addressGroups" :key="addressGroup.id" exclusive styled>
                  <sui-accordion-title>{{ addressGroup.name }}</sui-accordion-title>
                  <sui-accordion-content>
                    <div is="sui-button-group">
                      <sui-button icon="plus" compact />
                      <sui-button icon="copy" compact />
                      <sui-button icon="minus" compact />
                      <sui-button icon="pencil alternate" compact />
                    </div>
                    <sui-segment color="grey" emphasis="tertiary">
                      <h4>Address Blocks</h4>
                      <sui-list bulleted divided>
                        <sui-list-item v-for="addressBlock in addressGroup.addressGroups" :key="addressBlock.id">
                          <sui-list-header>{{ addressBlock.addressBlock }}</sui-list-header>
                        </sui-list-item>
                      </sui-list>
                    </sui-segment>
                  </sui-accordion-content>
                </sui-accordion>
              </sui-accordion-content>
            </sui-accordion>
          </sui-tab-pane>
          <sui-tab-pane title="Services">
            <sui-form>
              <sui-form-field inline>
                <label for="network-interfaces">Edit Services for:</label>
                <sui-dropdown
                    id="network-interfaces"
                    placeholder="Select Interface"
                    selection
                    :options="networkInterfaceOptions"
                    v-model="selectednetworkInterface"
                />
              </sui-form-field>

              <sui-form-fields grouped>
                <sui-form-field>
                  <sui-checkbox radio name="any_restriction" label="Allow all traffic for any" value="1" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox radio name="any_restriction" label="Allow only traffic for any on these ports:" value="2" />
                </sui-form-field>
              </sui-form-fields>

              <div class="table-container" style="height: 375px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-header>
                    <sui-table-row>
                      <sui-table-header-cell text-align="center">Allow</sui-table-header-cell>
                      <sui-table-header-cell>Description</sui-table-header-cell>
                      <sui-table-header-cell>Ports</sui-table-header-cell>
                      <sui-table-header-cell>Protocol</sui-table-header-cell>
                    </sui-table-row>
                  </sui-table-header>
                  <sui-table-body>
                    <sui-table-row v-for="rule in firewallRules" :key="rule.ports">
                      <sui-table-cell text-align="center">
                        <sui-checkbox v-model="rule.allow" />
                      </sui-table-cell>
                      <sui-table-cell>{{ rule.description }}</sui-table-cell>
                      <sui-table-cell>{{ rule.ports }}</sui-table-cell>
                      <sui-table-cell>{{ rule.protocol }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>

              <div is="sui-button-group">
                <sui-button icon="plus" compact />
                <sui-button icon="copy" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Logging">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Logging" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Log all allowed packets" />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Log all denied packets" />
                </sui-form-field>
                <sui-form-field inline>
                  <label for="log-only">Log Only</label>
                  <input id="log-only" type="number" value="1000" />
                  <span style="margin-left: 10px;">packets</span>
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Advanced">
            <sui-form>
              <h4>Stealth Mode</h4>
              <sui-form-field>
                <sui-checkbox label="Enable for TCP" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="Enable for UDP" />
              </sui-form-field>
              <p>
                With stealth mode enabled, clients trying to connect to
                closed ports do not get failure notifications.
              </p>

              <h4>Advanced Rules</h4>

              <div class="table-container" style="height: 300px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-header>
                    <sui-table-row>
                      <sui-table-header-cell text-align="center">Enabled</sui-table-header-cell>
                      <sui-table-header-cell>Number</sui-table-header-cell>
                      <sui-table-header-cell>Action</sui-table-header-cell>
                      <sui-table-header-cell>Ports</sui-table-header-cell>
                      <sui-table-header-cell>Source</sui-table-header-cell>
                      <sui-table-header-cell>Destination</sui-table-header-cell>
                    </sui-table-row>
                  </sui-table-header>
                  <sui-table-body>
                    <sui-table-row v-for="rule in rules" :key="rule.id">
                      <sui-table-cell text-align="center">
                        <sui-checkbox label="" v-model="rule.enabled" />
                      </sui-table-cell>
                      <sui-table-cell>{{ rule.number }}</sui-table-cell>
                      <sui-table-cell>{{ rule.action }}</sui-table-cell>
                      <sui-table-cell>{{ rule.ports }}</sui-table-cell>
                      <sui-table-cell>{{ rule.source }}</sui-table-cell>
                      <sui-table-cell>{{ rule.destination }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>

              <div is="sui-button-group">
                <sui-button icon="plus" compact />
                <sui-button icon="copy" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>

              <p>Drag rules to set precedence ordering.</p>
            </sui-form>
          </sui-tab-pane>
        </sui-tab>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import FirewallMenu from "@/Modules/Firewall/Components/FirewallMenu";
export default {
  name: "FirewallSettings",
  components: {FirewallMenu},
  data() {
    const rules = [
      { id: 1, enabled: true, number: 1000, action: "allow", ports: "", source: "any", destination: "any via lo0"},
      { id: 2, enabled: true, number: 1010, action: "deny", ports: "", source: "any", destination: "127.0.0.1/8"},
      { id: 3, enabled: false, number: 1020, action: "deny", ports: "", source: "224.0.0.0/4", destination: "any in"}
    ];

    const networkInterfaceOptions = [
      { id: 1, text: "any", value: 1 },
      { id: 2, text: "10-net", value: 2 },
      { id: 3, text: "192.168-net", value: 3 },
    ];

    const addressGroups = [
      {
        id: 1,
        name: "any",
        addressGroups: [
          {
            id: "1ag",
            addressBlock: "any"
          }
        ]
      },
      {
        id: 2,
        name: "10-net",
        addressGroups: [
          {
            id: "2ag",
            addressBlock: "10.0.0.0/8"
          }
        ]
      },
      {
        id: 3,
        name: "192.168-net",
        addressGroups: [
          {
            id: "3ag",
            addressBlock: "192.168.0.0/16"
          }
        ]
      },
    ];

    const firewallRules = [
      { allow: true, description: "TCP (established)", ports: "", protocol: "TCP" },
      { allow: false, description: "ESP - Encapsulating Security Payload protocol", ports: "", protocol: "ESP" },
      { allow: false, description: "GRE - Generic Routing Encapsulation protocol", ports: "", protocol: "GRE" },
      { allow: true, description: "UDP outbound and responses", ports: "", protocol: "UDP" },
      { allow: true, description: "UDP Fragments", ports: "", protocol: "UDP" },
      { allow: true, description: "TCP (outgoing)", ports: "", protocol: "TCP" },
      { allow: true, description: "IGMP - Internet Group Management Protocol", ports: "", protocol: "IGMP" },
      { allow: false, description: "ICMP - all messages", ports: "", protocol: "ICMP" },
      { allow: false, description: "Echo", ports: "7", protocol: ["TCP", "UDP"] },
      { allow: false, description: "FTP service", ports: "20-21", protocol: "TCP" },
      { allow: true, description: "SSH - Secure Shell", ports: "22", protocol: ["TCP", "UDP"] },
      { allow: false, description: "Telnet", ports: "23", protocol: ["TCP", "UDP"] },
      { allow: false, description: "Mail: SMTP", ports: "25", protocol: ["TCP", "UDP"] },
      { allow: false, description: "DNS - inbound queries", ports: "53", protocol: ["TCP", "UDP"] },
      { allow: false, description: "DNS - responses to outbound queries", ports: "53", protocol: ["TCP", "UDP"] },
      { allow: false, description: "DHCP and NetBoot server", ports: "67", protocol: "UDP" },
      { allow: false, description: "DHCP and NetBoot client", ports: "68", protocol: "UDP" },
      { allow: false, description: "TFTP - Trivial FTP", ports: "69", protocol: "UDP" },
      { allow: false, description: "Finger service", ports: "79", protocol: ["TCP", "UDP"] },
      { allow: false, description: "HTTP - web service", ports: "80", protocol: "TCP" },
      { allow: false, description: "Kerberos V5 KDC", ports: "88", protocol: ["TCP", "UDP"] },
      { allow: false, description: "Password Server", ports: "106,3659", protocol: ["TCP", "UDP"] },
      { allow: false, description: "Mail: POP3", ports: "110", protocol: ["TCP", "UDP"] },
      { allow: false, description: "RPC - Remote Procedure Call (rpcbind)", ports: "111", protocol: ["TCP", "UDP"] },
      { allow: false, description: "Authentication service", ports: "113", protocol: "TCP" },
      { allow: false, description: "SFTP - Simple File Transfer Protocol", ports: "115", protocol: "TCP" },
      { allow: false, description: "NNTP - Network News Transfer Protocol", ports: "119", protocol: "TCP" },
      { allow: false, description: "NTP - Network Time Protocol", ports: "123", protocol: ["TCP", "UDP"] },
      { allow: false, description: "WINS - Windows Internet Naming Service", ports: "137", protocol: "UDP" },
      { allow: false, description: "NETBIOS datagram - Windows browsing", ports: "138", protocol: "UDP" },
      { allow: false, description: "SMB/CIFS - Windows file service", ports: "139", protocol: "TCP" },
      { allow: false, description: "Mail: IMAP", ports: "143", protocol: "TCP" },
      { allow: false, description: "SNMP - Simple Network Management Protocol", ports: "161", protocol: "UDP" },
      { allow: false, description: "Airport", ports: "192", protocol: "UDP" },
      { allow: false, description: "AppleTalk protocols", ports: "201-208", protocol: "TCP" },
      { allow: true, description: "Server Admin SSL, also Web-ASIP", ports: "311", protocol: "TCP" },
      { allow: false, description: "LDAP service", ports: "389", protocol: "TCP" },
      { allow: false, description: "Timbuktu", ports: "407", protocol: ["TCP", "UDP"] },
      { allow: false, description: "SLP - Service Location Protocol", ports: "427", protocol: ["TCP", "UDP"] },
      { allow: false, description: "HTTPS - secure web service via SSL", ports: "443", protocol: "TCP" },
      { allow: false, description: "Microsoft Domain Server", ports: "445", protocol: "TCP" },
      { allow: false, description: "Dantz Retrospect", ports: "497", protocol: ["TCP", "UDP"] },
      { allow: false, description: "VPN ISAKMP/IKE", ports: "500", protocol: "UDP" },
      { allow: false, description: "Who", ports: "513", protocol: "UDP" },
      { allow: false, description: "Shell", ports: "514", protocol: "TCP" },
      { allow: false, description: "Syslog", ports: "514", protocol: "UDP" },
      { allow: false, description: "LPR - printer spooling", ports: "515", protocol: ["TCP", "UDP"] },
      { allow: false, description: "NetNews", ports: "532", protocol: ["TCP", "UDP"] },
      { allow: false, description: "Apple File Service (AFP)", ports: "548", protocol: "TCP" },
      { allow: false, description: "RTSP - QTSS streaming", ports: "554", protocol: "TCP" },
      { allow: false, description: "NetInfo - full range", ports: "600-1023", protocol: ["TCP", "UDP"] },
      { allow: true, description: "Remote Directory Access", ports: "625", protocol: "TCP" },
      { allow: true, description: "Serial number support", ports: "626", protocol: "UDP" },
      { allow: false, description: "IPP - printer sharing", ports: "631", protocol: ["TCP", "UDP"] },
      { allow: false, description: "LDAP secure", ports: "636", protocol: "TCP" },
      { allow: false, description: "Server administration using Server Settings", ports: "660", protocol: "TCP" },
      { allow: false, description: "Server administration using Server Admin", ports: "687", protocol: "TCP" },
      { allow: false, description: "Kerberos 5 admin/changepw", ports: "749", protocol: ["TCP", "UDP"] },
      { allow: false, description: "NetInfo - static port only", ports: "985", protocol: "TCP" },
      { allow: false, description: "Mail: IMAP SSL", ports: "993", protocol: "TCP" },
      { allow: false, description: "Mail POP3 over SSL", ports: "995", protocol: ["TCP", "UDP"] },
      { allow: false, description: "WebObjects", ports: "1085", protocol: ["TCP", "UDP"] },
      { allow: false, description: "Remote RMI and RMI/IIOP access to JBoss", ports: "1099,8043", protocol: "TCP" },
      { allow: false, description: "QTSS web administration", ports: "1220", protocol: "TCP" },
      { allow: false, description: "IP Failover", ports: "1649", protocol: "TCP" },
      { allow: false, description: "VPN L2TP - Layer-Two Tunneling Protocol", ports: "1701", protocol: "UDP" },
      { allow: false, description: "VPN PPTP - Point-to-point Tunneling Protocol", ports: "1723", protocol: "UDP" },
      { allow: false, description: "NFS - Network File Service protocol", ports: "2049", protocol: ["TCP", "UDP"] },
      { allow: false, description: "Macintosh Manager", ports: "2236", protocol: "TCP" },
      { allow: false, description: "iSync", ports: "3004", protocol: "TCP" },
      { allow: false, description: "Remote AppleEvents", ports: "3031", protocol: ["TCP", "UDP"] },
      { allow: false, description: "ARD 2.0 - Apple Remote Desktop 2.0", ports: "3283,5900", protocol: ["TCP", "UDP"] },
      { allow: false, description: "ARD 1.2 - Apple Remote Desktop 1.2", ports: "3283", protocol: "UDP" },
      { allow: false, description: "MySQL", ports: "3306", protocol: "TCP" },
      { allow: false, description: "Distributed compiler", ports: "3632", protocol: "TCP" },
      { allow: false, description: "iTunes music sharing", ports: "3689", protocol: "TCP" },
      { allow: false, description: "XGrid", ports: "4111", protocol: "TCP" },
      { allow: false, description: "IKE NAT Traversal", ports: "4500", protocol: "UDP" },
      { allow: false, description: "FileMaker - name binding and transport", ports: "5003", protocol: ["TCP", "UDP"] },
      { allow: false, description: "iChat - Session Initiation Protocol", ports: "5060", protocol: "UDP" },
      { allow: false, description: "Camera and scanner sharing", ports: "5100", protocol: "TCP" },
      { allow: false, description: "iChat - Instant Messenger, file transfer", ports: "5190", protocol: ["TCP", "UDP"] },
      { allow: false, description: "iChat Server", ports: "5222", protocol: "TCP" },
      { allow: false, description: "iChat Server - SSL", ports: "5223", protocol: "TCP" },
      { allow: false, description: "iChat Server - server-to-server", ports: "5269", protocol: "TCP" },
      { allow: false, description: "iChat - local UDP", ports: "5297,5678", protocol: "UDP" },
      { allow: false, description: "iChat - local", ports: "5298", protocol: "UDP" },
      { allow: false, description: "mDNS - Multicast DNS", ports: "5353", protocol: "UDP" },
      { allow: false, description: "ARD 2.0 - database", ports: "5432", protocol: "TCP" },
      { allow: false, description: "ARD 2.0 - CIM/OpenWBEM", ports: "5988,5989", protocol: "TCP" },
      { allow: false, description: "QTSS RTP Streaming", ports: "6970-6999", protocol: "UDP" },
      { allow: false, description: "RTSP - QTSS streaming, Automatic Router Configuration", ports: "7070", protocol: ["TCP", "UDP"] },
      { allow: false, description: "iChat Server - file transfer proxy", ports: "7777", protocol: "TCP" },
      { allow: false, description: "QTSS MP3 streaming", ports: "8000-8001", protocol: "TCP" },
      { allow: false, description: "Web service, iTunes Radio streams", ports: "8000-8999", protocol: "TCP" },
      { allow: false, description: "Tomcat remote shutdown", ports: "8005", protocol: "TCP" },
      { allow: false, description: "HTTP - web service alternate (Apache 2 default)", ports: "8080", protocol: "TCP" },
      { allow: false, description: "HTTP and HTTPS ports for Tomcat standalone and JBoss J2EE", ports: "9006, 8080, 8443", protocol: "TCP" },
      { allow: false, description: "Remote web server access to an AJP port", ports: "9007", protocol: "TCP" },
      { allow: false, description: "Web Performance Cache redirects", ports: "16080", protocol: "TCP" },
      { allow: false, description: "iChat - audio/video RTP and RTCP", ports: "16387-16403", protocol: "UDP" },
      { allow: false, description: "iTunes Radio streams", ports: "42000-42999", protocol: "TCP" },
      { allow: false, description: "FileMaker - server service", ports: "50003", protocol: ["TCP", "UDP"] },
      { allow: false, description: "FileMaker - helper service", ports: "50006", protocol: ["TCP", "UDP"] },
      { allow: true, description: "ICMP - echo reply messages (replies to outgoing pings)", ports: "icmptypes 0", protocol: "ICMP" },
      { allow: false, description: "ICMP - required types only", ports: "icmptypes 3,4,11,12", protocol: "ICMP" },
      { allow: true, description: "ICMP - echo request messages (incoming pings)", ports: "icmptypes 8", protocol: "ICMP" },
    ];

    return {
      addressGroups: addressGroups,
      rules: rules,
      networkInterfaceOptions: networkInterfaceOptions,
      selectednetworkInterface: 1,
      firewallRules: firewallRules
    }
  }
}
</script>

<style scoped>

</style>
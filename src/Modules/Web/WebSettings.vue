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
                <label>Connection timeout:</label>
                <input type="number">
                <span style="margin-left: 10px;">seconds</span>
              </sui-form-field>
              <sui-form-field inline>
                <label>Minimum spare servers:</label>
                <input type="number">
              </sui-form-field>
              <sui-form-field inline>
                <label>Maximum spare servers:</label>
                <input type="number">
              </sui-form-field>
              <sui-form-field inline>
                <label>Number of servers to start:</label>
                <input type="number">
              </sui-form-field>

              <sui-checkbox label="Allow Persistent Connections" style="margin-top: 20px;" />
              <div style="margin-left: 50px; margin-top: 15px;">
                <sui-form-field inline>
                  <label>Maximum persistent connections:</label>
                  <input type="number">
                </sui-form-field>
                <sui-form-field inline>
                  <label>Persistent connection timeout:</label>
                  <input type="number">
                  <span style="margin-left: 10px;">seconds</span>
                </sui-form-field>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Sites">
            <sui-form>
              <div style="text-align: right;">
                <sui-form-field inline>
                  <input type="text" placeholder="Filter Sites By Domain" />
                </sui-form-field>
              </div>
              <div class="table-container" style="height: 425px; margin-top: 20px;">
                <sui-table compact selectable padded basic="very">
                  <sui-table-header>
                    <sui-table-row>
                      <sui-table-header-cell text-align="center" :width="2">Enabled</sui-table-header-cell>
                      <sui-table-header-cell>Domain Name</sui-table-header-cell>
                      <sui-table-header-cell>Address</sui-table-header-cell>
                      <sui-table-header-cell>Port</sui-table-header-cell>
                    </sui-table-row>
                  </sui-table-header>
                  <sui-table-body>
                    <sui-table-row v-for="site in sites" :key="site.id">
                      <sui-table-cell text-align="center" :width="2">
                        <sui-checkbox label="" v-model="site.enabled" />
                      </sui-table-cell>
                      <sui-table-cell>
                        <router-link :to="{name: 'web-site-editor', params: {siteID: site.id}}">
                          {{ site.domainName }}
                        </router-link>
                      </sui-table-cell>
                      <sui-table-cell>{{ site.address }}</sui-table-cell>
                      <sui-table-cell>{{ site.port }}</sui-table-cell>
                    </sui-table-row>
                  </sui-table-body>
                </sui-table>
              </div>
              <div is="sui-button-group" style="margin-bottom: 15px;">
                <sui-button icon="plus" compact />
                <sui-button icon="copy" compact />
                <sui-button icon="minus" compact />
                <sui-button icon="pencil alternate" compact />
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="MIME Types">
            <sui-tab :menu="{ secondary: true }">
              <sui-tab-pane title="MIME Types">
                <div class="table-container" style="height: 425px; margin-top: 20px;">
                  <sui-table compact selectable padded basic="very">
                    <sui-table-header>
                      <sui-table-row>
                        <sui-table-header-cell>MIME Type</sui-table-header-cell>
                        <sui-table-header-cell>Suffix</sui-table-header-cell>
                      </sui-table-row>
                    </sui-table-header>
                    <sui-table-body>
                      <sui-table-row v-for="mt in mimeTypes" :key="mt.id">
                        <sui-table-cell :width="8">{{ mt.mimeTypeName }}</sui-table-cell>
                        <sui-table-cell :width="8">{{ mt.suffix }}</sui-table-cell>
                      </sui-table-row>
                    </sui-table-body>
                  </sui-table>
                </div>
                <div is="sui-button-group" style="margin-bottom: 15px;">
                  <sui-button icon="plus" compact />
                  <sui-button icon="copy" compact />
                  <sui-button icon="minus" compact />
                  <sui-button icon="pencil alternate" compact />
                </div>
              </sui-tab-pane>
              <sui-tab-pane title="Content Handlers">
                <div class="table-container" style="height: 425px; margin-top: 20px;">
                  <sui-table compact selectable padded basic="very">
                    <sui-table-header>
                      <sui-table-row>
                        <sui-table-header-cell>Handler</sui-table-header-cell>
                        <sui-table-header-cell>Suffix</sui-table-header-cell>
                      </sui-table-row>
                    </sui-table-header>
                    <sui-table-body>
                      <sui-table-row v-for="h in handlers" :key="h.id">
                        <sui-table-cell :width="8">{{ h.handlerName }}</sui-table-cell>
                        <sui-table-cell :width="8">{{ h.suffix }}</sui-table-cell>
                      </sui-table-row>
                    </sui-table-body>
                  </sui-table>
                </div>
                <div is="sui-button-group" style="margin-bottom: 15px;">
                  <sui-button icon="plus" compact />
                  <sui-button icon="copy" compact />
                  <sui-button icon="minus" compact />
                  <sui-button icon="pencil alternate" compact />
                </div>
              </sui-tab-pane>
            </sui-tab>
          </sui-tab-pane>
          <sui-tab-pane title="Weblogs">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Weblogs" />
              </sui-form-field>
              <div style="margin-left: 50px;">
                <p>Access this server's weblogs at http://_servername_/weblog/.</p>
                <sui-form-field>
                  <label>Default theme:</label>
                  <sui-dropdown
                      placeholder="Theme"
                      selection
                      :options="themeOptions"
                      v-model="selectedThemeOption"
                  />
                </sui-form-field>
                <sui-form-field>
                  <label>Weblog folder:</label>
                  <div style="display: flex;">
                    <div style="flex: 9;">
                      <input type="text" />
                    </div>
                    <div style="flex: 1; text-align: center;">
                      <sui-button icon="ellipsis horizontal" compact style="margin-left: 10px;" />
                    </div>
                  </div>
                </sui-form-field>
                <sui-form-field>
                  <label>Email domain:</label>
                  <input type="email" />
                </sui-form-field>
                <div style="margin-left: 25px;">
                  <p>To set a default email address for new weblogs, enter a domain (e.g., apple.com).</p>
                </div>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Proxy">
            <sui-form>
              <sui-form-field>
                <sui-checkbox label="Enable Proxy" />
              </sui-form-field>

              <div style="margin-left: 50px;">
                <sui-form-field>
                  <sui-checkbox label="Control Access To Proxy" />
                </sui-form-field>
                <sui-form-field>
                  <label>Allowed Domain:</label>
                  <input type="text" />
                </sui-form-field>
                <sui-form-field inline>
                  <label>Maximum cache size:</label>
                  <input type="number">
                  <span style="margin-left: 10px;">MB</span>
                </sui-form-field>
                <sui-form-field>
                  <label>Cache folder:</label>
                  <div style="display: flex;">
                    <div style="flex: 9;">
                      <input type="text" />
                    </div>
                    <div style="flex: 1; text-align: center;">
                      <sui-button icon="ellipsis horizontal" compact style="margin-left: 10px;" />
                    </div>
                  </div>
                </sui-form-field>

                <h4>Blocked Hosts</h4>
                <div class="table-container" style="height: 225px;">
                  <sui-table compact selectable padded basic="very">
                    <sui-table-header>
                      <sui-table-row>
                        <sui-table-header-cell>Host Identifiers</sui-table-header-cell>
                      </sui-table-row>
                    </sui-table-header>
                    <sui-table-body>
                      <sui-table-row v-for="h in hostIdentifiers" :key="h.id">
                        <sui-table-cell :width="8">{{ h.name }}</sui-table-cell>
                      </sui-table-row>
                    </sui-table-body>
                  </sui-table>
                </div>
                <div is="sui-button-group" style="margin-bottom: 15px;">
                  <sui-button icon="plus" compact />
                  <sui-button icon="minus" compact />
                </div>
              </div>
            </sui-form>
          </sui-tab-pane>
          <sui-tab-pane title="Modules">
            <div class="table-container">
              <sui-table compact selectable padded basic="very">
                <sui-table-header>
                  <sui-table-row>
                    <sui-table-header-cell :width="2" text-align="center">Enabled</sui-table-header-cell>
                    <sui-table-header-cell :width="5">Module</sui-table-header-cell>
                    <sui-table-header-cell :width="4">C File</sui-table-header-cell>
                    <sui-table-header-cell :width="5">Path</sui-table-header-cell>
                  </sui-table-row>
                </sui-table-header>
                <sui-table-body>
                  <sui-table-row v-for="m in modules" :key="m.id">
                    <sui-table-cell :width="2" text-align="center">
                      <sui-checkbox label="" v-model="m.enabled" />
                    </sui-table-cell>
                    <sui-table-cell :width="5">{{ m.moduleName }}</sui-table-cell>
                    <sui-table-cell :width="4">{{ m.cFile }}</sui-table-cell>
                    <sui-table-cell :width="5">{{ m.path }}</sui-table-cell>
                  </sui-table-row>
                </sui-table-body>
              </sui-table>
            </div>

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
  components: {WebMenu},
  data() {
    let sites = [
      {id: 1, enabled: true, domainName: "localhost", address: "*", port: 80}
    ];

    const mimeTypes = [
      {id: 1, mimeTypeName: "application/andrew-inset", suffix: "ez"},
      {id: 2, mimeTypeName: "application/mac-binhex40", suffix: "hqx"},
      {id: 3, mimeTypeName: "application/mac-compactpro", suffix: "cpt"},
      {id: 4, mimeTypeName: "application/msword", suffix: "doc"},
      {id: 5, mimeTypeName: "application/octet-stream", suffix: ["bin", "dms", "lha", "lhz", "exe", "class", "so", "dll", "dmg"]},
      {id: 6, mimeTypeName: "application/oda", suffix: "oda"},
      {id: 7, mimeTypeName: "application/pdf", suffix: "pdf"},
      {id: 8, mimeTypeName: "application/postscript", suffix: ["ai", "eps", "ps"]},
      {id: 9, mimeTypeName: "application/rtf", suffix: "rtf"},
      {id: 10, mimeTypeName: "application/smil", suffix: ["smi", "smil"]},
      {id: 11, mimeTypeName: "application/vnd.mif", suffix: "mif"},
      {id: 12, mimeTypeName: "application/vnd.ms-excel", suffix: "xls"},
      {id: 13, mimeTypeName: "application/vnd.ms-powerpoint", suffix: "ppt"},
      {id: 14, mimeTypeName: "application/vnd.wap.wbxml", suffix: "wbxml"},
      {id: 15, mimeTypeName: "application/vnd.wap.wxmlc", suffix: "wxmlc"},
      {id: 16, mimeTypeName: "application/vnd.wap.wmlscriptc", suffix: "wmlsc"},
      {id: 17, mimeTypeName: "application/x-bcpio", suffix: "bcpio"},
      {id: 18, mimeTypeName: "application/x-cdlink", suffix: "vcd"},
      {id: 19, mimeTypeName: "application/x-chess-pgn", suffix: "pgn"},
      {id: 20, mimeTypeName: "application/x-cpio", suffix: "cpio"},
      {id: 14, mimeTypeName: "application/x-csh", suffix: "csh"},
      {id: 15, mimeTypeName: "application/x-director", suffix: ["dcr", "dir", "dxr"]},
      {id: 16, mimeTypeName: "application/x-dvi", suffix: "dvi"},
      {id: 17, mimeTypeName: "application/x-futuresplash", suffix: "spl"},
      {id: 18, mimeTypeName: "application/x-gtar", suffix: "gtar"},
      {id: 19, mimeTypeName: "application/x-hdf", suffix: "hdf"},
      {id: 20, mimeTypeName: "application/x-javascript", suffix: "js"},
      {id: 14, mimeTypeName: "application/x-java-jnlp-file", suffix: "jnlp"},
      {id: 15, mimeTypeName: "application/x-koan", suffix: ["skp", "skd", "skt", "skm"]},
      {id: 16, mimeTypeName: "application/x-latex", suffix: "latex"},
      {id: 17, mimeTypeName: "application/x-netcdf", suffix: ["nc", "cdf"]},
      {id: 18, mimeTypeName: "application/x-sh", suffix: "sh"},
      {id: 19, mimeTypeName: "application/x-shar", suffix: "shar"},
      {id: 20, mimeTypeName: "application/x-shockwave-flash", suffix: "swf"},
      {id: 14, mimeTypeName: "application/x-stuffit", suffix: "sit"},
      {id: 15, mimeTypeName: "application/x-sv4cpio", suffix: "sv4cpio"},
      {id: 16, mimeTypeName: "application/x-sv4crc", suffix: "sv4crc"},
      {id: 17, mimeTypeName: "application/x-tar", suffix: ["tar", "tgz"]},
      {id: 18, mimeTypeName: "application/x-tcl", suffix: "tcl"},
      {id: 19, mimeTypeName: "application/x-tex", suffix: "text"},
      {id: 20, mimeTypeName: "application/x-texinfo", suffix: ["texinfo", "texi"]},
      {id: 14, mimeTypeName: "application/x-troff", suffix: ["t", "tr", "roff"]},
      {id: 15, mimeTypeName: "application/x-troff-man", suffix: "man"},
      {id: 16, mimeTypeName: "application/x-troff-me", suffix: "me"},
      {id: 17, mimeTypeName: "application/x-troff-ms", suffix: "ms"},
      {id: 18, mimeTypeName: "application/x-ustar", suffix: "ustar"},
      {id: 19, mimeTypeName: "application/x-wais-source", suffix: "src"},
      {id: 20, mimeTypeName: "application/xhtml+xml", suffix: ["xhtm", "xht"]},
      {id: 17, mimeTypeName: "application/zip", suffix: "zip"},
      {id: 18, mimeTypeName: "audio/basic", suffix: ["au", "snd"]},
      {id: 19, mimeTypeName: "audio/midi", suffix: ["mid", "midi", "kar"]},
      {id: 20, mimeTypeName: "audio/mpeg", suffix: ["mpga", "mp2", "mp3"]},
      {id: 14, mimeTypeName: "audio/x-m4a", suffix: "m4a"},
      {id: 15, mimeTypeName: "audio/x-aiff", suffix: ["aif", "aiff", "aifc"]},
      {id: 16, mimeTypeName: "audio/x-mpegurl", suffix: ["m3u"]},
      {id: 17, mimeTypeName: "audio/x-pn-realaudio", suffix: ["ram", "rm"]},
      {id: 18, mimeTypeName: "audio/x-pn-realaudio-plugin", suffix: "rpm"},
      {id: 19, mimeTypeName: "audio/x-realaudio", suffix: "ra"},
      {id: 20, mimeTypeName: "audio/x-scpls", suffix: "pls"},
      {id: 17, mimeTypeName: "audio/x-wav", suffix: "wav"},
      {id: 18, mimeTypeName: "audio/3gpp", suffix: ["3gp", "3gpp"]},
      {id: 19, mimeTypeName: "audio/3gp2", suffix: ["3g2", "3gp2"]},
      {id: 20, mimeTypeName: "chemical/x-pdb", suffix: ["pdb", "xyz"]},
      {id: 14, mimeTypeName: "image/bnp", suffix: "bnp"},
      {id: 15, mimeTypeName: "image/gif", suffix: "gif"},
      {id: 16, mimeTypeName: "image/ief", suffix: "ief"},
      {id: 17, mimeTypeName: "image/jpeg", suffix: ["jpeg", "jpg", "jpe"]},
      {id: 18, mimeTypeName: "image/jp2", suffix: "jp2"},
      {id: 19, mimeTypeName: "image/pict", suffix: ["pict", "pic", "pct"]},
      {id: 20, mimeTypeName: "image/png", suffix: "png"},
      {id: 17, mimeTypeName: "image/tiff", suffix: ["tiff", "tif"]},
      {id: 18, mimeTypeName: "image/vnd.djvu", suffix: ["djvu", "djv"]},
      {id: 19, mimeTypeName: "image/vnd.wap.wbmp", suffix: "wbmp"},
      {id: 20, mimeTypeName: "image/x-cmu-raster", suffix: "ras"},
      {id: 14, mimeTypeName: "image/x-macpaint", suffix: ["pntg", "pnt", "mac"]},
      {id: 15, mimeTypeName: "image/x-portable-anymap", suffix: "pnm"},
      {id: 16, mimeTypeName: "image/x-portable-bitmap", suffix: "pbm"},
      {id: 17, mimeTypeName: "image/x-portable-graymap", suffix: "pgm"},
      {id: 17, mimeTypeName: "image/x-portable-pixmap", suffix: "ppm"},
      {id: 18, mimeTypeName: "image/x-quicktime", suffix: ["qti", "qtif"]},
      {id: 19, mimeTypeName: "image/x-rgb", suffix: "rgb"},
      {id: 20, mimeTypeName: "image/x-xbitmap", suffix: "xbm"},
      {id: 17, mimeTypeName: "image/x-xpixmap", suffix: "xpm"},
      {id: 18, mimeTypeName: "image/x-xwindowdump", suffix: "xwd"},
      {id: 19, mimeTypeName: "model/iges", suffix: ["igs", "iges"]},
      {id: 20, mimeTypeName: "model/mesh", suffix: ["msh", "mesh", "silo"]},
      {id: 14, mimeTypeName: "model/vrml", suffix: ["wrl", "vrml"]},
      {id: 15, mimeTypeName: "text/css", suffix: "css"},
      {id: 16, mimeTypeName: "text/html", suffix: ["html", "htm", "shtml"]},
      {id: 17, mimeTypeName: "text/plain", suffix: ["asc", "txt"]},
      {id: 18, mimeTypeName: "text/richtext", suffix: "trx"},
      {id: 19, mimeTypeName: "text/rtf", suffix: "rtf"},
      {id: 20, mimeTypeName: "text/sgml", suffix: ["sgml", "sgm"]},
      {id: 15, mimeTypeName: "text/tab-separated-values", suffix: "tsv"},
      {id: 16, mimeTypeName: "text/vnd.wap.wml", suffix: "wml"},
      {id: 17, mimeTypeName: "text/vnd.wap.wmlscript", suffix: "wvmls"},
      {id: 18, mimeTypeName: "text/x-setext", suffix: "etx"},
      {id: 19, mimeTypeName: "text/xml", suffix: ["xml", "xsl"]},
      {id: 20, mimeTypeName: "video/mpeg", suffix: ["mpeg", "mpg", "mpe"]},
      {id: 15, mimeTypeName: "video/mp4", suffix: "mp4"},
      {id: 16, mimeTypeName: "video/quicktime", suffix: ["qt", "mov"]},
      {id: 17, mimeTypeName: "video/vnd.mpegurl", suffix: "mxu"},
      {id: 18, mimeTypeName: "video/x-dv", suffix: ["dv", "dif"]},
      {id: 19, mimeTypeName: "video/x-msvideo", suffix: "avi"},
      {id: 20, mimeTypeName: "video/x-sgi-movie", suffix: "movie"},
      {id: 15, mimeTypeName: "video/3gpp", suffix: ["3gp", "3gpp"]},
      {id: 16, mimeTypeName: "video/3gp2", suffix: ["3g2", "3gp2"]},
      {id: 17, mimeTypeName: "x-conference/x-cooltalk", suffix: "ice"},
      {id: 18, mimeTypeName: "application/x-httpd-php3", suffix: "php3"},
      {id: 19, mimeTypeName: "application/x-httpd-php3-source", suffix: "phps"},
      {id: 20, mimeTypeName: "application/x-httpd-php", suffix: "php"},
      {id: 15, mimeTypeName: "application/x-httpd-php-source", suffix: "phps"},
      {id: 16, mimeTypeName: "application/x-quicktimeplayer", suffix: "qtl"},
    ];

    const handlers = [
      {id: 1, handlerName: "send-as-id", suffix: "asis"},
      {id: 2, handlerName: "cgi-script", suffix: "cgi"},
      {id: 3, handlerName: "imap-file", suffix: "map"},
      {id: 4, handlerName: "server-parsed", suffix: "shtml"},
      {id: 5, handlerName: "type-map", suffix: "var"},
      {id: 6, handlerName: "mac-binary", suffix: "bin"},
      {id: 7, handlerName: "spotlight-search", suffix: "spotlight"},
    ];

    const themeOptions = [
      {key: 1, text: "Grey", value: "grey"},
      {key: 2, text: "White", value: "white"},
      {key: 3, text: "Graphite", value: "graphite"},
      {key: 4, text: "Blue", value: "blue"},
    ];

    const hostIdentifiers = [];

    const modules = [
      {id: 1, enabled: false, moduleName: "vhost_alias_module", cFile: "mod_vhost_alias.c", path: "libexec/httpd/mod_vhost_alias.so"},
      {id: 2, enabled: false, moduleName: "env_module", cFile: "mod_env.c", path: "libexec/httpd/mod_env.so"},
      {id: 3, enabled: true, moduleName: "config_log_module", cFile: "mod_log_config.c", path: "libexec/httpd/mod_log_config.so"},
      {id: 4, enabled: false, moduleName: "mime_magic_module", cFile: "mod_mime_magic.c", path: "libexec/httpd/mod_mime_magic.so"},
      {id: 5, enabled: true, moduleName: "mime_module", cFile: "mod_mime.c", path: "libexec/httpd/mod_mime.so"},
      {id: 6, enabled: true, moduleName: "negotiation_module", cFile: "mod_negotiation.c", path: "libexec/httpd/mod_negotiation.so"},
      {id: 7, enabled: true, moduleName: "status_module", cFile: "mod_status.c", path: "libexec/httpd/mod_status.so"},
      {id: 8, enabled: true, moduleName: "info_module", cFile: "mod_info.c", path: "libexec/httpd/mod_info.so"},
      {id: 9, enabled: true, moduleName: "includes_module", cFile: "mod_include.c", path: "libexec/httpd/mod_include.so"},
      {id: 10, enabled: true, moduleName: "autoindex_module", cFile: "mod_autoindex.c", path: "libexec/httpd/mod_autoindex.so"},
      {id: 11, enabled: true, moduleName: "dir_module", cFile: "mod_dir.c", path: "libexec/httpd/mod_dir.so"},
      {id: 12, enabled: true, moduleName: "cgi_module", cFile: "mod_cgi.c", path: "libexec/httpd/mod_cgi.so"},
      {id: 13, enabled: true, moduleName: "asis_module", cFile: "mod_asis.c", path: "libexec/httpd/mod_asis.so"},
      {id: 14, enabled: true, moduleName: "imap_module", cFile: "mod_imap.c", path: "libexec/httpd/mod_imap.so"},
      {id: 15, enabled: true, moduleName: "action_module", cFile: "mod_actions.c", path: "libexec/httpd/mod_actions.so"},
      {id: 16, enabled: false, moduleName: "speling_module", cFile: "mod_speling.c", path: "libexec/httpd/mod_speling.so"},
      {id: 17, enabled: true, moduleName: "userdir_module", cFile: "mod_userdir.c", path: "libexec/httpd/mod_userdir.so"},
      {id: 18, enabled: true, moduleName: "alias_module", cFile: "mod_alias.c", path: "libexec/httpd/mod_alias.so"},
      {id: 19, enabled: true, moduleName: "rewrite_module", cFile: "mod_rewrite.c", path: "libexec/httpd/mod_rewrite.so"},
      {id: 20, enabled: true, moduleName: "access_module", cFile: "mod_access.c", path: "libexec/httpd/mod_access.so"},
      {id: 18, enabled: true, moduleName: "apple_auth_module", cFile: "mod_auth_apple.c", path: "libexec/httpd/mod_auth_apple.so"},
      {id: 19, enabled: false, moduleName: "anon_auth_module", cFile: "mod_auth_anon.c", path: "libexec/httpd/mod_auth_anon.so"},
      {id: 20, enabled: false, moduleName: "dbm_auth_module", cFile: "mod_auth_dbm.c", path: "libexec/httpd/mod_auth_dbm.so"},
      {id: 18, enabled: false, moduleName: "digest_module", cFile: "mod_digest.c", path: "libexec/httpd/mod_digest.so"},
      {id: 19, enabled: true, moduleName: "proxy_module", cFile: "mod_proxy.c", path: "libexec/httpd/mod_libproxy.so"},
      {id: 20, enabled: false, moduleName: "cern_meta_module", cFile: "mod_cern_meta.c", path: "libexec/httpd/mod_cern_meta.so"},
      {id: 18, enabled: true, moduleName: "expires_module", cFile: "mod_expires.c", path: "libexec/httpd/mod_expires.so"},
      {id: 19, enabled: false, moduleName: "headers_module", cFile: "mod_headers.c", path: "libexec/httpd/mod_headers.so"},
      {id: 20, enabled: false, moduleName: "usertrack_module", cFile: "mod_usertrack.c", path: "libexec/httpd/mod_usertrack.so"},
      {id: 18, enabled: false, moduleName: "unique_id_module", cFile: "mod_unique_id.c", path: "libexec/httpd/mod_unique_id.so"},
      {id: 19, enabled: true, moduleName: "so_module_module", cFile: "mod_so.c", path: ""},
      {id: 20, enabled: true, moduleName: "sentenvif_module", cFile: "mod_sentenvif.c", path: "libexec/httpd/mod_sentenvif.so"},
      {id: 18, enabled: true, moduleName: "apple_macbinary_module", cFile: "mod_macbinary_apple.c", path: "libexec/httpd/mod_macbinary_apple.so"},
      {id: 19, enabled: false, moduleName: "apple_spotlight_module", cFile: "mod_spotlight_apple.c", path: "libexec/httpd/mod_spotlight_apple.so"},
      {id: 20, enabled: false, moduleName: "perl_module", cFile: "mod_perl.c", path: "libexec/httpd/mod_libperl.so"},
      {id: 18, enabled: false, moduleName: "php4_module", cFile: "mod_php4.c", path: "libexec/httpd/mod_php4.so"},
      {id: 19, enabled: true, moduleName: "hfs_apple_module", cFile: "mod_hfs_apple.c", path: "libexec/httpd/mod_hfs_apple.so"},
      {id: 20, enabled: true, moduleName: "apple_digest_module", cFile: "mod_digest_apple.c", path: "libexec/httpd/mod_digest_apple.so"},
      {id: 18, enabled: false, moduleName: "bonjour_module", cFile: "mod_bonjour.c", path: "libexec/httpd/mod_bonjour.so"},
      {id: 19, enabled: true, moduleName: "ssl_module", cFile: "mod_ssl.c", path: "libexec/httpd/mod_libssl.so"},
      {id: 20, enabled: true, moduleName: "dav_module", cFile: "mod_dav.c", path: "libexec/httpd/libdav_encoding.so"},
      {id: 18, enabled: true, moduleName: "jk_module", cFile: "mod_jk.c", path: "libexec/httpd/mod_jk.so"},
      {id: 19, enabled: true, moduleName: "spnego_auth_module", cFile: "mod_spnego_apple.c", path: "libexec/httpd/mod_spnego_apple.so"},
      {id: 20, enabled: false, moduleName: "encoding_module", cFile: "mod_encoding.c", path: "libexec/httpd/mod_encoding.so"},
    ];

    return {
      sites: sites,
      mimeTypes: mimeTypes,
      handlers: handlers,
      selectedThemeOption: "blue",
      themeOptions: themeOptions,
      hostIdentifiers: hostIdentifiers,
      modules: modules
    }
  }
}
</script>

<style scoped>

</style>
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{224:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("h2",{attrs:{id:"get-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-token","aria-hidden":"true"}},[t._v("#")]),t._v(" Get Token")]),t._v(" "),s("p",[t._v("Get an authorization token for api requests that require auth.")]),t._v(" "),s("h3",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[s("strong",[t._v("URL")]),t._v(" : "),s("code",[t._v("/api/oauth/token")])]),t._v(" "),s("p",[s("strong",[t._v("Method")]),t._v(" : "),s("code",[t._v("POST")])]),t._v(" "),s("p",[s("strong",[t._v("Permissions required")]),t._v(" : "),s("code",[t._v("User must have API Access enabled via server console.")])]),t._v(" "),s("p",[s("strong",[t._v("Content Type")]),t._v(" : "),s("code",[t._v("application/x-www-form-urlencoded")])]),t._v(" "),s("p",[s("strong",[t._v("Body")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("grant_type")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Auth Type.")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Username of API Authorized Account")]),t._v(" "),s("td",[t._v("✔️")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("SHA256 Hash of Account Password")]),t._v(" "),s("td",[t._v("✔️")])])])]),t._v(" "),s("p",[s("strong",[t._v("Notes")])]),t._v(" "),s("ul",[s("li",[t._v("The only available grant type right now is 'password'.`")]),t._v(" "),s("li",[t._v("Password must be a SHA256 hash of the user's password, with hyphens removed.`")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[s("strong",[t._v("Condition")]),t._v(" : If authentication was successful and token was generated.")]),t._v(" "),s("p",[s("strong",[t._v("Code")]),t._v(" : "),s("code",[t._v("200 SUCCESS")])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("299")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"efd947fe-a874-4259-9b06-41a8a9505e35"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".issued"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mon, 29 Jul 2019 19:52:04 GMT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('".expires"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mon, 29 Jul 2019 19:57:04 GMT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),s("p",[t._v("For all requests that require authentication you will need to supply the access token within the request header. The proper format can found below.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Header")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("authorization")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Bearer [access_token]")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("authorization: Bearer 4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87\n")])])]),s("p",[t._v("The refresh_token is the token's id, it is used to refresh or delete the token using the routes below.")]),t._v(" "),s("h2",{attrs:{id:"refresh-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refresh-token","aria-hidden":"true"}},[t._v("#")]),t._v(" Refresh Token")]),t._v(" "),s("h2",{attrs:{id:"delete-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-token","aria-hidden":"true"}},[t._v("#")]),t._v(" Delete Token")])])}],!1,null,null,null);e.default=r.exports}}]);
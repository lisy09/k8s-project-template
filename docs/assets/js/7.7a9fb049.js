(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(e,s,t){e.exports=t.p+"assets/img/preview-docs.0f8cc4a7.gif"},369:function(e,s,t){"use strict";t.r(s);var a=t(45),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"build-your-doc-sites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-your-doc-sites"}},[e._v("#")]),e._v(" Build Your Doc Sites")]),e._v(" "),a("p",[e._v("After editing docs in the VSCode Remote Container environment, you can build or preview your docs site with several ways.")]),e._v(" "),a("h2",{attrs:{id:"preview-your-document-sites-with-local-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preview-your-document-sites-with-local-server"}},[e._v("#")]),e._v(" Preview Your Document Sites with Local Server")]),e._v(" "),a("p",[e._v("You can preview your document sites locally by running a docker container to host your markdown documents.\nRun this command:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" preview\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then a VuePress dev server will be started and listened at $VUEPRESS_PREVIEW_PORT port value defined in "),a("code",[e._v("./.env")]),e._v(", default 8081)\nAnd you can check the docs in a browser with the url localhost:$VUEPRESS_PREVIEW_PORT`.")]),e._v(" "),a("p",[e._v("After preview, stop by")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" stop-preview\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(356),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"build-your-document-sites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-your-document-sites"}},[e._v("#")]),e._v(" Build Your Document Sites")]),e._v(" "),a("p",[e._v("Run this command:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The built result is in "),a("code",[e._v("$DOCS_RELATIVE_PATH/.vuepress/dist")]),e._v(" (defined in "),a("code",[e._v("./.env")]),e._v(", default "),a("code",[e._v("docs_src")]),e._v(").")]),e._v(" "),a("p",[e._v("This result is also offlinified by "),a("code",[e._v("./docker/offlinify.js")]),e._v(" so that support "),a("code",[e._v("file://")]),e._v(" access, which means\nthat you can package "),a("code",[e._v("$DOCS_RELATIVE_PATH/.vuepress/dist")]),e._v(" into a zip file and distributed it as an offline documentation. (Please noted that search is not support when using file:// access).")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Please noticed that current "),a("code",[e._v("./docker/offlinify.js")]),e._v(" only supports current directory structure. Please modify the js file when you use other VuePress theme or use untested directory structure.")])]),e._v(" "),a("h2",{attrs:{id:"export-your-site-as-a-single-pdf-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-your-site-as-a-single-pdf-file"}},[e._v("#")]),e._v(" Export Your Site as a Single PDF File")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" pdf\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The built result is in "),a("code",[e._v("$DOCS_RELATIVE_PATH/site.pdf")]),e._v(" (defined in "),a("code",[e._v("./.env")]),e._v(", default "),a("code",[e._v("docs_src")]),e._v(").")])])}),[],!1,null,null,null);s.default=r.exports}}]);
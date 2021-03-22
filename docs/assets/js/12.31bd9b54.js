(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{368:function(e,t,s){"use strict";s.r(t);var a=s(45),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"local-k8s-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-k8s-cluster"}},[e._v("#")]),e._v(" Local K8S Cluster")]),e._v(" "),s("p",[e._v("This document explains basic about "),s("code",[e._v("./local-k8s-cluster")]),e._v(".")]),e._v(" "),s("p",[e._v("This module is the main implementation of "),s("code",[e._v("setup a k8s cluster in docker containers")]),e._v(" with "),s("a",{attrs:{href:"https://kind.sigs.k8s.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kind"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"prerequisite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[e._v("#")]),e._v(" Prerequisite")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("kind")]),e._v(" cli tool. How to install: "),s("a",{attrs:{href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kind.sigs.k8s.io/docs/user/quick-start/#installation"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("code",[e._v("kubectl")]),e._v(" cli tool. How to install: "),s("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/tasks/tools/#kubectl"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("code",[e._v("kustomize")]),e._v(" cli tool. How to install: "),s("a",{attrs:{href:"https://kubectl.docs.kubernetes.io/installation/kustomize/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubectl.docs.kubernetes.io/installation/kustomize/"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"how-to-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How to Use")]),e._v(" "),s("p",[e._v("Deploy a local k8s cluster using "),s("code",[e._v("kind")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" deploy\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Undeploy:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" undeploy\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"advance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advance"}},[e._v("#")]),e._v(" Advance")]),e._v(" "),s("h3",{attrs:{id:"how-to-change-the-k8s-cluster-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-the-k8s-cluster-version"}},[e._v("#")]),e._v(" How to change the k8s cluster version")]),e._v(" "),s("p",[e._v("To specify the version for local k8s cluster, please modify the part below in "),s("code",[e._v("./local-k8s-cluster/.env")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KIND_NODE_IMAGE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kindest/node:v1.19.7\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Available version can be checked here from official "),s("a",{attrs:{href:"https://hub.docker.com/r/kindest/node/tags?page=1&ordering=last_updated",target:"_blank",rel:"noopener noreferrer"}},[e._v("kind docker hub"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"how-to-change-the-number-of-nodes-of-local-k8s-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-the-number-of-nodes-of-local-k8s-cluster"}},[e._v("#")]),e._v(" How to change the number of nodes of local k8s cluster")]),e._v(" "),s("p",[e._v("Modify the part below in "),s("code",[e._v("./local-k8s-cluster/manifest/kind-config.yaml")]),e._v(".")]),e._v(" "),s("p",[e._v("Change the number of "),s("code",[e._v("role: control-plane")]),e._v(" & "),s("code",[e._v("role: worker")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"more-customization-of-local-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-customization-of-local-cluster"}},[e._v("#")]),e._v(" More customization of local cluster")]),e._v(" "),s("p",[e._v("Please check "),s("a",{attrs:{href:"https://kind.sigs.k8s.io/docs/user/configuration/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kind official document"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);
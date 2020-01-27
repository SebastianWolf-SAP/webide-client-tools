(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#RUNTIME_RESOURCES"}},[t._v("Requirejs Bundling: How to ignore AMD resources which should only be resolved at runtime?")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#IGNORE_JS"}},[t._v("Requirejs Bundling: How to ignore None AMD(require.js) resources?")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#VALIDATE_AMD"}},[t._v("Requirejs Bundling: How to handle failures due to automatic detection of None AMD(require.js) resources?")])])]),t._v(" "),n("h2",{attrs:{id:"RUNTIME_RESOURCES"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#RUNTIME_RESOURCES","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirejs Bundling: How to ignore resources which should only be resolved at runtime?")]),t._v(" "),n("p",[t._v("RequireJS optimizer supports resolving certain resources at runtime only.\nThis can cause error message similar to:")]),t._v(" "),n("blockquote",[n("p",[t._v("ENOENT: no such file or directory, open '...\nsap.watt.platform.commandgroup/module/MenuItem.js'\nIn module tree:")])]),t._v(" "),n("pre",[n("code",[t._v("......./DynamicItemProvider\nat Object.fs.openSync (fs.js:583:18)\n")])]),t._v(" "),n("p",[t._v("Resolving only at runtime can be accomplished using the "),n("strong",[t._v("empty:")]),t._v(" directive in the "),n("strong",[t._v("paths")]),t._v(" configuration.")]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"http://requirejs.org/docs/optimization.html#empty",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Require.js Docs"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Usage Example in W5G WebIDE Feature.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" requireJsOptions "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  paths"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sap.watt.saptoolsets.ui5.common.docuutils"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"empty:"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bundling "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webide-client-tools"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bundling\nbundling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundleFeature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/package-fiori.json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  outDir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/fiori/client"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  javaScriptOpts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    optimizeOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" requireJsOptions\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"IGNORE_JS"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#IGNORE_JS","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirejs Bundling: How to ignore None AMD resources?")]),t._v(" "),n("p",[t._v("The bundling logic simply activates the require.js optimizer on all the *.js resources of the feature,\nthis is unfortunately not suitable for bundling none AMD resources such as:")]),t._v(" "),n("ul",[n("li",[t._v("plain JS files.")]),t._v(" "),n("li",[t._v("UI5 JS files.")]),t._v(" "),n("li",[t._v("Common JS Files.")])]),t._v(" "),n("p",[t._v("It is possible to ignore certain file patterns:")]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"http://sap.github.io/webide-client-tools/web/html_docs/interfaces/_api_d_.bundlingapi.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS Docs"),n("OutboundLink")],1),t._v(" -\nsee "),n("strong",[t._v("javaScriptOpts.ignore")]),t._v(" argument of bundleFeature")])]),t._v(" "),n("li",[n("p",[t._v("For example:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("bundling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundleFeature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path_to_package.json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  javaScriptOpts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ignore"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/myPlugin/resources/**.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client/plugin/gruntfile.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Note that the patterns used are "),n("a",{attrs:{href:"https://github.com/isaacs/node-glob#glob-primer",target:"_blank",rel:"noopener noreferrer"}},[t._v("glob patterns"),n("OutboundLink")],1)])])]),t._v(" "),n("h2",{attrs:{id:"VALIDATE_AMD"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#VALIDATE_AMD","aria-hidden":"true"}},[t._v("#")]),t._v(" Require.js Bundling: How to handle failures due to automatic detection of None AMD(require.js) resources?")]),t._v(" "),n("p",[t._v("After the creation of the JS bundled artifacts the webide-client-tools will attempt to verify\nthat the artifact "),n("strong",[t._v("only")]),t._v(" contains AMD style entries.")]),t._v(" "),n("p",[t._v("This means that the artifact conforms to the following pattern:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sap.webide.example.plugin/command/HelloWorld"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code may only appear inside require.js define calls...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// more define calls...")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sap.webide.example.plugin/service/helloUtils"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("If an error message about None-AMD source code is raised then one should first check to see if those sources\nare indeed valid error messages, for example:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sap.webide.example.plugin/command/HelloWorld"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code may only appear inside require.js define calls...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will be LAZY executed, when required as a dependency.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Very bad! will be executed during initial artifact loading and could cause unexpected side effects.")]),t._v("\njquery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("declare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("This visual inspection may prove difficult as the artifact is normally minimifed using ugilfy2.\nIt is possible to create an unminified artifact for easier debugging by modifying the requirjs\n"),n("a",{attrs:{href:"https://github.com/requirejs/r.js/blob/master/build/example.build.js",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("optimizeOptions")]),n("OutboundLink")],1),t._v(" passed to the bundleFeature call..")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("bundling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundleFeature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path_to_package.json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  javaScriptOpts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    optimizeOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      optimize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("If the detected sources should not have been bundled then exclude them using the\n"),n("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/blob/master/FAQ.md#IGNORE_JS",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("ignore")]),n("OutboundLink")],1),t._v(" option.")]),t._v(" "),n("p",[t._v("Alternatively if the detected sources are valid inclusions (UMD bundles / 3rd party bundled code)\nwhich should be executed on bundle loading then it is possible to ignore this validation\nusing the "),n("strong",[t._v("ignoreValidations")]),t._v(" option.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("bundling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundleFeature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path_to_package.json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  javaScriptOpts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ignoreValidations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Note that if the validations have been ignored the feature developers take over the responsibility of avoiding\nunintended side effects when loading their bundle. Such side effects could at worst break unrelated feature in the webide\nor the webide itself.")])])}),[],!1,null,null,null);s.default=a.exports}}]);